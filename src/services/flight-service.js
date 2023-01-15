const { response } = require('express');
const { FlightRepository ,AirplaneRepository} = require('../repository/index');
const compareTime = require('../utils/helper');

class FlightService {

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)) {
                throw {error:"arrival time should not be less than departure time"};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data, totalSeats: airplane.capacity});
            return flight;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw { error }; 
        }
    }

    async getAllFlight(data) {
        try {
            const flight = await this.flightRepository.getAllFlight(data);
            return flight;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw { error };
        }
    }

    async getFlight(flightId){
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw error;
        }
    }

    async updateFlight(flightId,data) {
        try {
            const response = await this.flightRepository.updateFlight(flightId,data);
            return response;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw error;
        }
    }
}

module.exports = FlightService;

/**
 * flightNumber
 * airplaneId
 * departureAirportId
 * arrivalAirportId
 * price
 * departureTime
 * arrivalTime
 * totalSeats -> airplane model
 *
 */