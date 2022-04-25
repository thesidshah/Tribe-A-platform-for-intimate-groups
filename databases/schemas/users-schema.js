import mongoose from "mongoose"
const usersSchema = mongoose.Schema({
        userName: String
    },
    {collection: 'users'});
export default usersSchema;