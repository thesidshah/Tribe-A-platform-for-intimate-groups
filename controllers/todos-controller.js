import * as todosDao from "../databases/dao/todos-dao.js";

export default (app) => {
    app.get('/', (req, res) => {
        res.send('Server works fine.')
    });
    app.get('/famjam/group1/todo', findAllSections);
    app.post('/famjam/group1/todo', createSection);
    app.put('/famjam/group1/todo/:sid', createTodo);
    app.put('/famjam/group1/todo/:sid/:tid', deleteTodo);
    app.put('/famjam/group1/todo/update/:sid/:tid', updateTodo);
    app.delete('/famjam/group1/todo/:sid', deleteSection);
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
    const insertedTodo = await todosDao.createTodo(sid, newTodo);
    res.json(insertedTodo);
}

const createSection = async (req, res) => {
    const newSection = req.body;
    newSection.todos = [];
    const insertedTodo = await todosDao.createSection(newSection);
    res.json(insertedTodo);
}

const deleteTodo = async (req, res) => {
    const sectionId = req.params.sid;
    const todoId = req.params.tid;
    const status = await todosDao.deleteTodo(sectionId, todoId);
    res.send(status);
}

const deleteSection = async (req, res) => {
    const sectionId = req.params.sid;
    const status = await todosDao.deleteSection(sectionId);
    res.send(status);
}

const updateTodo = async (req, res) => {
    const todoId = req.params.tid;
    const sectionId = req.params.sid;
    console.log(todoId, sectionId);
    const updatedTodo = req.body;
    console.log(req.body);
    const status = await todosDao.updateTodo(sectionId, todoId, updatedTodo);
    res.send(status);
}