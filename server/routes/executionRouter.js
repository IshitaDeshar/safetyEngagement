const express = require("express");
const router = express.Router();

const {
  executionReport,
  getAllExecution,
  getByIdExecution,
  individualReportExecution,
} = require("../controllers/execution");

router.route("/").post(executionReport).get(getAllExecution);
// get(getAllExecution);
router.route("/:id").get(getByIdExecution);
router.route("/individualReport/:id").get(individualReportExecution);

module.exports = router;
