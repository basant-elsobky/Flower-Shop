'use client'

import { useEffect, useState } from "react";
import supabase from "../Config/Supabaseclient";
import Cart from "./Cart";

function page() {
  const [cart, setcart] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const getData = async () => {

      const { data, error } = await supabase
        .from('Cart')
        .select()

      if (error) {
        setFetchError('An error occurred while fetching data');
        setcart(null);
      } if (data) {

        setcart(data);
        setFetchError(null);
      }
    }
    getData();
  }, []);
  const ondelete = (id)=>{
    setcart(prevcart =>{
      return prevcart.filter(sm=>sm.id !==id)
    })
  }
  return (
    <>
      {fetchError && <p>{fetchError}</p>}

      {cart && (
        <div className='carts'>
          {cart.map(cart => (
            <div className=''>
            <Cart cart={cart} ondelete={ondelete}/>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default page
