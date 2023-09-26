const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ExecutionSchema = new mongoose.Schema(
  {
    executionMessage: {
      type: String,
      required: [true, "Please provide Act Description"],
      maxlength: 200,
    },
    incidentCloseDate: {
      type: String,
      required: [true, "Please provide Incident Close Date and Time"],
      maxlength: 50,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [false, "Please provide User"],
    },
    ReportId: {
      type: mongoose.Types.ObjectId,
      ref: "Report",
      required: [false],
    },
  },
  { timestamps: true }
);

var Execution = mongoose.model("Execution", ExecutionSchema);
module.exports = Execution;
