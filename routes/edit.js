const express = require("express")
const router = express.Router()
const editController = require("../controllers/edit")
const { ensureAuth } = require("../middleware/auth")

// Routes for profile

// router.get("/:id", ensureAuth, editController.editProfile)
// router.post("/:id", editController.updateProfile)

// Routes for terms

// router.get("/:id", ensureAuth, editController.editTerm)
// router.get("/remove/:id", editController.deleteTerm)
// router.post("/:id", editController.updateTerm)

// Routes for subject

// router.get("/:id", ensureAuth, editController.editSubject)
// router.get("/remove/:id", editController.deleteSubject)
// router.post("/:id", editController.updateSubject)

//Routes for child

// router.get("/:id", ensureAuth, editController.editChild)
// router.get("/remove/:id", editController.deleteChild)
// router.post("/:id", editController.updateChild)

module.exports = router