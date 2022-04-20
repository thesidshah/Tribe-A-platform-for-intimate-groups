import * as todosDao from "../databases/dao/todos-dao.js";

export default (app) => {
    app.get('/', (req, res) => {
        res.send('Server works fine.')
    });
    app.get('/famjam/group1/todo', findAllTodos);
    app.post('/famjam/group1/todo', createTodo);
    app.delete('/famjam/group1/todo/:tid', deleteTodo);
}

const findAllTodos = async (req, res) => {
    const todos = await todosDao.findAllTodos()
    res.json(todos);
}

const createTodo = async (req, res) => {
    const newTodo = req.body;
    console.log(req.body);
    newTodo.createdBy = "Sam";
    newTodo.assignedTo = "Ron";
    newTodo.done = false;
    newTodo.createdOn = new Date();
    const insertedTodo = await todosDao.createTodo(newTodo);
    res.json(insertedTodo);
}

const deleteTodo = async (req, res) => {
    const todoIdToDelete = req.params.tid;
    const status = await todosDao.deleteTodo(todoIdToDelete);
    res.send(status);
}