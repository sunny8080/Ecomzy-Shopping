import React from 'react'
import './Modal.css'
import { closeModal } from '../redux/slices/ModalSlice'
import { clearCart } from '../redux/slices/CartSlice'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'

const Modal = () => {
    const dispatch = useDispatch();

    return (
        <aside className='modal-container'>
            <div className='modal'>
                <h4 className='modalQ'>Remove all items from your shopping cart ? </h4>

                <div className='btn-container flex flex-col md:flex-row gap-3'>
                    <button type='button'
                        onClick={() => {
                            dispatch(clearCart());
                            dispatch(closeModal());
                            toast.success("Cart is empty now");
                        }}
                        className='btn confirm-btn'
                    >Confirm</button>

                    <button type='button'
                        onClick={() => dispatch(closeModal())}
                        className='btn cancel-btn'
                    >Cancel</button>
                </div>
            </div>


        </aside>
    )
}

export default Modal





