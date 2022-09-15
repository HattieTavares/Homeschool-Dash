const Assignments = require("../models/Grades")
const moment = require('moment')
const User = require('../models/User')

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
    getResources: (req,res)=>{
        res.render('resources.ejs', {
            user: req.user,
            page: "resources"
        })
    },
    getDashboard : async (req, res) => {
        try {
            const grades = await Assignments.find({userId:req.user.id})
            res.render("dashboard.ejs", {
                Assignments: grades,
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
    }
}