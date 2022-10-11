const mongoose = require("mongoose")
const stateSchema = new mongoose.Schema( {
    state: {
        type: String,
        required: true
    },
    notify: {
        type: String,
        required: true
    },
    withdrawal: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    days: {
        type: String,
        required: true
    },
    attendance: {
        type: String,
        required: true
    },
    grades: {
        type: String,
        required: true
    },
    immunizations: {
        type: String,
        required: true
    },
    testing: {
        type: String,
        required: true
    },
    subjects: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("State", stateSchema, "states")