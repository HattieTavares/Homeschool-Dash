const mongoose = require("mongoose")
const childSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
    },
    grade: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
})

module.exports = mongoose.model("HomeschoolDash", childSchema, "children")