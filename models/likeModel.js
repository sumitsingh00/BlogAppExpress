// Import Mongoose 
const mongoose = require('mongoose')


// Route Handler 
const likeSchema = new mongoose.Schema({
    // kis post pe like hai
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "Post" //reference to the post model
    },
    // kisne like kia hai
    user: {
        type:String,
        required:true,
    },    
})


// Export 
module.exports = mongoose.model("Like",likeSchema)