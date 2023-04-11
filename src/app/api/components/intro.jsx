import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

import './../scss/Intro.scss';
import './../scss/global.scss';

const intro = () => {
    return (
        <div className='main'>
            <div className="container">
                <header>
                    <a href="#">
                        <span>the</span>
                        <p>Developer</p>
                    </a>
                </header>

                <main>

                    <div className="service">
                        <a href="#" className='service-link'>
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
                            <div className="work"></div>
                            <div className="about"></div>
                        </div>

                        <div className='contact'></div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default intro
