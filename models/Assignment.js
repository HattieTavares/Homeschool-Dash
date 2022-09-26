const mongoose = require("mongoose")
const assignmentSchema = new mongoose.Schema( {
    date: {
        type: Date,
        default: Date.now
    },
    assignment: {
        type: String,
        required: true
    },
    unit: {
        type: String,
    },
    topic: {
        type: String,
    },
    subject: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Assignment", assignmentSchema, "assignment")