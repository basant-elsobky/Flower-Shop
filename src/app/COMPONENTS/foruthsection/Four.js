import React from 'react'
import './four.css'
function Four() {
  return (
    <div className='container foursection '>
      <div className='text-center topsection d-flex flex-row align-content-center justify-content-between'>
        <div>

          <h5>order now</h5>
          <h2>our garden collection</h2>
          <p >Blossoms live in every color and aroma.<br></br>
            Beautifully share your emotions with our garden flowers.</p>
        </div>
      </div>

      <div className='bottomsection'>
        <div className='row'>
          <div className='col-md-8 col-sm-12'>
            <img src='/images/girlflower.webp' />
          </div>
          <div className='col-md-4 col-sm-12'>
            <ol className="circle-bullets">
              <li><div className='d-flex flex-column'>
                <h4>
                  Choose Flower</h4>
                <p>Facilisis sed odio morbi quis commodo odio. Tristique et egestas quis ipsum suspendisse ultrices.</p>
              </div></li>
              <li><div className='d-flex flex-column'>
                <h4>
                  Place an Order</h4>
                <p>Duis at consectetur lorem donec massa. Sagittis id consectetur purus ut faucibus.</p>
              </div></li>
              <li><div className='d-flex flex-column'>
                <h4>
                  Get Plants Delivered</h4>
                <p>Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.</p>
              </div></li>

            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Four
