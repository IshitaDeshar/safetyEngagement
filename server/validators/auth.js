const { check } = require("express-validator");

exports.userRegisterValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("phone").isMobilePhone().withMessage("Phone no is required"),
  check("address").not().isEmpty().withMessage("Address is required"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long"),
  check("cpassword")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long"),
];

exports.userLoginValidator = [
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long"),
];

exports.ForgotPasswordValidator = [
  check("email")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("Must be a valid email address"),
];

exports.ResetPasswordValidator = [
  check("newPassword")
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long"),
];

exports.AssignResponsibilityValidator = [
  check("email")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("Must be a valid email address"),
];
