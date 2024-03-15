import React from 'react';


import Marquee from './Marquee';
import Latest from './Latest';
import HomeVideos from './HomeVideos';
import ImageSlider from './ImageSlider';

import { MarqueeTwo } from './Marquee';

const Home = () => {

  const HomeFirstImages = [
    'img/lobby.jpg',
    'img/lobby2.jpg',
    'img/whodidbetter.jpg',
  ];



  // const images = [
  //   'img/lobby.jpg',
  //   'img/whodidbetter.jpg',
  //   'img/petrol.jpg',
  // ];


  return (
    <>

      {/* <------------------image slider start-----------> */}
      <div className="app home-content">

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
      <HomeVideos />
      {/* <--------------HomeVideos Marquee start------------> */}




      {/* <--------------second Marquee start------------> */}
      <MarqueeTwo />
      {/* <--------------second Marquee end------------> */}





      {/* <------------------image slider start-----------> */}

      <div className="app">
        {/* <ImageSlider images={images} /> */}
      </div>

      {/* <------------------image slider end-----------> */}



      <style>
        {
          `   
                /* ----------------------Navbar CSS-------------------- */
                /* ----------------------Navbar CSS-------------------- */
          
         `
        }
      </style>



    </>
  );
};



export default Home;

