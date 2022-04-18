import expenseModel from "../../model/expense-model.js";
export const findAllExpenses = () => expenseModel.find();
// export const createExpense = (expense) => expenseModel.create(expense);
// export const deleteExpense = (exId) => expenseModel.deleteOne({_id: exId});
// export const updateExpense = (exId, expense) => expenseModel.updateOne({_id: exId}, {$set: expense})