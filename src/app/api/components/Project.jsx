import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';


import './../scss/Project.scss';
import './../scss/global.scss';

const Project = () => {
  return (
    <div className='container'>
      <div className='main'>
        <div className="working">
          <div className='work-link'>

            <div className="top">
              <div className="top-left">01.</div>
              <div className="top-right">Featured</div>
            </div>

            <div className="mid">
              Kaploom.
            </div>

            <div className="down">
              <div className="down-left">Launch Project</div>
              <div className="down-right"><BsArrowUpRight /></div>
            </div>
          </div>
        </div>

        <div className="projects">
          <div className="project-top">
            <div className="one"></div>
            <div className="two"></div>
          </div>

          <div className="project-down">
            <div className="three"></div>
            <div className="four"></div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
