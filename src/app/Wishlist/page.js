'use client'

import { useContext, useEffect, useState } from "react";
import supabase from "../Config/Supabaseclient";
import Wishlist from "./Wishlist";
import { userContext } from "../context/userContext";

import '../CART/page.css'
import Link from "next/link";
import First from "../[Detailsid]/first/First";
function page() {
  const {wishlistcount,setwishlistcount}=useContext(userContext)

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
  const ondelete = (id) => {
    setwishlist(prevwishlist => {
      return prevwishlist.filter(sm => sm.id !== id)
    })
  }

  useEffect(() => {
    const getData = async () => {
        const {count} = await supabase
            .from('Wishlist')
            .select('*', { count: 'exact', head: true })
       
            setwishlistcount(count)
    }
    getData();
}, []);


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
