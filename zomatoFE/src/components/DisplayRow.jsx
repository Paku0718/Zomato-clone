import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function DisplayRow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: '../src/assets/slides/slide1.png',
      offer: '20% off on all pizzas',
    },
    {
      image: '../src/assets/slides/slide2.png',
      offer: 'Free delivery on orders over $30',
    },
    {
      image: '../src/assets/slides/slide3.png',
      offer: 'Buy one, get one free on pasta',
    },
  ];

  const prevSlide = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  return (
    <div className="max-w-[1400px] h-[550px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover relative flex items-center justify-center "
      >
       {/* Offer Text in Top Left */}
       <div className="absolute top-5 left-5 bg-black/50 text-white p-4 rounded-lg text-xl font-bold">
          {slides[currentIndex].offer}
        </div>
        
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
            
        </div>
      </div>
    </div>
  );
}

export default DisplayRow;


