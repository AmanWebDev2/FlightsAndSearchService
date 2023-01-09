const express = require('express');

const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

const ApiRoutes = require('./routes/index');

const { sequelize } = require('./models');
const db = require('./models/index');

const setupAndStartService = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api',ApiRoutes);

    if(process.env.SYNC_DB) {
        db.sequelize.sync({ alter:true })
    }

    // const airport = await db.Airport.create({
    //     name:'Bangalore International Airport',
    //     cityId:5
    // })

    // const city = await db.City.findOne({
    //     where: {
    //         id: 4
    //     }
    // });
    // const airport = await db.Airport.findOne({
    //     where: {
    //         id: 6
    //     }
    // })
    // const air = await city.addAirports(airport);
    // console.log(airport);


    app.listen(PORT, () => {
        console.log(`server is running on PORT ${PORT}`);
    })
}

setupAndStartService();