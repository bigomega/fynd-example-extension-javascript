'use strict';

require("dotenv").config();
require('./app/common/redis.init');
const config = require("./app/config")
const app = require("./app/server");
const port = config.port;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});