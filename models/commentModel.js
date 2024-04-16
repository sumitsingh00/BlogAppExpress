// Import Mongoose 
const mongoose = require('mongoose')


// Route Handler 
const commentSchema = new mongoose.Schema({
    //  kis post pe commnet hai
    post:{
        type:mongoose.Schema.Types.ObjectId,// here you set the POST ID
                                            // from the POSt colection, 
                                            // so you can reference it
        ref : "Post" //reference to the post model
    },
    //   kisne like kia hai
    user: {
        type:String,
        required:true,
    },  
    // kya commnet hai  
    body: {
        type:String,
        required:true,
    }    
})


// Export 
module.exports = mongoose.model("Comment",commentSchema)