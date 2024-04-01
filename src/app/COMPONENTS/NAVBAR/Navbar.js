'use client'
import React, { useContext, useEffect, useState } from 'react'
import './navbar.css'

import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PersonIcon from '@mui/icons-material/Person';

import Link from 'next/link';
import supabase from '../../Config/Supabaseclient';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/navigation';
import { userContext } from '../../context/userContext';

const getUserFromLocalStorage = () => {
    const storedUser = sessionStorage.getItem("user")
    if (storedUser) return JSON.parse(storedUser)

    return null
}

function Navbar() {
    const router = useRouter()
    const { user, setUser, cartcount, setcartcountt } = useContext(userContext)

    useEffect(() => {
        setUser(getUserFromLocalStorage())

        const getData = async () => {
            const { error, data } = await supabase
                .from('CartItems')
                .select()
                .eq('user-id', user.id)

            setcartcountt(data.length)

            console.log({ data })
        }

        if (user) {
            getData();
        }
    }, []);


    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, [])



    const logout = async () => {
        let { error } = await supabase.auth.signOut()
        if (error) {
            console.log({ error })
        }

        console.log("User logged out")
        setUser(null)
        setcartcountt(0)

        router.push("/Account/Login")

    }



    return (


        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid topnav ">
                <img src="/images/logo.webp" alt="Logo" />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link href='/' className="nav-item">
                            <li className="nav-link active" aria-current="page" href="#" >Home</li>
                        </Link>
                        <Link href='/Collection' className="nav-item">
                            <li className="nav-link" href="#" >Occasions</li>
                        </Link>
                        <Link href='/Admin' className="nav-item">
                            <li className="nav-link" href="" >Admin</li>
                        </Link>
                        <Link className="nav-item" href='/Wishlist'>
                            <li className="nav-link" >wishlist</li>
                        </Link>

                    </ul>
                    <div className='shoppingcart'>
                        <Link href='/CART'>

                            <CardGiftcardIcon style={{ color: 'white', fontSize: '30px' }} />
                        </Link>
                        <span>{cartcount}</span>
                    </div>
                    <Link href='/Account/Login'>

                        <PersonIcon style={{ color: 'white', fontSize: '30px' }} />

                    </Link>
                    <h3>{user?.email}</h3>
                    <ExitToAppIcon onClick={logout} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar