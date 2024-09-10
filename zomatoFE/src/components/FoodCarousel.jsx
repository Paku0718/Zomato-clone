import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { foodCategories } from '../data';


function FoodCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 5; // Number of dishes to show at once

  const prevSlide = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? foodCategories.length - visibleSlides : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastIndex = currentIndex === foodCategories.length - visibleSlides;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative flex items-center justify-center w-full max-w-[1400px] mx-auto py-8">
      {/* Left Arrow */}
      <div 
        className="absolute left-0 text-2xl p-2 bg-white rounded-full shadow-md cursor-pointer" 
        onClick={prevSlide}
      >
        <BsChevronLeft />
      </div>

      {/* Food Categories */}
      <div className="flex justify-center items-center gap-8 overflow-hidden">
        {foodCategories.slice(currentIndex, currentIndex + visibleSlides).map((category, index) => (
          <div
            key={category.name}
            className="flex flex-col items-center"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-800">
              {category.name}
            </p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <div 
        className="absolute right-0 text-2xl p-2 bg-white rounded-full shadow-md cursor-pointer" 
        onClick={nextSlide}
      >
        <BsChevronRight />
      </div>
    </div>
  );
}

export default FoodCarousel;
