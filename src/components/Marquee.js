import './Marquee.css';
import React from 'react';

// Default export for Marquee
const Marquee = () => {
  return (
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
    </>
  );
};

export default Marquee; // Default export for Marquee
