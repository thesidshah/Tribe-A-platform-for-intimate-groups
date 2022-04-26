import * as todosDao from "../databases/dao/todos-dao.js";
import * as groupsDao from "../databases/dao/groups-dao.js";

export default (app) => {
    app.get('/', (req, res) => {
        res.send('Server works fine.')
    });
    app.get('/famjam/:gid/todo', findAllSections);
    app.post('/famjam/:gid/todo', createSection);
    app.put('/famjam/:gid/todo/:sid', createTodo);
    app.put('/famjam/:gid/todo/:sid/:tid', deleteTodo);
    app.put('/famjam/:gid/todo/update/:sid/:tid', updateTodo);
    app.delete('/famjam/:gid/todo/:sid', deleteSection);
}

const findAllSections = async (req, res) => {
    const gid = req.params.gid;
    const group = await groupsDao.findSectionsByGroupId(gid);
    const todos = await todosDao.findAllSections(group.todoSectionIds);
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
    const gid = req.params.gid;
    newSection.todos = [];
    const insertedSection = await todosDao.createSection(newSection);
    const updateGroup = await groupsDao.addSectionInGroup(insertedSection._id, gid);
    res.json(insertedSection);
}

const deleteTodo = async (req, res) => {
    const sectionId = req.params.sid;
    const todoId = req.params.tid;
    const status = await todosDao.deleteTodo(sectionId, todoId);
    res.send(status);
}

const deleteSection = async (req, res) => {
    const sectionId = req.params.sid;
    const gid = req.params.gid;
    const status = await todosDao.deleteSection(sectionId);
    const statusGroup = await groupsDao.deleteSectionFromGroup(sectionId, gid);
    res.send(statusGroup);
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