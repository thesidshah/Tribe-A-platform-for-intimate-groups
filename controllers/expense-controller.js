import * as expenseDao from "../databases/dao/expense-dao.js";

export default (app) => {
    app.get('/', (req, res) => {
        res.send('Hello WORLD !! This is server end.')
    });
    app.get('/famjam/group1/expense', findAllExpenses);
}

const findAllExpenses = async (req, res) => {
    const expenses = await expenseDao.findAllExpenses()
    res.json(expenses);
}
