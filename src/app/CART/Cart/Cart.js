'use client'
import React, {  useState } from 'react'
import './cart.css'
import supabase from '../../Config/Supabaseclient'
import FavoriteIcon from '@mui/icons-material/Favorite';

function Cart({ cart, ondelete ,ondeleteforcartcount}) {
  
    const handledelete = async () => {
        const { data, error } = await supabase
            .from('Cart')
            .delete()
            .eq('id', cart.id)
            .select()
            .select('*', { count: 'exact', head: true })
                
        if (error) {

        }
        if (data) {
            ondelete(cart.id)
           
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
                                <FavoriteIcon />
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
    )}


export default Cart
