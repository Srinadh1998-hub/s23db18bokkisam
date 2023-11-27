const mongoose = require("mongoose")
const StudentSchema = mongoose.Schema({
      s_NAME: {
        type: String,
        required: true,
        minlength: 3, 
        maxlength: 20
      },
    s_ID: {
        type: Number,
        required: true,
        min: 0,
        max:4444
      },
    s_GRADE: Number
})
module.exports = mongoose.model("Student",StudentSchema)