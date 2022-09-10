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
    assignments: [
        { 
            assignment: {type: String, required: true},
            grade: {type: Number, required: true}
        }
    ]
})

module.exports = mongoose.model("HomeschoolDash", subjectSchema, "subjects")