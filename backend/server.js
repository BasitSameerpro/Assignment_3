const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("../config/db");
const userRoutes = require("../routes/userRoutes");
const cookieParser = require("cookie-parser");
const { notFound, errorHandler } = require("../middleware/errorHandler");

const app = express();

// Enable CORS for the frontend (you may need to adjust `BASE_URL` for production)
app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: "PUT,POST,GET,DELETE,PATCH,HEAD",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Connect to database
connectDB();

// API routes
app.use("/api/user/", userRoutes);

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

// Export the Express API for serverless function
module.exports = (req, res) => {
  app(req, res);
};
