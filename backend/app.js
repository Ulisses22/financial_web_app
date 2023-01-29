const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const conn = require('./db/conn');
const index = require('./routes/router');
require('dotenv').config({path: __dirname + '/environment/.env'})

// setup static paths for express and engine to use ejs files
app.set('view engine', 'ejs');
app.use("/public",express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }))
app.use("/app", index)


// Here we bind and listen the connection
app.listen(process.env.PORT, () => {
    conn()
    console.log(`\n🚀 Listening on port: ${process.env.PORT} ...`);
});