const Assignments = require("../models/Assignment")
const moment = require("moment")
const User = require('../models/User')

module.exports = {
    editAssignment : (req, res) => {
        const id = req.params.id
        Assignments.find({}, (err, assignments) => {
            res.render("edit.ejs", {
                Assignments: assignments, 
                idAssignments: id,
                moment: moment,
                user: req.user,
                page: "edit",
            })
        })
    },
    deleteAssignment: (req, res) => {
        const id = req.params.id
        Assignments.findByIdAndRemove(id, err => {
            if (err) return res.status(500).send(err)
            res.redirect("/assignments")
        })
    },
    updateAssignment : (req, res) => {
        const id = req.params.id
        Assignments.findByIdAndUpdate(id,
            {
                assignment: req.body.assignment,
                unit: req.body.unit,
                topic: req.body.topic,
                grade: req.body.grade,
                subject: req.body.subject,
                userId: req.user.id
            },
            err => {
                if (err) return res.status(500).send(err)
                res.redirect("/assignments")
            })
    }
}