const mongoose = require('mongoose');
const fs = require('fs');
const dotenv = require('dotenv');
const Data = require('./models/data'); // Adjust the path as needed

dotenv.config();

const importData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');

        const jsonData = JSON.parse(fs.readFileSync('../jsondata.json', 'utf-8')); 

        await Data.deleteMany({}); // Clear existing data
        await Data.insertMany(jsonData);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

importData();
