'use client'
import React, { useRef, useState } from 'react'


import './footer.css'
function Footer() {

    const [email, setemail] = useState('')
    const [submit, setsubmit] = useState('send')

    const formRef = useRef(null);
   function sendemail(event){
    event.preventDefault();
    fetch("https://sendmail-api-docs.vercel.app/api/send", {
          method: "POST",
           body: JSON.stringify({
             to: "basantheshem9@gmail.com",
             subject: "Flower Shop | Contact US",
             message: `
                 <p>Message: ${email}</p>
               `,
           })
         })
           .then(res => res.json())
          .then(data => console.log(data))

          setemail('')
          setsubmit('sent..!')
    }
    return (
        <>
            <div className='email '>
                <form onSubmit={sendemail} ref={formRef}>
                    <div className='d-flex align-content-between align-items-center justify-content-center'>
                    <input  onChange={(e) => setemail(e.target.value)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{border:'none'}} required/>
                        <input className='send' value={submit} type="submit"  />
                    </div>
                </form>

            </div>

        </>
    )
}

export default Footer
