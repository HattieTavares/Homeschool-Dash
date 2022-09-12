const User = require('../models/User')
const Child = require("../models/Child")
const Term = require("../models/Term")
const Subject = require("../models/Subject")
const Assignment = require("../models/Assignment")
const moment = require("moment")

module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    getDashboard : async (req, res) => {
        try {
            const children = await Child.find({userId:req.user.id})
            const terms = await Term.find({userId:req.user.id})
            const subjects = await Subject.find({userId:req.user.id})
            res.render("dashboard.ejs", {
                user: req.user,
                Child: children,
                Term: terms,
                Subject: subjects,
                moment: moment
            })
        } catch (err) {
            if (err) return res.status(500).send(err.toString())
        }
    },
    getProfile : async (req, res) => {
        try {
            const children = await Child.find({userId:req.user.id})
            res.render("profile.ejs", { 
                user: req.user,
                Child: children,
            });
          } catch (err) {
            if (err) return res.status(500).send(err.toString())
          }
    },
    getChild : async (req, res) => {
        try {
            const children = await Child.find({ user: req.user.id });
            res.render("child.ejs", { Child: children, user: req.user });
          } catch (err) {
            if (err) return res.status(500).send(err.toString())
          }
    },
}