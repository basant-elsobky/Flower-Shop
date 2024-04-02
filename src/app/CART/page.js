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
      const { data, error } = await supabase
        .from('CartItems')
        .select()
        .eq('user-id', user.id)
      const productIds = data.map(item => item['product-id']);
      const { data: products, error: productError } = await supabase
        .from('Image')
        .select()
        .in('id', productIds);
      if (error) {
        setFetchError('An error occurred while fetching data');
        setcart(null);
      } if (data) {
        setcart(products);
        setFetchError(null);
      }
    }
    getData();
  }, []);
  
  const ondelete = (id) => {
    setcart(prevcart => {
      return prevcart.filter(sm => sm.id !== id)
    })
  }



  return (
    <>
      <First name='YOUR SHOPPING CART' />
      {fetchError && <p>{fetchError}</p>}
      {cartcount === 0 ? (
        <div className="Emptycart">
          <img src="images/emptycart.webp" />
          <h5 >No Items in cart</h5>
          <p>Add items you want to shop</p>
          <Link href='/'>

            <button >START SHOoPPING</button>
          </Link>

        </div>

      ) : (
        <>
          {cart && (
            <div className='carts'>
              {cart.map((cartItem, index) => (
                <div key={index} className=''>
                  <Cart cart={cartItem} ondelete={ondelete} />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>

  )
}

export default page
