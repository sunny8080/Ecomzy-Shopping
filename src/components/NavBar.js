import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from 'react-redux'



const NavBar = () => {
    const { itemCount } = useSelector((store) => store.cart)

    return (
        <div className='bg-slate-900 '>
            <nav className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
                <NavLink to='/'>

                    <img className='h-14 ml-5' src="../logo.png" alt='logo' />
                </NavLink>

                <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6 '>
                    <NavLink to='/'><h3>Home</h3></NavLink>

                    <NavLink to='/cart'>
                        <div className='relative' >
                            <FaShoppingCart className=' text-2xl' />
                            {
                                itemCount > 0 &&
                                <p className=' absolute -right-2 -top-1 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white' >
                                    {itemCount}
                                </p>
                            }
                        </div>
                    </NavLink>
                </div>

            </nav>
        </div>
    )
}

export default NavBar
