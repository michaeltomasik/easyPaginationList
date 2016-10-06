import React from 'react'
import TableSupplier from '../../../components/Table'
import PaginationAdvanced from '../../../components/PaginationAdvanced'
import axios from 'axios'

export const Supplier = React.createClass({
  getInitialState: function () {
    // const { supplier } = this.props
    // console.log('INITIAL', this.props)
    // const payments = supplier.payments ? supplier.payments : []
    // const pagination = supplier.pagination ? supplier.pagination : {}
    return {
      payments: [],
      pagination: {}
    }
  },

  componentWillMount : function () {
    const data = axios.get('http://test-api.kuria.tshdev.io/?rating=3&page=2')
    .then((result) => {
      console.log(result);
      const { payments, pagination } = result.data
      this.setState({
        payments: payments,
        pagination: pagination
      })
    })
  },

  render () {
    const { supplier } = this.props;
    const { payments, pagination } = this.state;
    console.log(supplier, this.state, 'supplier');
    return(
      <div style={{ margin: '0 auto' }} >
        <h2>Where  your money goes</h2>
        <p>Payments made by Chichester District Council to individual suppliers with a value over £500 made within October.</p>
        <hr />
        <input type='text' placeholder='Search suppliers' />
        <select>
          <option value="none">Select pound rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button> Reset </button>
        <button> Search </button>
        <TableSupplier payments={payments} pagination={pagination} />
        <Pagination />
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
