'use client'
import React from 'react'
import './second.css'
import Third from '../thirdsection/Third'
function Second({  smoothes }) {


  return (
    <div className='container secondsection'>
      <div className='row '>
        <div className='col-md-6 col-sm-12 text-center leftsidesection'>
          <h3>fresh flowers</h3>
          <h2> from our garden to your table</h2>
          <p>flowers are carefully selected and handpicked by expert florists
            smile and happiness</p>
          <button >shop now</button>
        </div>
        <div className='col-md-6 col-sm-12 righsidesection'>

          <img src='images/pookal.webp' alt="" />
        </div>
      </div>
      <Third   smoothes={smoothes} />
    </div>
  )
}

export default Second
