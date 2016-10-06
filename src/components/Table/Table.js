import React from 'react'

export const Table = React.createClass({
  render () {

    const rows = this.props.payments.map((payment) => {
      return (
        <tr>
          <th>{payment.payment_supplier}</th>
          <th>{payment.payment_cost_rating}</th>
          <th>{payment.payment_ref}</th>
          <th>{payment.payment_amount}</th>
        </tr>
      )
    })
    return (
      <table>
        {rows}
      </table>
    )
  }
})

export default Table
