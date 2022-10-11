//Handles initial GET request for dashboard
//Handles POST method request for adding a new task

const express = require("express")
const router = express.Router()
const mainController = require("../controllers/main")
const { ensureAuth } = require("../middleware/auth")

//add specific routes for specific tasks
router.get("/", ensureAuth, mainController.getDashboard)
router.post("/", mainController.addAssignment)
router.get("/pdf", mainController.getPdf)

module.exports = router