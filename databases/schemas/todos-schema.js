import mongoose from "mongoose"
const todosSchema = mongoose.Schema({
    title: String,
    description: String,
    createdBy: String,
    assignedTo: String,
    done: Boolean,
    dueDate: String,
    createdOn: String},
    {collection: 'todoItem'});
export default todosSchema;