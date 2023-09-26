// Import required modules and models
const { StatusCodes } = require("http-status-codes");
const moment = require("moment");
const Execution = require("../models/Execution");

// function to create an execution report
exports.executionReport = async (req, res, props) => {
  console.log("hiii");
  const { executionMessage, incidentCloseDate } = req.body;

  if (!executionMessage || !incidentCloseDate) {
  }
  const execution = await Execution.create(req.body);
  res.status(StatusCodes.CREATED).json({ execution });
};

//function to get all Execution documents
exports.getAllExecution = async (req, res) => {
  let executions;
  try {
    executions = await Execution.find({});
  } catch (err) {
    console.log(err);
  }

  if (!executions) {
    return res.status(404).json({ message: "no reports fornd" });
  }
  return res.status(200).json({ executions });
};

// function to get a specific Execution document by ID
exports.getByIdExecution = async (req, res, next) => {
  const id = req.params.id;
  let execution;
  try {
    execution = await Execution.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!execution) {
    return res.status(404).json({ message: "No reports found" });
  }
  return res.status(200).json({ execution });
};

// function to get an individual Execution report
exports.individualReportExecution = async (req, res, next) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const reportIndividualExecution = await Execution.findById({ _id: id });
    console.log(reportIndividualExecution);
    res.status(201).json(reportIndividualExecution);
  } catch (error) {
    res.status(404).json(error);
  }
};
