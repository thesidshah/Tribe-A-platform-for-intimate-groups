import todoModel from "../../model/todos-model.js";

export const createSection = (section) => todoModel.create(section);
export const deleteSection = (sid) => todoModel.deleteOne({_id: sid});
export const findAllSections = (groupIds) => todoModel.find({ _id: { "$in": groupIds } });
export const deleteTodo = (sid, todoId) => todoModel.updateOne({_id: sid}, {"$pull": {"todos": {_id: todoId}}});
export const createTodo = (sid, todo) => todoModel.updateOne({_id: sid},{"$push": {"todos": todo} });
export const updateTodo = (sid, tid, todo) => todoModel.updateOne({_id: sid, "todos._id": tid}, {"$set": {"todos.$": todo}});