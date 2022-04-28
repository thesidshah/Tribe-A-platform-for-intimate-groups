import * as expenseDao from "../databases/dao/expense-dao.js";
import * as groupsDao from "../databases/dao/groups-dao.js";

export default (app) => {
    app.get('/', (req, res) => {
        res.send('Hello WORLD !! This is server end.')
    });
    app.get('/famjam/:gid/expense', findAllExpenses);
    app.post('/famjam/:gid/expense', createExpense);
    app.delete('/famjam/:gid/expense/:exId', deleteExpense);
    app.put('/famjam/:gid/expense/:exId', updateExpense);

}

const createExpense = async  (req, res) => {
    const newExpense = req.body;
    const gid = req.params.gid;
    const insertedExpense = await expenseDao.createExpense(newExpense);
    const updateGroup = await groupsDao.addExpenseInGroup(insertedExpense._id, gid);
    res.json(insertedExpense);
}

const findAllExpenses = async (req, res) => {
    const gid = req.params.gid;
    const group = await groupsDao.findByGroupId(gid);
    const expenses = await expenseDao.findAllExpenses(group.expensesIds);
    res.json(expenses);
}

const deleteExpense = async (req, res) => {
    const expenseIdToDelete = req.params.exId;
    const gid = req.params.gid;
    const status = await expenseDao.deleteExpense(expenseIdToDelete);
    const statusGroup = await groupsDao.deleteExpenseFromGroup(expenseIdToDelete, gid);
    res.send(statusGroup);
}

const updateExpense = async (req, res) => {
    const expenseIdToUpdate = req.params.exId;
    const updatedExpense = req.body;
    const status = await expenseDao.updateExpense(expenseIdToUpdate, updatedExpense);
    res.send(status);
}