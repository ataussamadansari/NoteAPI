const express = require("express");
const { signup, singin } = require("../controllers/userController");
const userRoutes = express.Router();


userRoutes.post("/signup", signup);

userRoutes.post("/signin", singin);

module.exports = userRoutes;