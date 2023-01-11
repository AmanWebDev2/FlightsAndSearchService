const { CityService } = require('../services/index');
const { SuccessCodes } = require('../utils/error-codes');

const cityService = new CityService();

const create = async (req,res) => {
    try {
        const city = await cityService.create(req.body);
        return res.status(SuccessCodes.CREATED).json({
            data: city,
            success: true,
            message: "successfully created a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "unable to create a city",
            err: error
        })
    }
}

const destroy = async (req,res) => {
    try {
        const resp = await cityService.delete(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: resp,
            success: true,
            message: "successfully deleted a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "unable to delete a city",
            err: error
        })
    }
}

const update = async (req,res) => {
    try {
        const city = await cityService.update(req.params.id, req.body);
        return res.status(SuccessCodes.OK).json({
            data: city,
            success: true,
            message: "successfully updated a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "unable to update a city",
            err: error
        })
    }
}

const get = async (req,res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data: city,
            success: true,
            message: "successfully fetched a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "unable to fetched a city",
            err: error
        })
    }
}

const getAll = async (req,res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(SuccessCodes.OK).json({
            data: cities,
            success: true,
            message: "successfully fetched all cities",
            err: {}
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            success: false,
            message: "unable to get all cities",
            err: error
        })
    }
}


module.exports = {
    get,
    getAll,
    create,
    update,
    destroy
}