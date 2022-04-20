import mongoose from "mongoose"
const todosSchema = mongoose.Schema({
    title: String,
    todos: [{
        title: String,
        description: String,
        createdBy: String,
        assignedTo: String,
        dueDate: {type: Date},
        createdOn: {type: Date}
        }]
    },
    {collection: 'todoSection'});
export default todosSchema;

