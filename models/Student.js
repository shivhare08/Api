const  mongoose  = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 5
    },
    phone : {
        type : Number,
        required : true,
        unique: true,
        min : [10],
    },
})

const StudentModel = mongoose.model('StudentApi',StudentSchema)
module.exports = StudentModel