import React from 'react'
import './Spinner.css'
const Spinner = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <div className='spinner' ></div>
            <h1 className='font-semibold mt-2'>Loading...</h1>
        </div>
    )
}

export default Spinner
