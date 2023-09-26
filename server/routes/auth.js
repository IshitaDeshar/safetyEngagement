// Importing the express library and creating a router instance
const express = require("express");
const router = express.Router();

// Importing the various controller functions from the auth controller
const {
  register,
  accountActivation,
  login,
  getData,
  updateUser,
  getUserId,
  getAllUsers,
  DeleteUser,
  forgotPassword,
  resetPassword,
  assignResponsibility,
} = require("../controllers/auth");
const authenticateUser = require("../middleware/auth");

// Importing various validators for user input validation
const {
  userRegisterValidator,
  userLoginValidator,
  ForgotPasswordValidator,
  ResetPasswordValidator,
  AssignResponsibilityValidator,
} = require("../validators/auth");

// Importing the validation function for running the validators
const { runValidation } = require("../validators");

// Defining various routes for the different API endpoints, and specifying which controller function should be used for each endpoint
router.post("/register", userRegisterValidator, runValidation, register);
router.get("/register/:id", getUserId);
router.get("/register", getAllUsers);
router.put("/register/:id", updateUser);
router.delete("/register/:id", DeleteUser);
router.post("/account-activation", accountActivation);
router.post("/login", userLoginValidator, runValidation, login);
router.get("/getData", getData);

// Defining routes for the forgot password, reset password and assign responsibility endpoints
router.put(
  "/forgot-password",
  ForgotPasswordValidator,
  runValidation,
  forgotPassword
);
router.put(
  "/resetPassword",
  ResetPasswordValidator,
  runValidation,
  resetPassword
);
router.put(
  "/assign-responsibility",
  AssignResponsibilityValidator,
  runValidation,
  assignResponsibility
);

module.exports = router;
