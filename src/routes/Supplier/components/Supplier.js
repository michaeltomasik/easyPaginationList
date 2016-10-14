import React, { PropTypes } from 'react'

import TableSupplier from '../../../components/Table'
import PaginationAdvanced from '../../../components/PaginationAdvanced'
import OptionBar from '../../../components/OptionBar'
import ModalSupplier from '../../../components/ModalSupplier'

export const Supplier = React.createClass({
  propTypes: {
    supplier: PropTypes.shape({
      pagination: PropTypes.object.isRequired,
      payments: PropTypes.array.isRequired
    }),
    getSuppliers : React.PropTypes.func.isRequired
  },

  getInitialState: function () {
    const { supplier } = this.props

    return {
      payments: supplier.payments,
      pagination: supplier.pagination,
      active: 0,
      rating: 0,
      query: '',
      showModal: false,
      openedPayment: {}
    }
  },

  componentWillMount : function () {
    this.props.getSuppliers()
  },

  componentWillReceiveProps : function (nextProps) {
    if (nextProps.supplier.pagination !== this.state.pagination ||
        nextProps.supplier.payments !== this.state.payments) {
      this.setState({
        payments: nextProps.supplier.payments,
        pagination: nextProps.supplier.pagination
      })
    }
  },

  handlePageChanged: function (newPage) {
    this.setState({ active : newPage - 1 },
      () => { this.updateTableRows() }
    )
  },

  handleChangeSearch (event) {
    this.setState({ query: event.target.value })
  },

  handleChangeRating (event) {
    this.setState({ rating: event.target.value })
  },

  handleOnClickSearch () {
    this.setState({ active : 0 },
      () => { this.updateTableRows() }
    )
  },

  handleOnClickReset () {
    this.setState({
      active : 0,
      query: '',
      rating: 0
    },
      () => { this.updateTableRows() }
    )
  },

  updateTableRows () {
    const { active, rating, query } = this.state
    this.props.getSuppliers(active, rating, query)
  },

  closeModal () {
    this.setState({ showModal: false })
  },

  openModal (payment) {
    this.setState({
      showModal: true,
      openedPayment: payment
    })
  },

  render () {
    const { payments, pagination, active, query, rating, showModal, openedPayment } = this.state

    const showPagination = pagination.current === 0 ? null
    : <PaginationAdvanced
      active={active + 1}
      handlePageChanged={this.handlePageChanged}
      max={pagination.total} />

    // changing UPPERCASE to 1st Capital letters
    payments.map((payment) => {
      payment.payment_supplier = payment.payment_supplier.replace(/[a-zA-z]\.|\w\S*/g,
        function (txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        })
      return payment
    })
    return (
      <div style={{ width: '100%', margin: '0 auto' }}>
        <p style={{ color:'#2081BB', fontSize: '70px', fontFamily:'Source Sans Pro Light' }}>Where  your money goes</p>
        <p style={{ fontSize: '20px' }}>Payments made by Chichester District Council to individual
        suppliers with a value over £500 made within October.</p>
        <hr style={{ marginBottom:'10px' }} />
        <OptionBar
          query={query}
          rating={rating}
          handleChangeSearch={this.handleChangeSearch}
          handleChangeRating={this.handleChangeRating}
          handleOnClickSearch={this.handleOnClickSearch}
          handleOnClickReset={this.handleOnClickReset} />
        <TableSupplier
          payments={payments}
          openModal={this.openModal} />
        {showPagination}
        <ModalSupplier
          payment={openedPayment}
          showModal={showModal}
          closeModal={this.closeModal} />
      </div>
    )
  }
})

export default Supplier
