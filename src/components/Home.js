import React from 'react';
import './home.css';
import './Marquee.css';
import Marquee from './Marquee';
import Latest from './Latest';
import HomeVideos from './HomeVideos';
import ImageSlider from './ImageSlider';

import { MarqueeTwo } from './Marquee';

const Home = () => {
  
    const HomeFirstImages = [
      'img/pak.png',
      'img/2.png',
      'img/3.png',
    ];



  const images = [
    'img/pak.png',
    'img/2.png',
    'img/3.png',
  ];


  return (
    <>
   
{/* <------------------image slider start-----------> */}
    <div className="app">
         
          <ImageSlider images={HomeFirstImages} />
        </div>
{/* <------------------image slider end-----------> */}



{/* <--------------first Marquee start------------> */}
        <Marquee />
{/* <--------------first Marquee end------------> */}
     
     

{/* <--------------Latest News start------------> */}   
      <Latest stateName="Jharkhand" />
{/* <--------------Latest News end------------> */}    



{/* <--------------HomeVideos Marquee start------------> */}    
      <HomeVideos/>
{/* <--------------HomeVideos Marquee start------------> */}




{/* <--------------second Marquee start------------> */}
          <MarqueeTwo />
{/* <--------------second Marquee end------------> */}





{/* <------------------image slider start-----------> */}
     <div className="app">
     
      <ImageSlider images={images} />
    </div>
{/* <------------------image slider end-----------> */}

    </>
  );
};



export default Home;

