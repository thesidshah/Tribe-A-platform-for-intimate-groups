import mongoose from 'mongoose';
import todosSchema from "../databases/schemas/todos-schema.js";
const todosModel = mongoose.model('todosModel', todosSchema);
export default todosModel;