'use client'
import React, { useContext, useEffect, useState } from 'react'
import './navbar.css'

import Link from 'next/link';
import supabase from '../../Config/Supabaseclient';

import { useRouter } from 'next/navigation';
import { userContext } from '../../context/userContext';
import { usePathname } from 'next/navigation';
const getUserFromLocalStorage = () => {
    const storedUser = sessionStorage.getItem("user")
    if (storedUser) return JSON.parse(storedUser)

    return null
}




function Navbar() {

    
    
    const { user, setUser, cartcount, setcartcountt } = useContext(userContext)
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const router = useRouter()

    useEffect(() => {
        if (user && user.id) {
            const getData = async () => {
                try {
                    const { data, error } = await supabase
                        .from('CartItems')
                        .select()
                        .eq('user-id', user.id)
                    if (error) {
                        throw error;
                    }
                    setcartcountt(data.length)
                } catch (error) {
                    console.error('Error fetching cart count:', error.message)
                }
            }
            getData();
        }
    }, [user]);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
    const pathname = usePathname();
    return (
        <header className={`header ${scrolling ? 'scrolled' : ''} fixed-top`} id="navigation-menu">
            <nav className={`navbar container ${scrolling ? 'scrolled' : ''}`}>
                <img src="/images/logo.webp" alt="Logo" />
                <ul className={`nav-menu me-auto mb-2 mb-lg-0 ${isMenuOpen ? 'active' : ''}`}>
                    <li className={pathname == "/" ?
                        "active_navitem" :
                        "nav-link"
                    } aria-current="page" onClick={closeMenu}>
                        <Link href='/' className="nav-item" >
                            Home
                        </Link>
                    </li>
                    <li className={pathname == "/Collection" ?
                        "active_navitem" :
                        "nav-link"
                    } onClick={closeMenu}>
                        <Link href='/Collection' className="nav-item">
                            Occasions
                        </Link>
                    </li>
                    {user?.email === 'basantheshem9@gmail.com' && (
                        <li className={pathname == "/Admin" ?
                        "active_navitem" :
                        "nav-link"
                    } onClick={closeMenu}>
                            <Link href='/Admin' className="nav-item">
                                Admin
                            </Link>
                        </li>
                    )}
                    <li className={pathname == "/Wishlist" ?
                        "active_navitem" :
                        "nav-link"
                    }  onClick={closeMenu}>
                        <Link className="nav-item" href='/Wishlist'>
                            wishlist
                        </Link>
                    </li>
                </ul>
                <div className='shoppingcart'>
                    <Link href='/CART' >

                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="30" fill="currentColor" className="bi bi-bag-fill hover-color" viewBox="0 0 16 16" style={{ color: 'white', width: '30px' }}>
                            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
                        </svg>

                    </Link>
                    <span>{cartcount}</span>
                </div>

                <div className="dropdown">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="30" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16" style={{ color: 'white', width: '30px' }}>
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg>
                    <div className="dropdown-content">
                        {user && user.email ? (
                            <li>Hello {user.email}</li>
                        ) : ''}
                        <Link href='/Account/Login'>
                            Login
                        </Link><br />
                        <Link href='/Account/Signup'>
                            Signup
                        </Link><br />

                        <svg onClick={logout} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
                            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                        </svg>

                    </div>
                </div>











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