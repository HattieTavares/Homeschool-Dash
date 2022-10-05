const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const dashboardController = require('../controllers/dashboard')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const { mainMail } = require("../middleware/mailer")

router.get('/', dashboardController.getIndex)
router.get("/about", dashboardController.getAbout)
router.get("/contact", dashboardController.getContact)
router.post("/contact", dashboardController.postContact)
router.get("/resources", dashboardController.getResources)
router.get("/assignments", dashboardController.getAssignments)

router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router