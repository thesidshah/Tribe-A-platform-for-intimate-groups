import mongoose from 'mongoose';
import postsSchema from "../databases/schemas/posts-schema.js";
const postsModel = mongoose.model('postsModel', postsSchema);
export default postsModel;