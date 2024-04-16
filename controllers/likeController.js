// Import Models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");
const { response } = require("express");

// Like a Post
exports.likePost = async (req, res) => {
  try {
    const { post, user } = req.body;

    // Like ka ek object create kia
    const like = new Like({
      post,// id of that post
      user,// any name
    });

    // like wale array me save kr liya
    const savedLike = await like.save();
    // ab tak humare pass likes bus array me hai



    // Update Post Collection basis on this
    // post me likes ko add kr diya
    // dono ke bich me relation establish kr diya
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },// post  waala likes array me (like ka id daal diya)
      { new: true }// post ka array ko update kr diya
    )
      .populate("likes")// populate actual document bejh det hai
      .exec();

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Error While Like Post",
    });
  }
};

// Unlike a Post
exports.unlikePost = async (req, res) => {
  try {
    const { post, like } = req.body;

    // find and delete the from like collection
    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });

    // update the post collection
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } },// like wali id nikaal li
      { new: true }// post ka array ko update kr diya after deleting the like
    );

    res.json({
      post: updatedPost,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Error While unLike Post",
    });
  }
};
