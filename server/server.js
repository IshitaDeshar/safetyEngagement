// Require necessary modules
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

// Load environment variables from .env file
require("dotenv").config();

// Create Express app instance
const app = express();

// Connect to MongoDB database using mongoose
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error", err));

// Import route handlers from separate files
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const reportRoutes = require("./routes/reportRouter");
const executionRoutes = require("./routes/executionRouter");

//app middlewares
app.use(morgan("dev"));
// app.use(bodyParser.json());

// Increase the payload size limit to 50MB (or your desired limit)
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

//app.use(cors()); //allows all origins// Enable cross-origin resource sharing for development environment
if ((process.env.NODE_ENV = "development")) {
  app.use(cors({ origin: `http://localhost:3000` }));
}

// Mount route handlers on paths
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/executions", executionRoutes);

// Start the server on the specified port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
