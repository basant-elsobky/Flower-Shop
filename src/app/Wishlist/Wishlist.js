'use client'
import { useContext, useEffect, useState } from 'react';
import supabase from '../Config/Supabaseclient'
import './wishlist.css'

import { userContext } from '../context/userContext';
function Wishlist({ wishlist, ondelete }) {
    const { wishlistcount, setwishlistcount } = useContext(userContext);

    const handledelete = async () => {
        const { data, error } = await supabase
            .from('Wishitems')
            .delete()
            .eq('product-id', wishlist.id)
            .select()

        if (data) {
            ondelete(wishlist.id)
            setwishlistcount(count => count - 1)
        }
    }


    return (
        <>

            <div className="shopping-cart">
                <div className="item">
                    <div className="buttons">
                        <span onClick={handledelete} className="delete-btn"></span>



                    </div>

                    <div className="image">
                        <img style={{ width: '90px' }} src={wishlist.image} alt="" />
                    </div>

                    <div className="description">
                        <span>{wishlist.name}</span>

                    </div>



                    <div className="total-price">RS.{wishlist.price}.00</div>
                </div>

            </div>





        </>
    )
}

export default Wishlist
