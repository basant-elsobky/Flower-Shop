'use client'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import HelpIcon from '@mui/icons-material/Help';
import './description.css'
import Decscriptioncontent from './Decscriptioncontent';
import Swiber from './swibers/Swiber';
import { TextField } from '@mui/material';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
function Description() {
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
        <div className='container'>
            <Tabs >
                <TabList >
                    <Tab classID='tab1'>product description</Tab>
                    <Tab classID='tab2'>review</Tab>
                </TabList>

                <TabPanel classID='TabList'>
                    <Decscriptioncontent />
                </TabPanel>
                <TabPanel classID='TabList'>
                    <div className='reviesconent'>
                        <h2>custom reviews</h2>
                        <div className='d-flex align-items-center topreview' >
                            <div className='d-flex '>

                                <StarIcon style={{ fontSize: '20px' }} />
                                <StarIcon style={{ fontSize: '20px' }} />
                                <StarIcon style={{ fontSize: '20px' }} />
                                <StarIcon style={{ fontSize: '20px' }} />
                                <StarHalfIcon style={{ fontSize: '20px' }} />
                            </div>
                            <h6>Based on 1 review</h6>
                        </div>
                        <div className='secondreview'>
                            <div className='d-flex'>
                                <StarIcon style={{ fontSize: '20px' }} />
                                <StarIcon style={{ fontSize: '20px' }} />
                                <StarIcon style={{ fontSize: '20px' }} />
                                <StarIcon style={{ fontSize: '20px' }} />
                                <StarIcon style={{ fontSize: '20px' }} />

                            </div>
                            <h4>Consequat ac felis donec</h4>
                            <h6>Stetson on Jul 27, 2020</h6>
                            <p>Feugiat vivamus at augue eget arcu dictum varius duis at. Augue lacus viverra vitae congue.</p>

                        </div>
                    </div>
                    <div></div>
                </TabPanel>
            </Tabs>
            <div className='d-flex mt-4 help'>
                <HelpIcon />
                <h5>HAVE QUESTIONS? ASK AN EXPERT</h5>
            </div>
            <div className='related'>
                <h3>Related Products</h3>
                <h6>From this Collection</h6>

                <div>
                    <Swiber />
                </div>

                <div className='email '>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='d-flex align-content-between align-items-center justify-content-center'>

                            <TextField type="email" name="user_email" id="standard-basic" label="Enter Your Email" variant="standard" required />
                            <input className='send' type="submit" value={sent} />
                        </div>
                    </form>
                  
                </div>
            </div>

        </div>
    )
}

export default Description
