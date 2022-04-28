import postsModel from "../../model/posts-model.js";

export const findAllPosts = (postIds) => postsModel.find({_id: { "$in": postIds } });
export const createPosts = (posts) => postsModel.create(posts);
export const deletePosts = (postsId) => postsModel.deleteOne({_id: postsId});
export const updatePosts = (postsId, posts) => postsModel.updateOne({_id: postsId}, {$set: posts})