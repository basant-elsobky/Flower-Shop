'use client'
import React, { useEffect, useState } from 'react'
import './navbar.css'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PersonIcon from '@mui/icons-material/Person';

import Link from 'next/link';
import supabase from '@/app/Config/Supabaseclient';
import { Button } from '@mui/material';
function Navbar() {
    const [cartItemCount, setCartItemCount] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const { count, error , data} = await supabase
                .from('Cart')
                .select('*', { count: 'exact', head: true })
                setCartItemCount(count)
        }
        getData();
    }, []);
    return (

        <div className='topnav'>
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid container">

                    <img src="/images/logo.webp" alt="Logo" />

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link href='/' class="nav-item">
                                <li class="nav-link active" aria-current="page" href="#">Home</li>
                            </Link>
                            <Link href='' class="nav-item">
                                <li class="nav-link" href="#">most gifted</li>
                            </Link>
                            <Link href='' class="nav-item">
                                <li class="nav-link" href="#">news</li>
                            </Link>
                            <Link class="nav-item" href='/Wishlist'>
                         <li class="nav-link">wishlist</li>
                            </Link>

                        </ul>
                        <div className='ms-auto d-flex flex-row'>
                            <div className='shoppingcart'>
                                <Link href='/CART'>

                                    <CardGiftcardIcon style={{ color: 'white', fontSize: '30px' }} />
                                </Link>
                                <span>{cartItemCount}</span>
                            </div>
<p>hello user email</p>
                            <PersonIcon style={{ color: 'white', fontSize: '30px' }} />
                            <Button>sign out</Button>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
