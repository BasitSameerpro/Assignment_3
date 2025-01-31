const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('../config/db');
const userRoutes = require('../routes/userRoutes');
const cookieParser = require('cookie-parser');
const { notFound, errorHandler } = require('../middleware/errorHandler');

const app = express();

app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: 'PUT,POST,GET,DELETE,PATCH,HEAD',
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Connect to database
connectDB();

app.use('/api/user', userRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
