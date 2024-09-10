import React from 'react';
import { Star } from 'lucide-react';

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-white border border-gray-200 hover:border-gray-300">
      <div className="relative">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
        <div className="absolute top-0 right-0 bg-white px-2 py-1 m-2 rounded-full shadow">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="text-gray-700 font-semibold text-sm">{restaurant.rating}</span>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800 hover:text-gray-600 transition-colors duration-300">{restaurant.name}</div>
        <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
        <p className="text-gray-600 text-sm">{restaurant.address}</p>
      </div>
      <div className="px-6 pt-2 pb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105">
          #Restaurant
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 hover:text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-105">
          #{restaurant.cuisine.replace(/\s+/g, '')}
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;