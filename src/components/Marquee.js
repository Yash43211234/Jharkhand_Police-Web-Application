import React from 'react';

// Default export for Marquee
const Marquee = () => {
  return (

    <>
    <div className="marquee-container ">
      <div className='inline_marquee'>
       <b> Helpline</b>
      </div>

      <div className="marquee-content ">
        
        <span><b>Cyber Complaints</b> : 1930 </span> 
        <span><b>Railways </b> : 1512 </span>
        <span><b>Vigilance</b> : 1064 </span>
        <span><b>Women in distress</b> : 1091 </span>
        <span><b>Missing Person</b> : 1094,23241210 </span>
        <span><b>Senior Citizen</b> : 1291 </span>
        <span><b>Traffic</b> : 1095, 25844444 </span>
        
      </div>
    </div>
    <style>
      {
        `
        .marquee-container {
          width: 80%;
          margin-left:200px;
          overflow: hidden;
        }
        .marquee-container{
          background-color: white;
          padding-top: 5px;
          padding-bottom: 5px;
        
      
        }
        .marquee-content {
          
          margin-top: 15px;;
          font-size: 25px;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }
        .marquee-content span b{
          font-size: 25px;
          margin-top: 4px;
          margin-bottom: 4px;
          color: rgb(218, 167, 65);
        }
        
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .Home-img-first img{
          margin-top: -20px;
          height: auto;
        }
        
        .inline_marquee {
          display: flex;
          display: inline;
          position: absolute;
          color:white;
          background-color: rgb(181, 21, 21);
          
          font-size: 35px;
          padding: 4px;
          margin-top:5px;
          z-index: 1;
          border-radius:4px;
      
          left:100px;
        }
        
        .marquee-content:hover {
          animation: 0;
          cursor: pointer;
        }
        .Mark{
            margin-top: 10px;
            margin-bottom: 10px;
      
        }
        
        `
      }
    </style>


    </>
  );
};

// Name export for MarqueeTwo
export const MarqueeTwo = () => {
  return (
    <>
    <div className='Mark'>

    <div className="marquee-container ">
      <div className='inline_marquee'>
       <b> What's new</b>
      </div>

      <div className="marquee-content ">
      <span><b>No updates right now</b></span>
      
        
      </div>
    </div>
    </div>
    <style>
      {
        `
        .marquee-container {
          width: 80%;
          margin-left:200px;
          overflow: hidden;
        }
        .marquee-container{
          background-color: white;
          padding-top: 5px;
          padding-bottom: 5px;
        
      
        }
        .marquee-content {
          
          margin-top: 15px;;
          font-size: 25px;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }
        .marquee-content span b{
          font-size: 25px;
          margin-top: 4px;
          margin-bottom: 4px;
          color: rgb(218, 167, 65);
        }
        
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .Home-img-first img{
          margin-top: -20px;
          height: auto;
        }
        
        .inline_marquee {
          display: flex;
          display: inline;
          position: absolute;
          color:white;
          background-color: rgb(181, 21, 21);
          
          font-size: 35px;
          padding: 4px;
          margin-top:5px;
          z-index: 1;
          border-radius:4px;
      
          left:100px;
        }
        
        .marquee-content:hover {
          animation: 0;
          cursor: pointer;
        }
        .Mark{
            margin-top: 10px;
            margin-bottom: 10px;
      
        }
        
        `
      }
    </style>


    </>
  );
};

export default Marquee; // Default export for Marquee
