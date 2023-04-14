import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast'

const Product = ({ product }) => {
    const { id, title, price, description, image } = product;

    const { items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItem(product))
        toast.success("Item added to Cart")
    }

    const removeFromCart = () => {
        dispatch(removeItem(id))
        toast.error("Item removed from Cart")
    }



    return (
        <div className='flex flex-col items-center justify-between mt-10  md:ml-5 rounded-xl gap-3 p-4 hover:scale-110 transition duration-300 ease-in shadow-[rgba(0,_0,_0,_0.24)_0_3px_8px] hover:shadow-[0_0_95px_53px_#00000024] group '>

            <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{title}</p>
            <p
                className='w-40 text-gray-400 font-normal text-[10px] text-left'
            >{description.split(" ").slice(0, 10).join(" ") + "..."}</p>


            <div className='h-[180px]'>
                <img className='h-full' src={image} alt="" />
            </div>

            <div className='flex justify-between items-center w-full gap-12 mt-5'>
                <p className=' text-green-600 font-semibold'>${price}</p>

                {
                    items.some((item) => item.id === id) ?
                        (<button
                            className=' text-red-700 border-2 border-red-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase tracking-wide
                            group-hover:bg-red-700 group-hover:text-white transition duration-300 ease-in'
                            onClick={removeFromCart}
                        >Remove Item</button>)
                        :
                        (
                            < button
                                className=' text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase tracking-wide
                                group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in'
                                onClick={addToCart}
                            >Add To Cart</button>
                        )
                }


            </div>
        </div>
    )
}

export default Product
