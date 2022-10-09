const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const mainController = require('../controllers/main')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const { mainMail } = require("../middleware/mailer")

router.get('/', mainController.getIndex)
router.get("/about", mainController.getAbout)
router.get("/contact", mainController.getContact)
router.post("/contact", mainController.postContact)
router.get("/resources", mainController.getResources)
router.route("resources/stateId", mainController.getState)
router.get("/assignments", mainController.getAssignments)

router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router