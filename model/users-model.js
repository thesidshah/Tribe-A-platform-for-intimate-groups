import mongoose from 'mongoose';
import usersSchema from "../databases/schemas/users-schema.js";
const usersModel = mongoose.model('usersModel', usersSchema);
export default usersModel;