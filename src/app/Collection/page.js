'use client'
import React, { useContext } from 'react'
import First from '../[Detailsid]/first/First'
import { userContext } from '../context/userContext'
import Card from '.././COMPONENTS/thirdsection/Card'

function page() {

  const { products } = useContext(userContext)
  return (
    <>
      <First name="ALL COLLECTIONS" />
      <div className='container'>
        {products && (
          <div className='row mt-4'>
            {products.map(smooth => (
              <>
                <div className='col-md-4 col-sm-12'>
                  <Card key={smooth.id} smooth={smooth} />
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default page
