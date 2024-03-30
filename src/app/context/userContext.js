"use client"

import { createContext, useState } from "react";

const userContext = createContext()

function UserContextProvider({ children }) {
    const [user, setUser] = useState(null)

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}

export {userContext, UserContextProvider}
