const mongoose = require('mongoose');
require('dotenv').config({path: __dirname + '/environment/.env'})

async function main(){
    try {
        mongoose.set('strictQuery', true);
         
        await mongoose.connect(`${process.env.DB_HOST}`);

        console.log('🔥 The connection has been established...');

    } catch (error) {
        console.log(`Error to connect: ${error}`)
    }
}

module.exports = main;


