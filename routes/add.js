const express = require("express")
const router = express.Router()
const addController = require("../controllers/add")
const { ensureAuth } = require("../middleware/auth")

// Routes for add child

router.post("/addchild", addController.addChild)

// Routes for add term

router.post("/addterm", addController.addTerm)

// Routes for add assignment

router.post("/addassignment", addController.addAssignment)


module.exports = router