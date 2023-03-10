const { City } = require('../models/index');

const { Op } = require('sequelize');

class CityRepository {

    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log('something went wrong in repository layer')
            throw { error }
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            })
        } catch (error) {
            console.log('something went wrong in repository layer')
            throw { error }
        }
    }

    async updateCity(cityId, data) {
        try {
            // const city = City.update(data,{
            //     where: {
            //         id: cityId
            //     }
            // });
            // return city;
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log('something went wrong in repository layer')
            throw{ error };
        }
    }

    async getCity(cityId,{showAirports}) {
        try {
            const city = await City.findByPk(cityId);
            if(showAirports) {
                city.airports = await city.getAirports();
            }
            return city;
        } catch (error) {
            console.log('something went wrong in repository layer')
            throw{ error };
        }
    }

    async addCities(arrOfCities) {
        try {
            const cities = await City.bulkCreate(arrOfCities);
            return cities;
        } catch (error) {
            console.log('something went wrong in repository layer');
        }
    }

    async getAllCities(filter) {
        try {
            if(filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log('something went wrong in repository layer')
            throw{ error }; 
        }
    }
}

module.exports = CityRepository;