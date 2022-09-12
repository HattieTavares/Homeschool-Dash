const mongoose = require("mongoose")
const moment = require("moment")
const termSchema = new mongoose.Schema( {
    number: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    userId: {
        type: String,
        required: true
    },
    child: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Child",
    },
})

module.exports = mongoose.model("Term", termSchema, "terms")