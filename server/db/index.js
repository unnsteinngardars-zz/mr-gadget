require('dotenv').config();
const debug = require('debug')('server:server');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
mongoose.connection.on('open', () => debug('Successfully connected to database'));
mongoose.connection.on('error', () => debug('Error connecting to database'));
mongoose.connection.on('disconnect', () => debug('Disconnected from database'));
