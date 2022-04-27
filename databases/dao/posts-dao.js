import postsModel from "../../model/posts-model.js";


export const findAllPosts = () => postsModel.find();
export const createPosts = (posts) => postsModel.create(posts);
export const deletePosts = (postsId) => postsModel.deleteOne({_id: postsId});
export const updatePosts = (postsId, posts) => postsModel.updateOne({_id: postsId}, {$set: posts})
