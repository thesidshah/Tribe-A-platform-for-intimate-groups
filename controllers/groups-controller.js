import * as groupsDao from "../databases/dao/groups-dao.js";

export default (app) => {
    app.get('/', (req, res) => {
        res.send('Server works fine.')
    });
    app.get('/famjam', findAllGroups);
    app.post('/famjam', createGroup);
    app.delete('/famjam/:gid', deleteGroup);
}

const findAllGroups = async (req, res) => {
    const groups = await groupsDao.findAllGroups()
    res.json(groups);
}

const createGroup = async (req, res) => {
    const group = req.body;
    group.todoSectionIds = [];
    group.postsIds = [];
    group.userIds = [];
    group.expensesIds = [];
    const createdGroup = await groupsDao.createGroup(group);
    console.log(createGroup);
    res.json(createdGroup);
}

const deleteGroup = async (req, res) => {
    const gid = req.params.gid;
    const status = await groupsDao.deleteGroup(gid);
    res.send(status);
}