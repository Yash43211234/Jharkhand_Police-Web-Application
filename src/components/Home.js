import React from 'react';
import './home.css';
import './Marquee.css';
import Marquee from './Marquee';
import Latest from './Latest';


import { MarqueeTwo } from './Marquee';

const Home = () => {
  return (
    <div className='Home-img-first'>
       <img src="https://www.jagranimages.com/images/newimg/15022023/15_02_2023-ajay_kumar_singh_23330791.webp" alt="My Image" width="100%" />

      {/* <--------------first Marquee------------> */}
        <Marquee />
      <div>
      
      {/* <--------------second Marquee------------> */}
        <p>What's New</p>
          <MarqueeTwo />
      </div>
      <Latest stateName="Jharkhand" />
    </div>
  );
};



export default Home;

