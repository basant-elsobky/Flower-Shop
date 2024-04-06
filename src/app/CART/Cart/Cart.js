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
            <div className="shopping-cart row">
                <div className="item ">
                    <div className="buttons col-md-3 d-flex align-items-center">
                        <span onClick={handledelete} className="delete-btn"></span>
                    </div>

                    <div className="image col-md-3 ">
                        <img style={{ width: '90px' }} src={cart.image} alt="" />
                    </div>

                    <div className="description ">
                        <span>{cart.name}</span>

                    </div>

                   
                    <div className="total-price col-md-3"><li classNameName='d-flex' style={{ color: 'var(--pinkcolor)', fontSize: '18px' }}>RS.{cart.price * quantity}.00 </li></div>
                </div>



            </div>

        </>
    )
}


export default Cart