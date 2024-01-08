const express = require('express');

const restaurantController = require('../Controllers/restaurants.js');
const restaurantByCityController = require('../Controllers/restaurantByCity.js');
const locationController = require('../Controllers/locations.js');
const mealtypeController = require('../Controllers/mealtypes.js');
const userController = require('../Controllers/users.js');
const menuController = require('../Controllers/menus.js');

const route = express.Router();
route.get('/restaurants',restaurantController.getRestaurants);
route.get('/restaurants/:askedCity',restaurantByCityController.getRestaurantByCity);
route.get('/restaurant/:askedId',restaurantByCityController.getRestaurantById);
route.post('/filter', restaurantController.filterRestaurant);
route.post('/signup',userController.signup);
route.post('/login',userController.login);
route.get('/locations',locationController.getLocations);
route.get('/mealtypes',mealtypeController.getMealtype);
route.get('/menu/:askedId',menuController.getMenu);

module.exports = route;