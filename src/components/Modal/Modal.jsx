import React from 'react'
import {Modal} from 'react-modal'

const Modal = () => {
  return (
    <div><Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
   <h1 className="h1">Modal</h1>
  </Modal></div>
  )
}

export default Modal