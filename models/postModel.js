// Import Mongoose 
const mongoose = require('mongoose')


// Route Handler 
const postSchema = new mongoose.Schema({
    // post ka naam
    title : {
        type : String,
        required : true
    } ,
    // post kya hai
    body : {
        type : String,
        required : true
    } ,
    // post pe kitne likes hai
    likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Like",
    }],
    // post pe kine comments hai
    comments : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Comment",
    }]
})


// Export 
module.exports = mongoose.model("Post",postSchema)