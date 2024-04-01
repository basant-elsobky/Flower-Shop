import React from 'react'
import './Card.css'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Link from 'next/link';

function Card({ smooth }) {
    return (
        <>
            <div className="card" >
                <Link href={'/' + smooth.id}>
                    <img src={smooth.image} className="img" alt="..." />
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
        </>
    )
}

export default Card
