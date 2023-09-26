// import BadRequestError from "./badRequest";
// import UnAuthenticatedError from "./unauthenticated";
// export { BadRequestError, UnAuthenticatedError };

const { BadRequestError, UnAuthenticatedError } = require("../errors");
module.exports = {
  BadRequestError,
  UnAuthenticatedError,
};
