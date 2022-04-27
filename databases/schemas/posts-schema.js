import mongoose from "mongoose";
const postsSchema = mongoose.Schema({
    image: String,
    post: String,
    postImage: String,
    author: String,
    handle: String,
    likes: Number,
    comments: String,
    postedBy: {
       username: String
    }}, {collection:'posts'});
export default postsSchema;