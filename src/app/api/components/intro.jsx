import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { BsLaptop } from 'react-icons/bs';
import { BiBuildings } from 'react-icons/bi';
import { AiOutlineSend } from 'react-icons/ai';

import './../scss/Intro.scss';
import './../scss/global.scss';

const intro = () => {
    return (
        <div className='main'>
            <div className="container-intro">
                <header>
                    <a href="#">
                        <span>the</span>
                        <p>Developer</p>
                    </a>
                </header>

                <main>

                    <div className="service">
                        <a href="#" className='service-link'>
                            <span className='service-des'>I build stunning and responsive Web Applications.</span>
                            <div className="all">

                                <div className="top">
                                    <div className="logo-desc">Fronend Expert</div>
                                    <div className="logo">Shrish Kerur</div>
                                </div>

                                <div className="down">
                                    <div className="our-services">See our services</div>
                                    <div className="down-link"><AiOutlineArrowDown /></div>

                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='wrapper'>
                        <div className='w-about'>
                            <div className="work">
                                <BsLaptop />
                                <span>Work</span>
                            </div>
                            <div className="about">
                                <BiBuildings />
                                <span>About</span>
                            </div>
                        </div>

                        <div className='contact'>
                            <AiOutlineSend />
                            <span>Contact Us</span>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default intro
