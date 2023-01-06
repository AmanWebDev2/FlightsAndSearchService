const { CityRepository } = require('../repository/index');

const cityRepository = new CityRepository();
//we can use static method

class CityService {
    // here is a proble we don't have to creat3e and instance when we only want to acess behavioud
    // constructor() {
    //     this.cityRepository = new CityRepository();
    // }

    async create(data) {
        try {
            const city = await cityRepository.createCity(data);
            return city;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw { error };
        }
     };

    async delete(cityId) {
        try {
            const resp = await cityRepository.deleteCity(cityId);
            return resp;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw { error };
        }
     };

    async update(cityId,data) {
        try {
            const city = await cityRepository.updateCity(cityId,data);
            return city;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw { error };
        }
     };

    async getCity(cityId) { 
        try {
            const city = await cityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw { error };
        }
    };
};

module.exports = CityService;