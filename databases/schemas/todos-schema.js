import mongoose from "mongoose"
const todosSchema = mongoose.Schema({
    title:String,
    paymentDate: {type: Date ,default: new Date()},
    payee: String,
    postedOn: Date,default: new Date()}, {collection: 'expense'});
export default expenseSchema;