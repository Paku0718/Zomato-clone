import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Utensils } from 'lucide-react';

const RestaurantDetailPage = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/restaurants/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurant(data))
      .catch((err) => console.error('Error fetching restaurant details:', err));
  }, [id]);

  if (!restaurant) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="relative">
            <img 
              src={restaurant.imageUrl} 
              alt={restaurant.name} 
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h1 className="text-4xl font-bold text-white mb-2">{restaurant.name}</h1>
              <div className="flex items-center text-yellow-400">
                <Star className="h-5 w-5 fill-current" />
                <span className="ml-1 text-lg">{restaurant.rating}</span>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center mb-4">
              <MapPin className="h-5 w-5 text-gray-500 mr-2" />
              <p className="text-xl text-gray-700">{restaurant.location}</p>
            </div>
            <div className="flex items-center mb-6">
              <Utensils className="h-5 w-5 text-gray-500 mr-2" />
              <p className="text-xl text-gray-700">{restaurant.cuisine}</p>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {restaurant.menu.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-2">{item.item}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;