import React, { useEffect, useState } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
   
    if (currentIndex === images.length -1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  };

  const goToPrevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {}, [currentIndex]);

  return (
    <div>
      {images.map((image, index) => (
        <div
        key={index}
          id={index}
          className={`relative max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl font-paragraph flex-1 transition-transform duration-1000 ease-in-out ${
            index === currentIndex ? "block" : "hidden"
          }`}
        >
          <img src={image} alt={`Slide ${index}`} className="w-full" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 pl-2 text-champagne"
            onClick={goToPrevSlide}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 pr-2 text-champagne"
            onClick={goToNextSlide}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
          <div className="absolute bottom-0 h-6 left-0 w-full flex justify-center">
            
            {images.map((_, dotIndex) => (
              <>
                {dotIndex === currentIndex ? (
                  <img
                    src="/daisy.png"
                    alt="Daisy"
                    className="w-4 h-4 mx-1 rounded-full cursor-pointer"
                  />
                ) : (
                  
                  
                  <span
                key={dotIndex}
                onClick={() => handleDotClick(dotIndex)}
                className="mx-1 w-2 h-2 mt-1 rounded-full cursor-pointer bg-champagne"
              >
                </span>
                
                )}
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
