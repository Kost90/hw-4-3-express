const express = require("express");
const router = express.Router();
const userController = require("./userController");

router.get("/", userController.getAllusers);

router.post("/Login", userController.existUser);

router.post("/Register", userController.addNewUser);


module.exports = router;