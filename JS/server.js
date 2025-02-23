//const connectDB = require('./config/db');
const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/authroutes');

dotenv.config();

const app = express();

// Add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000; // Change to 3000 to match your desired port

//connectDB();

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});