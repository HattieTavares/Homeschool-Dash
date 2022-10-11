const Assignments = require("../models/Assignment")
const moment = require('moment')
const State = require("../models/State")
const User = require('../models/User')
const nodemailer = require("nodemailer")
const { mainMail } = require("../middleware/mailer")
const { generatePdf } = require("../middleware/pdf")

module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs', {
            user: req.user,
            page: "index"
        })
    },
    getAbout: (req,res)=>{
        res.render('about.ejs', {
            user: req.user,
            page: "about"
        })
    },
    getContact: (req,res)=>{
        res.render('contact.ejs', {
            user: req.user,
            page: "contact"
        })
    },
    postContact: async (req, res, next) => {
        const { yourname, youremail, yourmessage } = req.body;
        try {
          await mainMail(yourname, youremail, yourmessage);
          res.send("Message sent successfully!");
        } catch (error) {
          res.send("Message could not be sent.");
        }
    },
    getResources: async (req,res)=>{
        try {
            const states = await State.find({})
            res.render('resources.ejs', {
                user: req.user,
                States: states,
                page: "resources"
            })
        } catch (err) {
            if (err) return res.status(500).send(err.toString())
        } 
    },
    getState: async (req,res)=>{
        try {
            const { stateId } = req.params
            const state = await State.findById(stateId);
            res.json(state)
        } catch (err) {
            if (err) return res.status(500).send(err.toString())
        } 
    },
    getDashboard : async (req, res) => {
        try {
            const assignments = await Assignments.find({userId:req.user.id})
            res.render("dashboard.ejs", {
                Assignments: assignments,
                moment: moment,
                user: req.user,
                page: "dashboard",
            })
        } catch (err) {
            if (err) return res.status(500).send(err.toString())
        }
    },
    addAssignment: async (req, res) => {
        const assignment = new Assignments(
            {
                assignment: req.body.assignment,
                unit: req.body.unit,
                topic: req.body.topic,
                grade: req.body.grade,
                subject: req.body.subject,
                userId: req.user.id,
            }
        )
        try {
            await assignment.save()
            res.redirect("/dashboard")
        } catch(err) {
            if (err) return res.status(500).send(err)
            res.redirect("/dashboard")
        }
    },
    getAssignments: async (req, res) => {
        try {
            const assignments = await Assignments.find({userId:req.user.id})
            res.render("assignments.ejs", {
                Assignments: assignments,
                moment: moment,
                user: req.user,
                page: "assignments",
            })
        } catch (err) {
            if (err) return res.status(500).send(err.toString())
        }
    },
    getPdf: async (req, res) => {
        try {
            await generatePdf()
            const assignments = await Assignments.find({userId:req.user.id})
            res.render("pdf.ejs", {
                Assignments: assignments,
                moment: moment,
                user: req.user,
                page: "pdf",
            })
        } catch (err) {
            if (err) return res.status(500).send(err.toString())
        }
    },
}