'use client'

import { useEffect, useState } from "react";
import supabase from "../Config/Supabaseclient";
import Wishlist from "./Wishlist";



function page() {
    
    const [wishlist, setwishlist] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const getData = async () => {

      const { data, error } = await supabase
        .from('Wishlist')
        .select()

      if (error) {
        setFetchError('An error occurred while fetching data');
        setwishlist(null);
      } if (data) {

        setwishlist(data);
        setFetchError(null);
      }
    }
    getData();
  }, []);
  const ondelete = (id)=>{
    setwishlist(prevwishlist =>{
      return prevwishlist.filter(sm=>sm.id !==id)
    })
  }
  return (
    <>
       {fetchError && <p>{fetchError}</p>}

{wishlist && (
  <div className='carts'>
    {wishlist.map(wishlist => (
      <div className=''>
      <Wishlist wishlist={wishlist} ondelete={ondelete}/>
      </div>
    ))}
  </div>
)}
    </>
  )
}

export default page
