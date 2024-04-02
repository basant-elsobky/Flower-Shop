'use client'
import React, { useContext, useEffect, useState } from 'react'
import './navbar.css'

import Link from 'next/link';
import supabase from '../../Config/Supabaseclient';

import { useRouter } from 'next/navigation';
import { userContext } from '../../context/userContext';

<<<<<<< HEAD
function Navbar() {



    const router = useRouter()

    const { user, setUser, cartcount, setcartcountt } = useContext(userContext)


        useEffect(() => {
            const getData = async () => {
                const { error, data } = await supabase
                    .from('CartItems')
                    .select()
                    .eq('user-id', user.id)
=======
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
>>>>>>> 188a452471d23cae47ff1366e42f8bc57e81d128

            setcartcountt(data.length)

<<<<<<< HEAD

            }
            getData();


        }, []);
    
=======
            console.log({ data })
        }

        if (user) {
            getData();
        }
    }, []);

>>>>>>> 188a452471d23cae47ff1366e42f8bc57e81d128


<<<<<<< HEAD
=======

>>>>>>> 188a452471d23cae47ff1366e42f8bc57e81d128

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


    const [isMenuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);

    };



    return (



        <header className={`header ${scrolling ? 'scrolled' : ''} fixed-top`} id="navigation-menu">
            <nav className="navbar container">

                <img src="/images/logo.webp" alt="Logo" />

                <ul className={`nav-menu me-auto mb-2 mb-lg-0 ${isMenuOpen ? 'active' : ''}`}>
                    <Link href='/' className="nav-item" >
                        <li className="nav-link " aria-current="page" href="#" onClick={closeMenu}>Home</li>
                    </Link>
                    <Link href='/Collection' className="nav-item">
                        <li className="nav-link" href="#" onClick={closeMenu}>Occasions</li>
                    </Link>
                    <Link href='/Admin' className="nav-item">
                        <li className="nav-link" href="" onClick={closeMenu}>Admin</li>
                    </Link>
                    <Link className="nav-item" href='/Wishlist'>
                        <li className="nav-link" onClick={closeMenu}>wishlist</li>
                    </Link>

                </ul>

                <div className='shoppingcart'>
                    <Link href='/CART' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="30" fill="currentColor" className="bi bi-bag-fill hover-color" viewBox="0 0 16 16" style={{ color: 'white', width: '24px' }}>
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                        </svg>

                    </Link>
                    <span>{cartcount}</span>
                </div>
                <Link href='/Account/Login'>
                    <div class="dropdown">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="30" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16" style={{ color: 'white', width: '30px' }}>
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                        <div class="dropdown-content">
                            <Link href='/Account/Login' >
                                <li>  </li>
                            </Link>
                            {user?.email ? (
                                <li>Hello {user.email}</li>
                            ) : null}
                            <Link href='/Account/Login'>
                                <li>Login</li>
                            </Link>
                            <Link href='/Account/Signup'>
                                <li>Signup</li>
                            </Link>

                            <svg onClick={logout} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                                <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                            </svg>

                        </div>
                    </div>


                </Link>








                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar