import React from 'react';
import DisplayRow from '../components/DisplayRow';
import RestaurantCard from '../components/RestaurantCard';
import { restaurantData } from '../data';
import FoodCarousel from '../components/FoodCarousel';

const HomePage = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <DisplayRow />

      {/* Dishes Section with Carousel */}
      <div className="flex flex-col items-start py-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
          Dishes
        </h2>
        <div className="w-12 sm:w-16 h-1 bg-red-500 rounded-full mb-4 sm:mb-6"></div>
        <FoodCarousel />
      </div>

      {/* Restaurants Section */}
      <div className="flex flex-col items-start py-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
          Restaurants
        </h2>
        <div className="w-12 sm:w-16 h-1 bg-red-500 rounded-full mb-4 sm:mb-6"></div>
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-5 w-full h-full rounded-2xl">
        {restaurantData.map((restaurant) => (
          <RestaurantCard key={restaurant.name} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
