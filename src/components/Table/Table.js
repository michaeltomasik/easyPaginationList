import React, { PropTypes } from 'react'
import Rater from 'react-rater'

import Pound from '../Pound'
import './Table.scss'

export const Table = ({ payments, openModal }) => {
  let rows

  if (payments.length > 0) {
    rows = payments.map((payment, index) => {
      return (
        <tr
          key={payment.payment_supplier + index}
          onClick={() => { openModal(payment) }}>
          <td className='supplier'><p>{payment.payment_supplier}</p></td>
          <td className='rate'>
            <Rater interactive={false} rating={Number(payment.payment_cost_rating)}>
              <Pound />
            </Rater>
          </td>
          <td className='ref'>{payment.payment_ref}</td>
          <td className='value'>{'£' + payment.payment_amount}</td>
        </tr>
      )
    })
  } else {
    rows = (
      <tr>
        <td className='supplier'><p>{'NO DATA'}</p></td>
        <td className='rate'>
          <Rater interactive={false} rating={0}>
            <Pound />
          </Rater>
        </td>
        <td className='ref'>{'NO DATA'}</td>
        <td className='value'>{'NO DATA'}</td>
      </tr>
    )
  }

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

Table.propTypes = {
  payments: PropTypes.arrayOf(
    PropTypes.shape({
      payment_supplier: PropTypes.number.isRequied,
      payment_cost_rating: PropTypes.number.isRequied,
      payment_ref: PropTypes.number.isRequied,
      payment_amount: PropTypes.number.isRequied
    })
  ),
  openModal: PropTypes.func
}

export default Table
