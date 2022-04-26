import mongoose from "mongoose";
const usersSchema = mongoose.Schema({
    firstName:{type: String, default:""},
    lastName: {type: String, default:""},
    handle: {type: String,default:""},
    birthday: {type: Date },
    location:{type: String, default:"US"},
    email: {type: String, default:"not provided" },
    profilePicture:{type: String,default:""},
    bannerPicture: {type: String,default:""},
    bio: {type: String, default:""},
    gender: {type: String, default:""},
    role: String,
    dateJoined: {type: Date}}, {collection:'users'});
export default usersSchema;
