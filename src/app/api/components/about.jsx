import React from 'react';
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { AiFillGithub } from 'react-icons/ai';

import './../scss/About.scss';
import './../scss/global.scss';

const about = () => {
    return (
        <div className='container-about'>
            <div className="work">
                <div className="intro">We provide clients with stunnign crafty web solutions, developed with skil & passion.</div>

                <div className="work-skills">
                    <div className="logo">
                        <AiFillHtml5 />
                    </div>
                    <div className="skill-desc">
                        <span>HTML</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, aperiam deleniti quos sunt laudantium ipsa, omnis quisquam nam autem.</p>
                    </div>
                </div>
                
                <div className="work-skills">
                    <div className="logo">
                        <FaCss3Alt />
                    </div>
                    <div className="skill-desc">
                        <span>CSS</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, aperiam deleniti quos sunt laudantium ipsa, omnis quisquam nam autem natus aliquam.</p>
                    </div>
                </div>
                
                <div className="work-skills">
                    <div className="logo">
                        <IoLogoJavascript />
                    </div>
                    <div className="skill-desc">
                        <span>JavaScript</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, aperiam deleniti quos sunt laudantium ipsa, omnis quisquam nam autem natus aliquam.</p>
                    </div>
                </div>
                
                <div className="work-skills">
                    <div className="logo">
                        <FaReact />
                    </div>
                    <div className="skill-desc">
                        <span>ReactJs</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, aperiam deleniti quos sunt laudantium ipsa, omnis quisquam nam autem natus aliquam.</p>
                    </div>
                </div>

                <div className="work-skills">
                    <div className="logo">
                        <SiTailwindcss />
                    </div>
                    <div className="skill-desc">
                        <span>tailwindcss</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, aperiam deleniti quos sunt laudantium ipsa, omnis quisquam nam autem natus aliquam.</p>
                    </div>
                </div>
                
                <div className="work-skills">
                    <div className="logo">
                        <FaSass />
                    </div>
                    <div className="skill-desc">
                        <span>SCSS</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, aperiam deleniti quos sunt laudantium ipsa, omnis quisquam nam autem natus aliquam.</p>
                    </div>
                </div>


                <div className="work-skills">
                    <div className="logo">
                        <SiMongodb />
                    </div>
                    <div className="skill-desc">
                        <span>MongoDB</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, aperiam deleniti quos sunt laudantium ipsa, omnis quisquam nam autem natus aliquam.</p>
                    </div>
                </div>
                
                <div className="work-skills">
                    <div className="logo">
                        <TbBrandNextjs />
                    </div>
                    <div className="skill-desc">
                        <span>NextJs</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, aperiam deleniti quos sunt laudantium ipsa, omnis quisquam nam autem natus aliquam.</p>
                    </div>
                </div>

                <div className="work-skills">
                    <div className="logo">
                        <AiFillGithub />
                    </div>
                    <div className="skill-desc">
                        <span>GIT and GitHub</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, aperiam deleniti quos sunt laudantium ipsa, omnis quisquam nam autem natus aliquam.</p>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default about
