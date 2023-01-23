const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/transactions');

require('dotenv').config({path: __dirname + '/environment/.env'})

app.use(cors());
app.use('/api', routes)
const conn = require('./db/conn');
conn()

// Here we bind and listen the connection
app.listen(process.env.PORT, () => {
    console.log(`\n🚀 Listening on port: ${process.env.PORT}...`);
});