const Post = require("../models/postModel")

exports.createPost = async (req, res) => {
    try{
        const {title, body} = req.body;// already hum jason formate  bejh rhe hai
        

        const post = new Post({title, body });// post ka ek object bana
        const savedPost = await post.save();// post me save kr diya
        // const savedPost = await Post.create({title, body});

        res.json({
            post : savedPost
        })
    }
    catch(err){
        return res.status(400).json({
            error : "Error While Creating Post"
        })
    }
}

exports.getAllPosts = async (req, res) => {
    try{
        // const posts = await Post.find();
        const posts = await Post.find().populate("likes").populate("comments").exec();// iska mtlb bus likes and comment 
        res.json({
            data : posts,
        })
    }
    catch(err)
    {
        return res.status(400).json({
            error : "Error while Fetching Post "
        })
    }
}