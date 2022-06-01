const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const authCheck = require("../middleware/authCheck");
const populateUser = require("../middleware/populateUser");


router.get("/", userController.getAllUsers);
router.get("/:user_id", userController.getUser);
router.patch("/:user_id", authCheck, populateUser, userController.updateUser);

module.exports = router;
