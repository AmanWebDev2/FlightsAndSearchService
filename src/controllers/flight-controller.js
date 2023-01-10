const { FlightService } = require('../services/index');

const fightService = new FlightService();

const create = async(req,res) => {
    try {
        const flight = await fightService.createFlight(req.body);
        return res.status(201).json({
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
        return res.status(201).json({
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

module.exports = {
    create,
    getAll
}