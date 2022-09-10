const mongoose = require("mongoose")
const subjectSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true
    },
    term: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Term",
    },
    assignments: {

    }
})

module.exports = mongoose.model("HomeschoolDash", subjectSchema, "subjects")