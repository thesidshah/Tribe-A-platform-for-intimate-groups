import mongoose from "mongoose"
const expenseSchema = mongoose.Schema({
    title:String,
    amount: { type: Number, default: 0 },
    paymentDate: {type: Date ,default: +new Date()},
    payee: String,
    postedOn: Date}, {collection: 'expense'});
export default expenseSchema;