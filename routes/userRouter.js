var express = require('express');
var { addUser, checkUser } = require("../controller/userController");


var usersRouter = express.Router();

usersRouter.post("/register",addUser)
usersRouter.get("/login",checkUser)


module.exports = usersRouter