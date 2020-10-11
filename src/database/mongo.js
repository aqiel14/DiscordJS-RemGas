const mongoose = require('mongoose')
require('dotenv').config()
const DB_PATH = process.env.DB_PATH;


module.exports = {
    init: () => {
        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family:4
        };

        mongoose.connect("mongodb+srv://admin:admin@cluster0.td7lq.mongodb.net/tugas?retryWrites=true&w=majority", dbOptions);
        mongoose.set('useFindAndModify',false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {
            console.log("Mongoose has succesfully connected!");
        });
        mongoose.connection.on('err',err => {
            console.log(`Mongoose connection error: \n${err.stack}`);
        });
        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose connection lost');
        });
    }
}