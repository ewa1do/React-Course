const mongoose = require('mongoose');
require('dotenv').config();

const { DATABASE_URL, DATABASE_USER, DATABASE_PASSWORD } = process.env;

const DATABASE_CONNECTION_URI = DATABASE_URL.replace(
  '<USER>',
  DATABASE_USER
).replace('<PASSWORD>', DATABASE_PASSWORD);

const dbConnection = async () => {
  try {
    await mongoose.connect(DATABASE_CONNECTION_URI);

    console.log('Database Connection Successful');
  } catch (error) {
    console.log(error);
    throw new Error('There was an issue initializing database');
  }
};

module.exports = dbConnection;
