const User = require('../models/User')
const Child = require("../models/Child")
const Term = require("../models/Term")
const Subject = require("../models/Subject")
const Assignment = require("../models/Assignment")
const moment = require("moment")

module.exports = {
    addChild: async (req,res) => {
        const addNewChild = new Child(
            {
                name: req.body.name,
                grade: req.body.grade,
                parent: req.body.parent,
                userId: req.user.id
            }
        )
        try {
            await addNewChild.save()
            console.log(addNewChild)
            res.redirect("/profile")
        } catch (err) {
            if (err) return res.status(500).send(err.toString())
        }
    },

    addTerm: async (req,res) => {
        const addNewTerm = new Term(
            {
                number: req.body.number,
                startDate: req.body.startDate,
                name: req.body.endDate,
                child: req.body.child,
                moment: moment,
                userId: req.user.id   
            }
        )
        try {
            await addNewTerm.save()
            console.log(addNewTerm)
            res.redirect("/child")
        } catch (err) {
            if (err) return res.status(500).send(err.toString())
        }
    },

    addSubject: async (req,res) => {
        const addNewSubject = new Subject(
            {
                name: req.body.name,
                term: req.body.term,
                userId: req.user.id 
            }
        )
        try {
            await addNewSubject.save()
            console.log(addNewSubject)
            res.redirect("/child")
        } catch (err) {
            if (err) return res.status(500).send(err.toString())
        }
    },

    addAssignment: async (req,res) => {
        const addNewAssignment = new Assignment(
            {
                name: req.body.name,
                grade: req.body.grade,
                subject: req.body.subject,
                moment: moment,
                userId: req.user.id
            }
        )
        try {
            await addNewAssignment.save()
            console.log(addNewAssignment)
            res.redirect("/child")
        } catch (err) {
            if (err) return res.status(500).send(err.toString())
        }
    },
}