import React from 'react'
import { removeItem } from '../redux/slices/CartSlice'
import { useDispatch } from 'react-redux'
import { toast } from "react-hot-toast";
import { MdDelete } from 'react-icons/md';



const CartItem = ({ product, isLast }) => {
    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(removeItem(product.id))
        toast.error("Item removed from Cart")
    }

    return (
        <div className='flex flex-col md:flex-row justify-center items-center my-2 mx-3 md:mx-5 p-3 sm:p-5 md:p-8 gap-5 
                shadow-[rgba(0,_0,_0,_0.24)_0_3px_8px] rounded-xl border-b-2 border-slate-700'>
                
            <div className='w-[30%]' >
                <img className='object-cover' src={product.image} alt="" />
            </div>

            <div className='w-full md:w-[70%] md:ml-10 space-y-5 self-start'>
                <h3 className='text-xl text-slate-700 font-semibold'> {product.title} </h3>
                <p className=' text-base text-slate-700 ' > {product.description.split(" ").slice(0, 15).join(" ") + "..."}  </p>

                <div className='flex items-center justify-between' >
                    <p className=' font-bold text-lg text-green-600' >${product.price}</p>
                    <div onClick={removeFromCart}
                        className=' bg-red-200 rounded-full flex justify-center items-center hover:bg-red-400 transition-transform duration-300 cursor-pointer p-3 mr-3 group'>
                        <MdDelete className=' text-red-800 group-hover:text-white' />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default CartItem
