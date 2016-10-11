import React from 'react'
import Rater from 'react-rater'

import Pound from '../Rating/Pound'
import classes from './Table.scss'

export const Table = React.createClass({
  render () {
    const rows = this.props.payments.map((payment) => {
      console.log(payment.payment_cost_rating)
      return (
        <tr>
          <td className='supplier'><p>{payment.payment_supplier}</p></td>
          <td className='rate'>
            <Rater  interactive={false} rating={payment.payment_cost_rating}>
              <Pound />
            </Rater>
          </td>
          <td  className='ref'>{payment.payment_ref}</td>
          <td  className='value'>{'£'+payment.payment_amount}</td>
        </tr>
      )
    })
    return (
      <table>
        <thead>
          <tr className='headerRow'>
            <th className='left'>Supplier</th>
            <th>Pound Rating</th>
            <th>Reference</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
})

export default Table
