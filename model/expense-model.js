import mongoose from 'mongoose';
import expenseSchema from "../databases/schemas/expense-schema.js";
const expenseModel = mongoose.model('expenseModel', expenseSchema);
export default expenseModel;