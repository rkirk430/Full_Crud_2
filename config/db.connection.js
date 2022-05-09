//Steps to connect Express to Mongo

// Step 1: mkdir config
// Step 2: touch config/db.connection.js
// Step 3: npm install mongoose dotenv


// Step 4: Requiring a mongoose to get MongoDB Connection

const mongoose = require ('mongoose');
require('dotenv').config();  // Gives us access to .env

// Step 5: Connecting Atlas with help of our .env file

const connectionStr = process.env.MONGODB_URI;

mongoose.connect(connectionStr, () => {
    console.log('connected')
});

// Step 6: Registers if connection was successful

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}]`)
})


// Step 7: Registers if connection was unsuccessful
mongoose.connection.on('error', (error) => {
    console.log('MongoDB connection error ', error)
})


// Step 8: Registers if Disconnecting from MongoDB
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected')
})


