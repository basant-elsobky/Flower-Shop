'use client'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import HelpIcon from '@mui/icons-material/Help';
import './description.css'

import Decscriptioncontent from './Decscriptioncontent';
import Swiber from './swibers/Swiber';
import React, { useRef, useState } from 'react';
function Description() {
    
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

        

                </div>
        </div>
    )
}

export default Description
