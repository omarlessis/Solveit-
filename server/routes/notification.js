const express = require("express");
const notificationController = require("../controllers/notificationController");
const router = express.Router();
const authCheck = require("../middleware/authCheck");
const populateUser = require("../middleware/populateUser");

//ALL NOTIFICATIONS
router.get("/getNotifs", authCheck, populateUser,notificationController.getAll);

module.exports = router;