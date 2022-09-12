const express = require("express")
const router = express.Router()
const editController = require("../controllers/edit")
const { ensureAuth } = require("../middleware/auth")

//Routes for terms

router.get("/:id", ensureAuth, editController.editTerm)
//router.get("/term/remove/:id", editController.deleteTerm)
//router.post("/term/:id", editController.updateTerm)

//Routes for subject

router.get("/:id", ensureAuth, editController.editSubject)
//router.get("/subject/remove/:id", editController.deleteSubject)
//router.post("/subject/:id", editController.updateSubject)

//Routes for child

router.get("/:id", ensureAuth, editController.editChild)
//router.get("/child/remove/:id", editController.deleteChild)
//router.post("/child/:id", editController.updateChild)

//Routes for assignment

router.get("/:id", ensureAuth, editController.editAssignment)
//router.get("/assignment/remove/:id", editController.deleteAssignment)
//router.post("/assignment/:id", editController.updateAssignment)

module.exports = router