import React from 'react'
import TableSupplier from '../../../components/Table'
import PaginationAdvanced from '../../../components/PaginationAdvanced'
import OptionBar from '../../../components/OptionBar'

export const Supplier = React.createClass({
  getInitialState: function () {
    const { supplier } = this.props
    console.log('INITIAL', this.props)
    // const payments = supplier.payments ? supplier.payments : []
    // const pagination = supplier.pagination ? supplier.pagination : {}
    return {
      payments: supplier.payments,
      pagination: supplier.pagination,
      active: 1,
      rating: 0,
      query: ''
    }
  },

  componentWillMount : function () {
    this.props.getSuppliers();
  },

  componentWillReceiveProps : function (nextProps) {
    //this.getData()
    console.log('componentWillReceiveProps',this.state, nextProps);
    const { supplier } = this.state
    if( nextProps.supplier.pagination !== this.state.pagination ||
        nextProps.supplier.payments !== this.state.payments) {
      console.log('component WESZLO !!!');
      this.setState({
        payments: nextProps.supplier.payments,
        pagination: nextProps.supplier.pagination
      });
    }
  },

  handlePageChanged: function (newPage) {
    console.log(newPage)
    this.setState({ active : newPage },
      () => { this.updateTableRows() }
    )
  },

  handleChangeSearch (event) {
    this.setState({query: event.target.value});
  },

  handleChangeRating (event) {
    this.setState({rating: event.target.value});
  },

  handleOnClickSearch () {
    this.setState({ active : 1 },
      () => { this.updateTableRows() }
    )
  },

  handleOnClickReset () {
    this.setState({
      active : 1,
      query: '',
      rating: 0
    },
      () => { this.updateTableRows() }
    )
  },

  updateTableRows() {
    const { active, rating, query } = this.state;
    this.props.getSuppliers(active-1, rating, query)
  },

  render () {
    const { supplier } = this.props;
    const { payments, pagination, active, query, rating } = this.state;
    console.log(supplier, this.state, 'supplier');
    const showPagination = pagination.current === 0 ? null :
      <PaginationAdvanced
        active={active}
        handlePageChanged={this.handlePageChanged}
        items={pagination.to}
        max={pagination.total} />

    return(
      <div style={{ margin: '0 auto' }} >
        <h2>Where  your money goes</h2>
        <p>Payments made by Chichester District Council to individual suppliers with a value over £500 made within October.</p>
        <hr />
        <OptionBar
          query={query}
          rating={rating}
          handleChangeSearch={this.handleChangeSearch}
          handleChangeRating={this.handleChangeRating}
          handleOnClickSearch={this.handleOnClickSearch}
          handleOnClickReset={this.handleOnClickReset} />
        <TableSupplier payments={payments} pagination={pagination} />
        {showPagination}
      </div>
    )
  }
})

// FindSupplier.propTypes = {
//   counter     : React.PropTypes.number.isRequired,
//   doubleAsync : React.PropTypes.func.isRequired,
//   increment   : React.PropTypes.func.isRequired
// }

export default Supplier
