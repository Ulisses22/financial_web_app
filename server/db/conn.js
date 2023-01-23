const mongoose = require('mongoose');

async function main(){
    try {
        mongoose.connect('strictQuery', true);
         
        await mongoose.connect('');

        console.log('The connection has been established ...');

    } catch (error) {
        console.log(`Error to connect: ${error}`)
    }
}

module.exports = main;