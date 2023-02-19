const express = require('express');
const router = express.Router();

const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');

const { FlightMiddleware,AirportMiddleware } = require('../../middlewares/index');

router.get('/city/:id',CityController.get);
router.post('/city',CityController.create);
router.post('/cities',CityController.addCities);
router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id',CityController.update);
router.get('/cities',CityController.getAll);

router.post('/flights',FlightMiddleware.validateCreateFlight,FlightController.create);
router.get('/flights',FlightController.getAll);
router.get('/flights/:id',FlightController.get);
router.patch('/flights/:id',FlightController.update);

router.post('/airports',AirportMiddleware.validateCreateAirport,AirportController.create);

module.exports = router;