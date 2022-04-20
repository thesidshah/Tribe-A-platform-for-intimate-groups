import * as todosDao from "../databases/dao/todos-dao.js";

export default (app) => {
    app.get('/', (req, res) => {
        res.send('Server works fine.')
    });
    app.get('/famjam/group1/todo', findAllSections);
    //app.post('/famjam/group1/todo', createTodo);
    app.put('/famjam/group1/todo/:sid', createTodo);

    app.put('/famjam/group1/todo/:sid/:title', deleteTodo);
    //app.delete('/famjam/group1/todo/:tid', deleteTodo);
}

const findAllSections = async (req, res) => {
    const todos = await todosDao.findAllSections()
    res.json(todos);
}

const createTodo = async (req, res) => {
    const sid = req.params.sid;
    const newTodo = req.body;
    newTodo.createdBy = "Sam";
    newTodo.assignedTo = "Ron";
    newTodo.createdOn = new Date();
        console.log(newTodo);
    const insertedTodo = await todosDao.createTodo(sid, newTodo);
    res.json(insertedTodo);
}

//TODO: going to update for sections
/*
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

*/
const deleteTodo = async (req, res) => {
    const sectionId = req.params.sid;
    const todoTitle = req.params.title;
    const status = await todosDao.deleteTodo(sectionId, todoTitle);
    res.send(status);
}