import mongoose from "mongoose"
const todosSchema = mongoose.Schema({
    title: String,
    description: String,
    createdBy: String,
    assignedTo: String,
    done: Boolean,
    dueDate: {type: Date},
    createdOn: {type: Date}},
    {collection: 'todoItem'});
export default todosSchema;

