'use client'
import React, { useContext, useEffect, useState } from 'react'
import supabase from '../Config/Supabaseclient';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Deatils.css'
import { userContext } from '../context/userContext';

function page({ params }) {
  const [add, setadd] = useState('ADD TO CART')
  const [wishlist, setwishlist] = useState('ADD TO WISHLIST')
  const {user, setcartcountt} = useContext(userContext)




  const [number, setNumber] = useState(10);
  const [time, settime] = useState(30);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber(Math.floor(Math.random() * 70) + 7);
      settime(Math.floor(Math.random() * 30) + 7);
    }, 6000)


    return () => clearInterval(intervalId);
  }, []);
  const postid = params.Detailsid
  const [name, setname] = useState(null)
  const [image, setimage] = useState(null)
  const [price, setprice] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase
        .from('Image')
        .select()
        .eq('id', postid)
        .single()
      if (error) { }
      if (data) {
        setimage(data.image)
        setname(data.Name)
        setprice(data.price)
      }
    }


    getData();
  }, []);


  const addToCart = async () => {

    const { data, error } = await supabase
      .from('CartItems')
      .insert({
        'product-id': postid,
        'user-id': user.id
      })
      .select();

    setadd('ADDED !')
    console.log({data})
    setcartcountt(count => count + 1)

  };
  const addTowishlist = async () => {

    const { data, error } = await supabase
      .from('Wishlist')
      .insert([{
        image: image,
        price: price,
        name: name,

      }])
      .select();
    setwishlist('ADDED !')

  };
  return (

    <div className='container'>
      <div className='row flowercard' >
        <div className='col-md-5 col-sm-12'>

          <img src={image} />
        </div>
        <div className='col-md-7 col-sm-12'>

          <h2>{name}</h2>
          <div className='d-flex align-content-center justify-content-between'>
            <div className='d-flex'>
              <StarIcon style={{ fontSize: '20px' }} />
              <StarIcon style={{ fontSize: '20px' }} />
              <StarIcon style={{ fontSize: '20px' }} />
              <StarIcon style={{ fontSize: '20px' }} />
              <StarHalfIcon style={{ fontSize: '20px' }} />
            </div>
            <div className='d-flex'>
              <LocalFireDepartmentIcon style={{ color: '#D02E2E' }} /> <span style={{ color: '#D02E2E' }}> {time} sold in last {number}  minutes</span>
            </div>
          </div>
          <div className='mt-4 mb-4'>
            <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper miaculis Pellentesque vitae neque mollis urna mattis...</p>
          </div>
          <div className='d-flex pricesection '>
            <h3>price:</h3>
            <span>RS.{price}.00</span>
          </div>
          <h5>We have Many In Stock
          </h5>
          <div className='row mt-4 details'>
            <div className='col-md-3 col-sm-6'>
              <ul>
                <li className='d-flex '>Brand: </li>
                <li className='d-flex'>product type: </li>
                <li className='d-flex'>availability: </li>
                <li className='d-flex'>SKY </li>


              </ul>
            </div>
            <div className='col-md-3 col-sm-6'>
              <ul>
                <li className='d-flex '> florist</li>
                <li className='d-flex'>posy </li>
                <li className='d-flex' style={{ color: '#fa9324' }}>many in stock </li>
                <li className='d-flex'>vv</li>

              </ul>
            </div>


            <div className='d-flex addbuttons'>
              <button onClick={addToCart} className='add'> <ShoppingCartIcon style={{ color: 'white', padding: '5px', fontSize: '30px' }} />{add}</button>
              <button onClick={addTowishlist} className='washilist'> <FavoriteIcon style={{ color: 'black', padding: '5px', fontSize: '30px' }} />{wishlist}</button>
            </div>
            <h5>Real time <span className='visitorspan'>+{time}</span> visitor right now </h5>
          </div>
          <div className='d-flex mt-4 align-items-center '>
            <h6>share this on </h6>
            <div className='p-4'> 

            <FacebookIcon />
            <TwitterIcon />
            <PinterestIcon />
            <InstagramIcon /></div>
           
          </div>
        </div>
      </div>


    </div>
  )
}

export default page
