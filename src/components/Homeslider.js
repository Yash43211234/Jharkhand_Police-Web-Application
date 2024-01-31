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

    </>
  );
};



export default homeSlider;
