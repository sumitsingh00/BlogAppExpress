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
        type : mongoose.Schema.Types.ObjectId,// here you set the liked ID
                                              // from the Likes colection, 
                                              // so you can reference it
        ref : "Like",
    }],
    // post pe kine comments hai
    comments : [{
        type : mongoose.Schema.Types.ObjectId,// here you set the comments ID
                                                // from the comments colection, 
                                                // so you can reference it
        ref : "Comment",
    }]
})


// Export 
module.exports = mongoose.model("Post",postSchema)