const mongoose = require("mongoose")
const assignmentSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    grade: {
        type: Number,
        required: true
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
    },
    date: {
        type: Date,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Assignment", assignmentSchema, "assignments")