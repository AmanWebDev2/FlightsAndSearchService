const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req,res) => {
    try {
        const city = await cityService.create(req.body);
        return res.status(201).json({
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
        return res.status(200).json({
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
        return res.status(200).json({
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
        return res.status(200).json({
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


module.exports = {
    get,
    create,
    update,
    destroy
}