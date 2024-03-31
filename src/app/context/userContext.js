"use client"

import { createContext, useState } from "react";

const getUserFromLocalStorage = () => {
    const storedUser = sessionStorage.getItem("user")
    if (storedUser) return JSON.parse(storedUser)

    return null
}

const userContext = createContext()

function UserContextProvider({ children }) {

    const [products, setproducts] = useState(null)
    const [user, setUser] = useState(getUserFromLocalStorage())
    const [cartcount,setcartcountt] = useState(null)
    const [wishlistcount,setwishlistcount] = useState(null)

    return (
        <userContext.Provider value={{ user, setUser,cartcount,setcartcountt,wishlistcount,setwishlistcount,products, setproducts} }>
            {children}
        </userContext.Provider>
    )
}

export {userContext, UserContextProvider}
