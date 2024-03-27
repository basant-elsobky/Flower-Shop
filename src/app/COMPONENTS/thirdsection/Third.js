import React, { useEffect, useState } from 'react';
import './Third.css';
import supabase from '@/app/Config/Supabaseclient';
import Card from './Card';

export default function Third() {
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
        }  if (data ) {
          
          setSmoothes(data);
          
          setFetchError(null);
        }
    }
    getData();
  }, []);


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

      {smoothes && (
        <div className='row'>
          {smoothes.map(smooth => (
            <>

          
                <div className='col-md-4 col-sm-12'>

                  <Card key={smooth.id} smooth={smooth} />
                </div>
             

            </>
          ))}
        </div>
      )}
    </div>
  );
}
