const { StatusCodes } = require("http-status-codes");
const { CustomAPIError } = require("../errors/custom-api");
// import CustomAPIError from "./custom-api.js";

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
