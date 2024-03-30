'use client'
import React, { useEffect, useState } from 'react';
import First from './first/First';
import Description from './description/Description';
import supabase from '../Config/Supabaseclient';

export default function ProductLayout({ children,params }) {
  const [name ,setname]=useState('')
  const postid = params.Detailsid

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase
        .from('Image')
        .select()
        .eq('id', postid)
        .single()
      if (error) { }
      if (data) {
       
        setname(data.Name)
     
      }
    }


    getData();
  }, []);
  return (
    <div className="product-layout">
    <First name={name} product={name}/>
      <main>{children}</main>
      <Description/>
    </div>
  );
}
