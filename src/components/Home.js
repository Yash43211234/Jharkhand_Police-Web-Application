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
            .navbar {
              overflow: hidden;
              background-color: #333;
            }

            .Navbar {
              background: #00123c;
              position: fixed;
              width: 100%;
              height: auto;
              top: 30px;
              position: relative;
              margin-bottom: 50px;
              height: 70px;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .Navbar li {
              border: 0;
              display: inline-block;
              list-style: none;
            }

            .navbar-nav {
              list-style-type: none;
              margin: 0;
              padding: 0;
              display: flex;
            }

            .nav-item {
              margin-right: 10px;
            }

            .nav-link {
              color: #fff;
              text-decoration: none;
              padding: 10px 15px;
              display: block;
            }

            /*

            .nav-link:hover {
              background-color: #ddd;
              color: black;
            }

            */

            select {
              color: #ddd;
              background-color: rgb(10, 10, 10);
              border: 1px solid rgb(10, 10, 10);
            }

            /* Dropdown CSS */
            .dropdown {
              position: relative;
            }

            .dropbtn a .active {
              color: rgb(10, 10, 10);
              background-color: rgb(244, 240, 240);
            }

            .dropbtn {
              background-color: inherit;
              color: white;
              padding: 10px 15px;

              border: none;
              cursor: pointer;
            }

            .dropdown-content {
              display: none;
              position: absolute;
              background-color: #f9f9f9;
              min-width: 150px;
              box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
              z-index: 1;
            }

            .dropdown-content a {
              color: black;
              padding: 12px 16px;
              text-decoration: none;
              display: block;
            }

            .dropdown-content a:hover {
              background-color: #ddd;
            }

            .dropdown:hover .dropdown-content {
              display: block;
            }
            .dropdown-content a {
              font-size: 16px;
            }
            /* ----------------------Navbar CSS-------------------- */
            /* ----------------------Navbar CSS-------------------- */

         `
        }
      </style>



    </>
  );
};



export default Home;

