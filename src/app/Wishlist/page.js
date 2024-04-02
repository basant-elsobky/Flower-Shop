'use client'

import { useContext, useEffect, useState } from "react";
import supabase from "../Config/Supabaseclient";
import Wishlist from "./Wishlist";
import { userContext } from "../context/userContext";

import '../CART/page.css'
import Link from "next/link";
import First from "../[Detailsid]/first/First";
function page() {
  const { user, cartcount } = useContext(userContext)

  const [wishlist, setwishlist] = useState(null);
  const { wishlistcount, setwishlistcount } = useContext(userContext);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const getData = async () => {
        try {
            if(user && user.id) {
                const { data, error } = await supabase
                    .from('Wishitems')
                    .select()
                    .eq('user-id', user.id);
                
                if (error) {
                    throw error;
                }
                
                const productIds = data.map(item => item['product-id']);
                const { data: products, error: productError } = await supabase
                    .from('Image')
                    .select()
                    .in('id', productIds);
                
                if (productError) {
                    throw productError;
                }
                
                setwishlist(products);
                setwishlistcount(data.length);
                setFetchError(null);
            } else {
                // User not logged in, handle accordingly
            }
        } catch (error) {
            console.error('An error occurred while fetching data:', error.message);
            setFetchError('An error occurred while fetching data');
            setwishlist(null);
        }
    };
    
    getData();
}, []);

  const ondelete = (id) => {

    setwishlist(prevwishlist => {
      return prevwishlist.filter(sm => sm.id !== id);

    })
  }



  return (
    <>
      {fetchError && <p>{fetchError}</p>}
      {user ? (
        wishlistcount === 0 ? (
          <>
            <First name='YOUR WISHLIST' />
            <div className="Emptycart">
              <img src="images/emptywishlist.webp" />
              <h5 >No Items in wishlist</h5>
              <p>Save your favorite items here</p>
              <Link href='/'>
                <button >START SHOPPING</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <First name='YOUR WISHLIST' />
            {wishlist && wishlist.map(wishlistItem => (
              <div className='carts' key={wishlistItem.id}>
                <Wishlist wishlist={wishlistItem} ondelete={ondelete} />
              </div>
            ))}
          </>
        )
      ) : (
        <First name='LOG IN FIRST' />
      )}
    </>
  );}
  

export default page;
