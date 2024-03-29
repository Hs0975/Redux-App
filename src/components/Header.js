import React, { useState } from 'react'
import { withdrawFirst, withdrawSecond } from '../Redux/amountSlice'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {

    const user = useSelector((state) => state.BankApp.name)
    const amount = useSelector((state) => state.BankApp.amount)


    const dispatch = useDispatch()

    function clickHandler() {
        dispatch(withdrawFirst())
    }

    return (
        <>
            <div className='container'>
                <div className='profile'>
                    <img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULfjmLzq86ePpxgqXZiqq9XbZe7fchdrG8g&s' alt='profile-pic' />
                    <h3 style={{ textAlign: 'center', fontFamily: 'sans-serif', color: 'white', fontSize: '25px', marginTop: '20px' }}>Hello, {user}!</h3>
                    <div className='amount-div'>
                        <div className='amount'><h1>{`$${amount}`}</h1>
                            <h6>Total Amount</h6>
                        </div>
                    </div>
                    <div className='buttons'>
                        <button className='btn' onClick={clickHandler}>WITHDRAW $10,000</button>
                        <button className='btn' onClick={() => dispatch(withdrawSecond())}>WITHDRAW $5,000</button>
                    </div>
                </div>



            </div>


        </>
    )
}

export default Header
