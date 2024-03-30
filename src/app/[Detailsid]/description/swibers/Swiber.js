'use client'
import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import styles from './swiber.module.css';

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Link from 'next/link';
import supabase from '../../../Config/Supabaseclient';
function Swiber() {
    const [smoothes, setSmoothes] = useState(null);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        const getData = async () => {

            const { data, error } = await supabase
                .from('Image')
                .select()

            if (error) {
                setFetchError('An error occurred while fetching data');
                setSmoothes(null);
            } if (data) {

                setSmoothes(data);

                setFetchError(null);
            }
        }
        getData();
    }, []);
    return (
        <>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {fetchError && <p>{fetchError}</p>}

                {smoothes && (
                    <div className='row'>
                        {smoothes.map(smooth => (
                            <>


                                <SwiperSlide>
                                    <div className="card related" >
                                    <Link href={'/'+smooth.id}>
                                        <img src={smooth.image} className={styles.imgswib}  alt="..." />
                                    </Link>

                                        <div className="card-body float-left">
                                            <div className='d-flex '>
                                                <StarIcon style={{ fontSize: '15px' }} />
                                                <StarIcon style={{ fontSize: '15px' }} />
                                                <StarIcon style={{ fontSize: '15px' }} />
                                                <StarIcon style={{ fontSize: '15px' }} />
                                                <StarHalfIcon style={{ fontSize: '15px' }} />
                                            </div>
                                            <h5 className="card-title">{smooth.Name}</h5>
                                            <p className="card-text">Rs.{smooth.price}.00</p>
                                        </div>

                                    </div>
                                </SwiperSlide>



                            </>
                        ))}
                    </div>
                )}

            </Swiper>
        </>
    )
}

export default Swiber
