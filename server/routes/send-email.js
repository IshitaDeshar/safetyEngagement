const express = require("express");
const router = express.Router();

router.post("/user/:id", requireLogin, read);
