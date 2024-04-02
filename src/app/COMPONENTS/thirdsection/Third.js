import React, { useContext, useEffect, useState } from 'react';
import './Third.css';

import Card from './Card';
import supabase from '../../Config/Supabaseclient';
import { userContext } from '../../context/userContext';

export default function Third() {

  const [fetchError, setFetchError] = useState(null);
  const { products } = useContext(userContext)


  return (
    <div className='container thirdsection text-center'>
      <div className='flower text-center d-flex flex-row align-content-center justify-content-center'>
        <div>
          <h3>Best Gifts</h3>
          <h2>Shop Our Products</h2>
          <p>All varieties of flowers available in different shapes and types. Special hand-tied bouquets.</p>
        </div>
      </div>

      {fetchError && <p>{fetchError}</p>}

      {products && products.length > 0 && (
  <div className='row'>
    {products.map((smooth) => (
      <>
        <div key={products.id} className='col-md-4 col-sm-12'>
          <Card smooth={smooth} />
        </div>
      </>
    ))}
  </div>
)}

        
    </div>
  );
}
