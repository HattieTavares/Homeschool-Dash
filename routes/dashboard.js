//Handles initial GET request for dashboard
//Handles POST method request for adding a new task

const express = require("express")
const router = express.Router()
const dashboardController = require("../controllers/dashboard")
const { ensureAuth } = require("../middleware/auth")

//add specific routes for specific tasks

router.get("/", ensureAuth, dashboardController.getDashboard)

router.get("/dashboard", ensureAuth, dashboardController.getDashboard)

router.get("/profile", ensureAuth, dashboardController.getProfile)

router.get("/child", ensureAuth, dashboardController.getChild)


module.exports = router