const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config({path: __dirname + '/environment/.env'})

app.use(cors());

const conn = require('./db/conn');
conn()

const routes = require('./routes/router');
app.use("/api/", routes)

// Here we bind and listen the connection
app.listen(process.env.PORT, () => {
    console.log(`\n🚀 Listening on port: ${process.env.PORT}...`);
});