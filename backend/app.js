const express = require('express');
const app = express();
const bodyParser = require('body-parser')
require('dotenv').config({path: __dirname + '/environment/.env'})
const conn = require('./db/conn');


app.use(bodyParser.urlencoded({ extended: false }))
const routes = require('./routes/router');
app.use("/api/", routes)

// Here we bind and listen the connection
app.listen(process.env.PORT, () => {
    conn()
    console.log(`\n🚀 Listening on port: ${process.env.PORT} ...`);
});