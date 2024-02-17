import React, { useEffect, useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {}, [currentIndex]);

  return (
    <>
      {images.map((image, index) => (
        <div id={index} className={`relative max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl font-paragraph flex-1 transition-transform duration-1000 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`}>
          <img src={image} alt={`Slide ${index}`} className="w-full" />
        
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 pl-2 text-white" onClick={goToNextSlide}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 pr-2 text-white hover:cursor" onClick={goToPrevSlide}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

        
         
        </div>
      ))}
    </>
    // <div className="relative">
    //   <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
    //     <div
    //       className="flex transition-transform duration-1000 ease-in-out"
    //     >
    //       {images.map((image, index) => (
    //           <img
    //             src={image}
    //             alt={`Slide ${index}`}
    //             className="w-full h-96"
    //           />

    //       ))}
    //     </div>
    //   </div>
    //   <button
    //     className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l-md"
    //     onClick={goToPrevSlide}
    //   >
    //     Prev
    //   </button>
    //   <button
    //     className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r-md"
    //     onClick={goToNextSlide}
    //   >
    //     Next
    //   </button>
    // </div>
  );
};

export default Carousel;
