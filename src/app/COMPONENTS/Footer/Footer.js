'use client'
import React, { useRef, useState } from 'react'
import { TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import './footer.css'
function Footer() {
    const form = useRef();
const[sent ,setsent]=useState('Send')
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_107ulmj', 'template_nbhdwcb', form.current, '7lZJeYBZWISTq6zOM')
            .then((result) => {
                console.log(result.text);
                setsent('Sent!')
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
  return (
    <>
        <div className='email '>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='d-flex align-content-between align-items-center justify-content-center'>

                            <TextField type="email" name="user_email" id="standard-basic" label="Enter Your Email" variant="standard" required />
                            <input className='send' type="submit" value={sent} />
                        </div>
                    </form>
                  
                </div>
           
    </>
  )
}

export default Footer
