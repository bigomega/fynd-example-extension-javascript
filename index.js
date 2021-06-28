'use strict';

require("dotenv").config();
const app = require("./app/server");
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});