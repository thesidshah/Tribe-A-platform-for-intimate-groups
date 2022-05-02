import * as groupsDao from "../databases/dao/groups-dao.js";
import * as userDao from "../databases/dao/users-dao.js";

export default (app) => {
    app.get('/', (req, res) => {
        res.send('Server works fine.')
    });
    app.get('/famjam', findAllGroups);
    app.put('/famjam/:gid', addUserToGroup);
    app.put('/famjam/:uid/:gid',deleteUserFromGroup);
    app.get('/famjam/group/:gid', findGroupById);
    app.post('/famjam', createGroup);
    app.delete('/famjam/:gid', deleteGroup);
}

const findAllGroups = async (req, res) => {
    const groups = await groupsDao.findAllGroups()
    res.json(groups);
}

const findGroupById = async (req, res) => {
    const gid = req.params.gid;
    const groups = await groupsDao.findByGroupId(gid);
    res.json(groups);
}

const createGroup = async (req, res) => {
    const group = req.body;
    group.todoSectionIds = [];
    group.postsIds = [];
    group.userIds = [];
    group.expensesIds = [];
    const createdGroup = await groupsDao.createGroup(group);
    res.json(createdGroup);
}

const deleteGroup = async (req, res) => {
    const gid = req.params.gid;
    const status = await groupsDao.deleteGroup(gid);
    res.send(status);
}

const addUserToGroup = async  (req, res) => {
    const email = req.body.email;
    const gid = req.params.gid;
    const userToAdd = await userDao.findOneUser(email);
    const updateGroup = await groupsDao.addUserInGroup(userToAdd._id, gid);
    res.json(updateGroup);
}

const deleteUserFromGroup = async (req, res) => {
    const uid = req.params.uid;
    const gid = req.params.gid;
    const statusGroup = await groupsDao.deleteUserFromGroup(uid, gid);
    res.send(statusGroup);
}