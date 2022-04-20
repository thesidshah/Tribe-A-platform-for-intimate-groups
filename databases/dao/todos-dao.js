import todoModel from "../../model/todos-model.js";
export const findAllTodos = () => todoModel.find();
export const createTodo = (todo) => todoModel.create(todo);
export const deleteTodo = (tid) => todoModel.deleteOne({_id: tid});