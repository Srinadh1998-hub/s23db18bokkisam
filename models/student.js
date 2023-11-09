const mongoose = require("mongoose")
const StudentSchema = mongoose.Schema({
    s_NAME: String,
    s_ID: Number,
    s_GRADE: Number
})
module.exports = mongoose.model("Student",StudentSchema)