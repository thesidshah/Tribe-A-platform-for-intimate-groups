import usersModel from "../../model/users-model.js";


export const findOneUser = (email) => usersModel.findOne({email: email});
export const findAllUsers = () => usersModel.find();
export const createUser = (user) => usersModel.create(user);