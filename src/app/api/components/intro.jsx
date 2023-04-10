import React from 'react';
import './../scss/Intro.scss';

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

                    <div className="service"></div>

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
