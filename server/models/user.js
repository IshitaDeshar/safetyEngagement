const mongoose = require("mongoose");
const crypto = require("crypto");
// const { Schema } = mongoose;

//user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      max: 32,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      max: 32,
    },
    address: {
      type: String,
      required: true,
      trim: true,
      max: 32,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    hashed_cpassword: {
      type: String,
      required: false,
    },
    salt: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    resetPasswordLink: {
      data: String,
      // default: "",
    },
  },
  { timestamps: true }
);

//virtual
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
    // this.hashed_cpassword = this.encryptPassword(cpassword);
  })
  .get(function () {
    return this._password;
  });

//methods
userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password; //true false
  },
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};

module.exports = mongoose.model("User", userSchema);
