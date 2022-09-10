const express = require("express")
const router = express.Router()
const addController = require("../controllers/add")
const { ensureAuth } = require("../middleware/auth")

// Routes for add child

// router.post("/", addController.addChild)

// Routes for add term

// router.post("/", addController.addTerm)

// Routes for add assignment

// router.post("/", addController.addAssignment)


module.exports = router