class CrudService {
    constructor(respository){
        this.respository = respository;
    }

    async create(data) {
        try {
            const result = await this.respository.create(data);
            return result;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw {error}
        }
    }

    async destroy(id) {
        try {
            const result = await this.respository.destroy(id);
            return result;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw {error}
        }
    }

    async get(id) {
        try {
            const result = await this.respository.get(id);
            return result;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw {error}
        }
    }

    async getAll() {
        try {
            const result = await this.respository.getAll();
            return result;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw {error}
        }
    }

    async update(id,data) {
        try {
            const result = await this.respository.update(id,data);
            return result;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw {error}
        }
    }
};

module.exports = CrudService;