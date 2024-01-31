import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <>
    <div className="image-slider">
      <button onClick={prevSlide}>Previous</button>
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
      <button onClick={nextSlide}>Next</button>
    </div>
    <style>
        {
            `
            .image-slider {
                position: relative;
                width: 100%;
                max-width: 600px; /* Adjust as needed */
                margin: 0 auto;
              }
              
              .image-slider img {
                width: 100%;
                height: auto;
                display: block;
                border-radius: 8px; /* Add some border radius for rounded corners */
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
              }
              
              .image-slider button {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(255, 255, 255, 0.5); /* Semi-transparent white background */
                border: none;
                color: #333; /* Dark text color */
                font-size: 18px;
                padding: 10px 20px;
                cursor: pointer;
                border-radius: 5px;
              }
              
              .image-slider button:hover {
                background: rgba(255, 255, 255, 0.7); /* Lighten the background on hover */
              }
              
              .image-slider button:first-child {
                left: 10px;
              }
              
              .image-slider button:last-child {
                right: 10px;
              }
              
            `
        }
    </style>
    </>
  );
};

export default ImageSlider;
