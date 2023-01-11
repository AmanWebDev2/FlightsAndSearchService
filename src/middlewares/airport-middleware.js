const { ClientErrorsCodes } = require("../utils/error-codes")

const validateCreateAirport = (req,res,next) => {
    if(
        !req.body.name ||
        !req.body.cityId
    ) {
        return res.status(ClientErrorsCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request body for create airport',
            err: 'Missing mandatory properties to create a airport'
        })
    }

    next();
}

module.exports = {
    validateCreateAirport
}