const { AirportService } = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes');
const airportService = new AirportService();

const create = async(req,res) => {
    try {
        const airportRequestData = {
            name: req.body.name,
            address: req.body.address,
            cityId: req.body.cityId
        }
        const response = await airportService.create(airportRequestData);
        return res.status(SuccessCodes.CREATED).json({
            data: response,
            success: true,
            message: "successfully created the airport",
            err: {}
        })        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "unable to create the airport",
            err: error
        })
    }
};

module.exports = {
    create
}