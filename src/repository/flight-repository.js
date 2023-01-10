const { Flight } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository {

    #createFilter(flightData){
        let filter = {};
        if(flightData.departureAirportId) {
            filter.departureAirportId = flightData.departureAirportId;
        }
        if(flightData.arrivalAirportId) {
            filter.arrivalAirportId = flightData.arrivalAirportId;
        }
        // Object.assign(filter, 
        //     {
        //         [Op.and]:[
        //             {price:{[Op.gte]:flightData.minPrice}},
        //             {price:{[Op.lte]:flightData.maxPrice}}
        //         ]
        //     });
        let priceFilter = [];
        if(flightData.minPrice) {
            priceFilter.push({price:{[Op.gte]:flightData.minPrice}});
        }
        if(flightData.maxPrice) {
            priceFilter.push({price:{[Op.lte]:flightData.maxPrice}});
        }
        Object.assign(filter, {[Op.and]:priceFilter});
        console.log(filter)
        return filter;
    }

    async createFlight (data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log('something went wrong in repository layer')
            throw { error }
        }
        
    }

    async getFlight(id) {
        try {
            const flight = await Flight.findByPk(id);
            return flight;
        } catch (error) {
            console.log('something went wrong in repository layer')
            throw { error }
        }
    }

    async getAllFlight(data) {
        try {
            const query = this.#createFilter(data);
            const flight = await Flight.findAll({
                where: query
            });
            return flight;
        } catch (error) {
            console.log('something went wrong in repository layer')
            throw { error }
        }
    }
}

module.exports = FlightRepository;


// {
//     where: {
//         arrivalAirportId: 3,
//         departureAirportId: 4,
//         price : {
//             [Op.gte]: 4000
//         }
//     }
// }