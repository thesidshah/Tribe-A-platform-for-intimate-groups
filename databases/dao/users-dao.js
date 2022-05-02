import usersModel from "../../model/users-model.js";


export const findOneUser = (email) => usersModel.findOne({email: email});
export const findAllUsers = (userIds) => usersModel.find({_id: {"$in": userIds}});
export const createUser = (user) => usersModel.create(user);
export const updateUsers = (usersId, users) =>
   usersModel.updateOne({_id: usersId}, {$set: users})
export const findUserById = (usersId) => usersModel.findById(usersId);