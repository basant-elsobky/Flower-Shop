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
  const{wishlistcount, setwishlistcount}  = useContext(userContext);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const getData = async () => {
    const {data,error}=await supabase
    .from('Wishitems')
    .select()
    .eq('user-id',user.id)
    const productIds = data.map(item => item['product-id']);
    const { data: products, error: productError } = await supabase
    .from('Image')
    .select()
    .in('id',productIds)
    if (error) {
      setFetchError('An error occurred while fetching data');
      setwishlist(null);
    } if (data) {
      setwishlist(products);
      setwishlistcount(data.length);
      setFetchError(null);
    }
  }
  getData();
    
  }, []);
  const ondelete = (id) => {
   
    setwishlist(prevwishlist => {
      return prevwishlist.filter(sm => sm.id !== id);
    
    })
  }

 

  return (
    <>
    <First name='WISHLIST'/>
      {fetchError && <p>{fetchError}</p>}
      {wishlistcount=== 0 ? (
        <>
        <div className="Emptycart">
          <img src="images/emptywishlist.webp" />
          <h5 >No Items in No Items in wishlist</h5>
          <p>Save your favorite items here</p>
         <Link href='/'>

            <button >START SHOoPPING</button>
         </Link>
            </div>
          </>
          ):(<>
            {wishlist && (
              <div className='carts'>
                {wishlist.map(wishlist => (
                  <div className=''>

                    <Wishlist wishlist={wishlist} ondelete={ondelete} />
                  </div>
                ))}
              </div>
            )}

          </>)}
        </>
        )
}

        export default page
