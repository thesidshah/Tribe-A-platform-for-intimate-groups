import mongoose from "mongoose";
const expenseSchema = mongoose.Schema({
    title:String,
    amount: { type: Number, default: 0 },
    paymentDate: {type: Date },
    payee: String,
    postedOn: {type: Date}}, {collection:'expense'});
export default expenseSchema;