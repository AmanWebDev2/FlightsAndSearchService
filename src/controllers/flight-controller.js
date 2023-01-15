const { FlightService } = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes');

const fightService = new FlightService();

const create = async(req,res) => {
    try {
        const flightRequestData = {
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            price: req.body.price,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            arrivalAirportId: req.body.arrivalAirportId,
            departureAirportId: req.body.departureAirportId
        } 
        // req.body makes our req bulky so to filter out we use above obj
        // const flight = await fightService.createFlight(req.body);
        const flight = await fightService.createFlight(flightRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            success: true,
            message: 'successfully created a flight',
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "unable to create a flight",
            err: error
        })
    }
}

const getAll = async(req,res)=>{
    try {
        const flights = await fightService.getAllFlight(req.query);
        return res.status(SuccessCodes.OK).json({
            data: flights,
            success: true,
            message: 'successfully fetched all flight',
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "unable to create a flight",
            err: error
        })
    }
}

const get = async(req,res) => {
    try {
        const flight = await fightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            success: true,
            message: 'successfully fetched the flight',
            err: {} 
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "unable to fetch a flight",
            err: error
        })   
    }    
}

const update = async(req,res) => {
    try {
        const response = await fightService.updateFlight(req.params.id,req.body);
        return res.status(SuccessCodes.OK).json({
            success: true,
            data: response,
            message: 'successfully updated a flight',
            err: {}
        })        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'unable to update a flight',
            err: error
        })
    }
}

module.exports = {
    create,
    getAll,
    get,
    update
}