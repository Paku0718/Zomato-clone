const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurantModel');

// Fetch all restaurants (GET)
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching restaurants' });
  }
});

// Add a new restaurant (POST)
router.post('/', async (req, res) => {
  try {
    const newRestaurant = new Restaurant({
      name: req.body.name,
      location: req.body.location,
      cuisine: req.body.cuisine,
      rating: req.body.rating,
      menu: req.body.menu,
      imageUrl: req.body.imageUrl, // If the image URL is provided
    });

    const savedRestaurant = await newRestaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (error) {
    res.status(500).json({ message: 'Error adding restaurant', error });
  }
});

// Fetch a single restaurant by ID (GET)
router.get('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching restaurant', error });
  }
});

module.exports = router;
