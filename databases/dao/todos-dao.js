import todoModel from "../../model/todos-model.js";
//export const createTodo = (todo) => todoModel.create(todo);
//export const deleteTodo = (tid) => todoModel.deleteOne({_id: tid});

export const findAllSections = () => todoModel.find();
export const deleteTodo = (sid, todoTitle) => todoModel.updateOne({_id: sid}, {"$pull": {"todos": {"title": todoTitle}}});
export const createTodo = (sid, todo) => todoModel.updateOne({_id: sid},{"$push": {"todos": todo} });