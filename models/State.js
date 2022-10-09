const mongoose = require("mongoose")
const stateSchema = new mongoose.Schema( {
    state: {
        type: String,
        required: true
    },
    notify: {
        type: Boolean,
        required: true
    },
    withdrawal: {
        type: Boolean,
        required: true
    },
    instructor: {
        type: Boolean,
        required: true
    },
    days: {
        type: Boolean,
        required: true
    },
    attendance: {
        type: Boolean,
        required: true
    },
    grades: {
        type: Boolean,
        required: true
    },
    immunizations: {
        type: Boolean,
        required: true
    },
    testing: {
        type: Boolean,
        required: true
    },
    subjects: {
        type: Boolean,
        required: true
    },
})

module.exports = mongoose.model("State", stateSchema, "states")