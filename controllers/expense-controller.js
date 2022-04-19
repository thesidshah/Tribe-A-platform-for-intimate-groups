import * as expenseDao from "../databases/dao/expense-dao.js";

export default (app) => {
    app.get('/', (req, res) => {
        res.send('Hello WORLD !! This is server end.')
    });
    app.get('/famjam/group1/expense', findAllExpenses);
    app.post('/famjam/group1/expense', createExpense);
    app.delete('/famjam/group1/expense/:exId', deleteExpense);
}

const createExpense = async  (req, res) => {
    const newExpense = req.body;
    const insertedExpense = await expenseDao.createExpense(newExpense);
    res.json(insertedExpense);
}

const findAllExpenses = async (req, res) => {
    const expenses = await expenseDao.findAllExpenses()
    res.json(expenses);
}

const deleteExpense = async (req, res) => {
    const expenseIdToDelete = req.params.exId;
    const status = await expenseDao.deleteExpense(expenseIdToDelete);
    res.send(status);
}
