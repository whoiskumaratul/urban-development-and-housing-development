import React from 'react'
// import IMAGES from '../image/Image'
import { useState } from 'react';

// function Slider() {
  const Slider = ({ images }) => { 
    const [index, setIndex] = useState(0);
  
    const previousImage = () => {
      setIndex(index === 0 ? images.length - 1 : index - 1);
    };
  
    const nextImage = () => {
      setIndex(index === images.length - 1 ? 0 : index + 1);
    };
  
  return (
    <div>
    {/* <div>
        <img className='max-w-full w-screen  pl-4 pt-5 pr-4 ' src={IMAGES.image2} alt="Sliding Image" />
    </div> */}




    
    <div className="relative">
      <div className="  top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <img
          src={images[index]}
          alt="Slider"
          className="object-cover w-full h-full  pl-4 pt-5 pr-4"
        />
      </div>
      <div className="absolute top-0 bottom-0 left-0 flex justify-center items-center">
        <button
          className="p-2 rounded-full bg-gray-800 bg-opacity-50 text-white"
          onClick={previousImage}
        >
          Prev
        </button>
      </div>
      <div className="absolute top-0 bottom-0 right-0 flex justify-center items-center">
        <button
          className="p-2 rounded-full bg-gray-800 bg-opacity-50 text-white"
          onClick={nextImage}
        >
          Next
        </button>
      </div>
    </div>
    </div>
  );
};

 

export default Slider 