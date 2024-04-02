'use client'
import React, { useContext, useState } from 'react'
import './cart.css'
import supabase from '../../Config/Supabaseclient'

import { userContext } from '@/app/context/userContext';

function Cart({ cart, ondelete, ondeleteforcartcount }) {
    const { setcartcountt } = useContext(userContext)

    const handledelete = async () => {
        const { data, error } = await supabase
            .from('CartItems')
            .delete()
            .eq('product-id', cart.id)
            .select()


        if (error) {

        }
        if (data) {
            ondelete(cart.id)
            setcartcountt(count => count - 1)
        }
    }
    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrement = () => {
        setQuantity(prevQuantity => prevQuantity - 1);
    };

    return (
        <>

            <div className="shopping-cart">
                <div className="item">
                    <div className="buttons d-flex align-items-center">
                        <span onClick={handledelete} className="delete-btn"></span>
                        <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                            </svg>
                        </span>
                    </div>

                    <div className="image">
                        <img style={{ width: '90px' }} src={cart.image} alt="" />
                    </div>

                    <div className="description">
                        <span>{cart.name}</span>

                    </div>

                    <div className="quantity">

                        <li classNameName='d-flex'>
                            <div>
                                <span className="input-wrapper">
                                    <button onClick={decrement} id="decrement">-</button>
                                    <input type="number" value={quantity} id="quantity" />
                                    <button onClick={increment} id="increment" >+</button>
                                </span> </div> </li>




                    </div>
                    <div className="total-price"><li classNameName='d-flex' style={{ color: 'var(--pinkcolor)', fontSize: '18px' }}>RS.{cart.price * quantity}.00 </li></div>
                </div>



            </div>

        </>
    )
}


export default Cart
