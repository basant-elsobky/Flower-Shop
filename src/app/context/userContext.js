"use client"

import { createContext, useEffect, useState } from "react";
import supabase from "../Config/Supabaseclient";

const userContext = createContext()

function UserContextProvider({ children }) {
    useEffect(() => {
        const getData = async () => {
         
            const { data, error } = await supabase
              .from('Image')
              .select()
           
            if (error) {
             
            }  if (data ) {
              setproducts(data)
            
            }
        }
        getData();
      }, []);

    
    const [products, setproducts] = useState([])
    const [user, setUser] = useState(null)
    const [cartcount, setcartcountt] = useState(0)

    const [wishlistcount, setwishlistcount] = useState(0)

    return (
        <userContext.Provider value={{ user, setUser, cartcount, setcartcountt, wishlistcount, setwishlistcount, products, setproducts }}>
            {children}
        </userContext.Provider>
    )
}

export { userContext, UserContextProvider }
