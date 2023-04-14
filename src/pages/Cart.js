import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { openModal } from '../redux/slices/ModalSlice'

const Cart = () => {
  const { items, total, itemCount } = useSelector(state => state.cart)
  const dispatch = useDispatch();


  return (
    <div className=''>

      {
        itemCount === 0 ?
          (
            <div className=' flex flex-col min-h-[80vh] justify-center items-center'>
              <h3 className='font-semibold text-gray-700 text-xl mb-2' >Your Cart is Empty !</h3>
              <Link to='/' >
                <button className=' bg-green-600 py-3 px-10 border-2 mt-5 border-green-600 tracking-wider text-white rounded-lg font-semibold uppercase hover:bg-purple-50 hover:text-green-700 transition duration-300 ease-linear' >Shop Now</button>
              </Link>
            </div>
          )
          :
          (
            <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between' >
              {/* left section */}
              <div className='w-full md:w-[60%] flex flex-col p-2' >
                {
                  items.map((item, index) => (
                    <CartItem key={item.id} isLast={index === itemCount - 1} product={item} />
                  ))
                }
              </div>

              {/* right section */}
              <div className=' w-full md:w-[40%] mt-5 flex flex-col p-5 gap-5 my-14 h-full sticky top-0' >
                <div className='flex flex-col' >
                  <p className=' font-semibold uppercase text-xl text-green-800' >Your Cart</p>
                  <p className='font-semibold uppercase text-5xl text-green-700' >Summary</p>

                </div>

                <div className='flex flex-col'>
                  <p className='text-xl font-bold mt-5' >
                    <span className=' text-gray-700 font-semibold' >Total items : </span>
                    {itemCount}</p>

                  <p className='text-xl font-bold mt-2' >
                    <span className=' text-gray-700 font-semibold' >Total Amount : </span>
                    ${total}</p>

                  <button
                    className=' bg-green-700 text-xl p-3 border-2 mt-5 border-green-600 text-white rounded-lg font-bold hover:bg-purple-50 hover:text-green-700 transition duration-300 ease-linear'>
                    Checkout Now</button>

                  <button
                    className='text-xl p-3 border-2 mt-10 border-red-700 text-red-600 rounded-lg font-bold hover:bg-red-600 hover:text-white transition duration-300 ease-linear'
                    onClick={() => dispatch(openModal())}
                  >Clear Cart</button>
                </div>
              </div>
            </div>
          )
      }


    </div>
  )
}

export default Cart
