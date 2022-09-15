const Assignments = require("../models/Grades")
const moment = require("moment")
const User = require('../models/User')

module.exports = {
    editAssignment : (req, res) => {
        const id = req.params.id
        Grades.find({}, (err, grades) => {
            res.render("edit.ejs", {
                Assignments: grades, 
                idGrades: id,
                moment: moment,
                user: req.user
            })
        })
    },
    deleteAssignment: (req, res) => {
        const id = req.params.id
        Assignments.findByIdAndRemove(id, err => {
            if (err) return res.status(500).send(err)
            res.redirect("/dashboard")
        })
    },
    updateAssignment : (req, res) => {
        const id = req.params.id
        Assignments.findByIdAndUpdate(id,
            {
                assignment: req.body.assignment,
                grade: req.body.grade,
                subject: req.body.subject,
                userId: req.user.id
            },
            err => {
                if (err) return res.status(500).send(err)
                res.redirect("/dashboard")
            })
    }
}