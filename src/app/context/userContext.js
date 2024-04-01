"use client"

import { createContext, useState } from "react";

const userContext = createContext()

function UserContextProvider({ children }) {
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
