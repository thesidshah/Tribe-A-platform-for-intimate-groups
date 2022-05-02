import usersModel from "../../model/users-model.js";


export const findAllUsers = (userIds) => usersModel.find({_id: {"$in": userIds}});
export const findUserById = (usersId) => usersModel.findById(usersId);
export const findOneUser = (email) => usersModel.findOne({email: email});
export const createUser = (user) => usersModel.create(user);
export const updateUsers = (usersId, users) =>
   usersModel.updateOne({_id: usersId}, {$set: users})
