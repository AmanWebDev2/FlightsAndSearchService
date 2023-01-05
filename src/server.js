const express = require('express');
const { PORT } = require('./config/serverConfig');

const setupAndStartService = async () => {

    const app = express();
    app.listen(PORT, () => {
        console.log(`server is running on PORT ${PORT}`);
    })
}

setupAndStartService();