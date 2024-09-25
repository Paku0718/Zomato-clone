import React, { useEffect, useState } from 'react';
// import RestaurantCard from './RestaurantCard';
import RestaurantCard from '../components/RestaurantCard';

const RestaurantPage = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/restaurants')
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Restaurants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant._id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantPage;