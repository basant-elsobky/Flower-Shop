'use client'
import { useState } from 'react';
import supabase from '../Config/Supabaseclient'
import './wishlist.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Wishlist({wishlist,ondelete}) {
    const handledelete =async ()=>{
        const {data,error} =await supabase
        .from('Wishlist')
        .delete()
        .eq('id',wishlist.id)
        .select()
        
        if(data){
ondelete(wishlist.id)
        }
    }
    const [color, setColor] = useState('');
   
  return (
    <>
      <div className="shopping-cart">
                <div className="item">
                    <div className="buttons">
                        <span onClick={handledelete} className="delete-btn"></span>
                   
                     

                    </div>

                    <div className="image">
                        <img style={{width:'90px'}} src={wishlist.image} alt="" />
                    </div>

                    <div className="description">
                        <span>{wishlist.name}</span>

                    </div>

                   
                        
                    <div className="total-price">RS.{wishlist.price}.00</div>
                    </div>

                </div>



           
    </>
  )
}

export default Wishlist
