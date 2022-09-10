const mongoose = require("mongoose")
const termSchema = new mongoose.Schema( {
    number: {
        type: Number,
        required: true,
    },
    startDate: {
        type: date,
        required: true,
    },
    endDate: {
        type: date,
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
    subjects: {

    }
})

module.exports = mongoose.model("HomeschoolDash", termSchema, "terms")