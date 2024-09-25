import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RestaurantPage from './pages/RestaurantPage';
import RestaurantForm from './pages/RestaurantForm';
import RestaurantDetailPage from './pages/RestaurantDetailPage';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/restaurants" element={<RestaurantPage />} />
          <Route path='/restaurantform' element={<RestaurantForm/>}/>
          <Route path='/restaurants/:id' element={<RestaurantDetailPage/>}/>

          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;