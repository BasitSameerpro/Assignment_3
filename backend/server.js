const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');  // Fix path
const userRoutes = require('./routes/userRoutes');  // Fix path
const cookieParser = require('cookie-parser');
const { notFound, errorHandler } = require('./middleware/errorHandler');  // Fix path

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

// Export the Express API
module.exports = app;