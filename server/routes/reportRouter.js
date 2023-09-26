// Importing necessary libraries and creating a router instance
const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// Importing various controller functions from the reports controller
const {
  createReport,
  deleteReport,
  getAllReports,
  getAllReportsSearch,
  updateReport,
  getById,
  showStats,
  individualReport,
  assignResponsibility,
} = require("../controllers/reports");

// Defining the different routes and specifying the corresponding controller function for each endpoint
router.route("/").post(createReport).get(getAllReports);
// router.route("/").get(getAllReportsSearch);
router.route("/:id").get(getById);
router.route("/:id").put(updateReport);
router.route("/:id").delete(deleteReport);
router.route("/individualReport/:id").get(individualReport);
router.route("/stats/:id").get(showStats);

module.exports = router;

//import validators
// const { AssignResponsibilityValidator } = require("../validators/auth");
// const { runValidation } = require("../validators");

// const authenticateUser = require("../middleware/auth");
