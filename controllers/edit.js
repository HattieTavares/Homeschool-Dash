const User = require('../models/User')
const Child = require("../models/Child")
const Term = require("../models/Term")
const Subject = require("../models/Subject")
const Assignment = require("../models/Assignment")
const moment = require("moment")

module.exports = {
    editProfile: (req, res) => {
        const id = req.params.id
        User.find({}, (err, user) => {
            res.render("editprofile.ejs", {
                user:req.user,
                idProfile: id,
            })
        })
    },

    updateProfile: (req, res) => {
        const id = req.params.id
        DrivingHours.findByIdAndUpdate(id,
            {
                userName: username,
                userId: req.user.id 
            },
            err => {
                if (err) return res.status(500).send(err)
                res.redirect("/profile")
            })
    },

    editTerm: (req, res) => {
        const id = req.params.id
        Term.find({}, (err, term) => {
            res.render("editTerm.ejs", {
                Term: term,
            })
        })
    },

    updateTerm: (req, res) => {
        const id = req.params.id
        Term.findByIdAndUpdate(id,
            {
                number: req.body.number,
                startDate: req.body.startDate,
                name: req.body.endDate,
                child: req.body.child,
                moment: moment,
                userId: req.user.id
            },
            err => {
                if (err) return res.status(500).send(err)
                res.redirect("/child")
            })
    },

    deleteTerm: (req, res) => {
        const id = req.params.id
        Term.findByIdAndRemove(id, err => {
            if (err) return res.status(500).send(err)
            res.redirect("/child")
        })
    },

    editSubject: (req, res) => {
        const id = req.params.id
        Subject.find({}, (err, subject) => {
            res.render("editsubject.ejs", {
                Subject: subject,
            })
        })
    },

    deleteSubject: (req, res) => {
        const id = req.params.id
        Subject.findByIdAndRemove(id, err => {
            if (err) return res.status(500).send(err)
            res.redirect("/child")
        })
    },

    editAssignment: (req, res) => {
        const id = req.params.id
        Assignment.find({}, (err, assignment) => {
            res.render("editassignment.ejs", {
                Assignment: assignment,
            })
        })
    },

    updateAssignment: (req, res) => {
        const id = req.params.id
        Assignment.findByIdAndUpdate(id,
            {
                name: req.body.name,
                grade: req.body.grade,
                subject: req.body.subject,
                moment: moment,
                userId: req.user.id
            },
            err => {
                if (err) return res.status(500).send(err)
                res.redirect("/child")
            })
    },

    deleteAssignment: (req, res) => {
        const id = req.params.id
        Assignment.findByIdAndRemove(id, err => {
            if (err) return res.status(500).send(err)
            res.redirect("/child")
        })
    },

    editChild: (req, res) => {
        const id = req.params.id
        Child.find({}, (err, child) => {
            res.render("editchild.ejs", {
                Child: child,
            })
        })
    },

    updateChild: (req, res) => {
        const id = req.params.id
        Child.findByIdAndUpdate(id,
            {
                name: req.body.name,
                grade: req.body.grade,
                parent: req.body.parent,
                userId: req.user.id
            },
            err => {
                if (err) return res.status(500).send(err)
                res.redirect("/profile")
            })
    },

    deleteChild: (req, res) => {
        const id = req.params.id
        Child.findByIdAndRemove(id, err => {
            if (err) return res.status(500).send(err)
            res.redirect("/profile")
        })
    },
}