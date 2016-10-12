import React, { PropTypes } from 'react'
import { Modal } from 'react-bootstrap'
import Rater from 'react-rater'

import Pound from '../Rating/Pound'
import './ModalSupplier.scss'

export const ModalSuppler = ({ payment, showModal = false, closeModal }) => {
  return (
    <Modal
      show={showModal}
      onHide={closeModal}>
      <div className='modal-supplier'>
        <h1>{payment.payment_supplier}</h1>
        <h4>Pound Rating</h4>
        <Rater interactive={false} rating={Number(payment.payment_cost_rating)}>
          <Pound />
        </Rater>
        <h4>REFERENCE</h4>
        <p>{payment.payment_ref}</p>
        <h4>VALUE</h4>
        <p>{payment.payment_amount}</p>
      </div>
    </Modal>
  )
}

ModalSuppler.propTypes = {
  payment: PropTypes.shape({
    payment_supplier: PropTypes.number.isRequied,
    payment_cost_rating: PropTypes.number.isRequied,
    payment_ref: PropTypes.number.isRequied,
    payment_amount: PropTypes.number.isRequied
  }),
  showModal: PropTypes.bool,
  closeModal: PropTypes.func
}

export default ModalSuppler
