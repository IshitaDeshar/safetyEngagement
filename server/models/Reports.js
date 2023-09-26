const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const ReportSchema = new mongoose.Schema(
  {
    typeofIncident: {
      type: String,
      enum: ["UnsafeCondition", "UnsafeAct", "Environmental"],
      default: "UnsafeCondition",
      required: true,
    },
    location: {
      type: String,
      required: [true, "Please provide location"],
      maxlength: 50,
    },
    actDescription: {
      type: String,
      required: [true, "Please provide Act Description"],
      maxlength: 200,
    },
    reportedDateTime: {
      type: String,
      required: [true, "Please provide Reported Date and Time"],
      maxlength: 50,
    },
    responsiblePerson: {
      type: String,
      required: [false, "Please provide Responsible Person"],
      maxlength: 50,
    },
    reportedBy: {
      type: String,
      required: [true, "Please provide Reported Person"],
      maxlength: 50,
    },
    status: {
      type: String,
      enum: ["Completed", "Registered"],
      // default: "Completed",
      required: true,
    },
    severityCondition: {
      type: String,
      enum: ["Low", "Minor", "Major", "Critical"],
      // default: "Low",
      required: true,
    },
    photo: {
      type: String, // or String
      required: [false, "Please add a photo"],
    },
    // imageType: {
    //   type: String,
    //   required: true,
    // },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [false, "Please provide User"],
    },
  },
  { timestamps: true }
);

// module.exports = mongoose.model("Report", ReportSchema);

var Report = mongoose.model("Report", ReportSchema);
module.exports = Report;
