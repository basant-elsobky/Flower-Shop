'use client'

import { useContext, useEffect, useState } from "react";
import supabase from "../Config/Supabaseclient";
import Cart from "./Cart/Cart";
import { userContext } from '../context/userContext';
import './page.css'
import Link from "next/link";
import First from "../[Detailsid]/first/First";

function page() {

  const [cart, setcart] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const { user, cartcount } = useContext(userContext)
  useEffect(() => {
    const getData = async () => {
      if (user && user.id) {
        try {
          const { data, error } = await supabase
            .from('CartItems')
            .select()
            .eq('user-id', user.id);
          if (error) {
            setFetchError('An error occurred while fetching data');
            setcart(null);
          } else if (data) {
            const productIds = data.map(item => item['product-id']);
            const { data: products, error: productError } = await supabase
              .from('Image')
              .select()
              .in('id', productIds);
            if (productError) {
              setFetchError('An error occurred while fetching product data');
              setcart(null);
            } else {
              setcart(products);
              setFetchError(null);
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setFetchError('An unexpected error occurred while fetching data');
          setcart(null);
        }
      } else {

        setcart(null);
      }
    };

    getData();
  }, [user]);


  const ondelete = (id) => {
    setcart(prevcart => {
      return prevcart.filter(sm => sm.id !== id)
    })
  }



  return (
    <>

      {fetchError && <p>{fetchError}</p>}

      {user ? (
        cartcount === 0 ? (
          <>
            <First name='YOUR SHOPPING CART' />
            <div className="Emptycart">
              <img src="images/emptycart.webp" />
              <h5 >No Items in cart</h5>
              <p>Add items you want to shop</p>
              <Link href='/'>
                <button >START SHOPPING</button>
              </Link>
            </div>
          </>
        ) : (
          <>

            <First name='YOUR SHOPPING CART' />
            <div className='carts'>
              {cart && (
                cart.map((cartItem, index) => (
                  <div key={index} className=''>
                    <Cart cart={cartItem} ondelete={ondelete} />
                  </div>
                ))
              )}
            </div>
          </>
        )
      ) : (
        <First name='LOG IN FIRST' />
      )}
    </>
  );
}

export default page;
