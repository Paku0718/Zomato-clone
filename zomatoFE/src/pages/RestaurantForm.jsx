import React, { useState } from 'react';

const RestaurantForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [rating, setRating] = useState('');
  const [menu, setMenu] = useState([{ item: '', price: '' }]);
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleAddMenuItem = () => {
    setMenu([...menu, { item: '', price: '' }]);
  };

  const handleMenuChange = (index, field, value) => {
    const updatedMenu = [...menu];
    updatedMenu[index][field] = value;
    setMenu(updatedMenu);
  };

  // Handle image upload to Cloudinary
  const handleImageUpload = async () => {
    if (!imageFile) return;

    const formData = new FormData();
    formData.append('file', imageFile);
    formData.append('upload_preset', 'yomicdy5');

    setUploading(true);
    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/djllgtxpc/image/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setImageUrl(data.secure_url); // Get the secure URL of the uploaded image
      setUploading(false);
    } catch (err) {
      console.error('Image upload failed:', err);
      setUploading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const restaurantData = { name, location, cuisine, rating, menu, imageUrl };

    fetch('http://localhost:5000/api/restaurants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(restaurantData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Restaurant added successfully:', data);
      })
      .catch((err) => console.error('Error adding restaurant:', err));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className="w-full p-2 border border-gray-300 rounded" 
      />
      <input 
        type="text" 
        placeholder="Location" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        className="w-full p-2 border border-gray-300 rounded" 
      />
      <input 
        type="text" 
        placeholder="Cuisine" 
        value={cuisine} 
        onChange={(e) => setCuisine(e.target.value)} 
        className="w-full p-2 border border-gray-300 rounded" 
      />
      <input 
        type="number" 
        placeholder="Rating" 
        value={rating} 
        onChange={(e) => setRating(e.target.value)} 
        className="w-full p-2 border border-gray-300 rounded" 
      />

      <input 
        type="file" 
        onChange={(e) => setImageFile(e.target.files[0])} 
        className="w-full p-2 border border-gray-300 rounded" 
      />
      <button 
        type="button" 
        onClick={handleImageUpload} 
        className="mt-2 p-2 bg-blue-500 text-white rounded"
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>

      {imageUrl && (
        <div>
          <p>Image uploaded successfully:</p>
          <img src={imageUrl} alt="Uploaded" className="w-32 h-32 object-cover" />
        </div>
      )}

      <h3>Menu Items:</h3>
      {menu.map((menuItem, index) => (
        <div key={index} className="flex space-x-4">
          <input 
            type="text" 
            placeholder="Item Name" 
            value={menuItem.item} 
            onChange={(e) => handleMenuChange(index, 'item', e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded" 
          />
          <input 
            type="number" 
            placeholder="Price" 
            value={menuItem.price} 
            onChange={(e) => handleMenuChange(index, 'price', e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded" 
          />
        </div>
      ))}
      <button type="button" onClick={handleAddMenuItem} className="mt-2 p-2 bg-blue-500 text-white rounded">Add Menu Item</button>

      <button type="submit" className="p-2 bg-green-500 text-white rounded" disabled={uploading}>
        {uploading ? 'Please wait...' : 'Add Restaurant'}
      </button>
    </form>
  );
};

export default RestaurantForm;
