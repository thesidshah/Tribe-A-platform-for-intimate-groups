import * as usersDao from "../databases/dao/users-dao.js";
import * as groupsDao from "../databases/dao/groups-dao.js";

export default (app) => {
    app.get('/', (req, res) => {
        res.send('Hello WORLD !! This is server end.')
    });
    app.get('/famjam/users/:gid', findAllUsers);
    app.post('/famjam/users', createUser);
    app.get('/famjam/users/:email', findOneUser);
    app.put('/famjam/users/:usersId', updateUsers);
}

const findAllUsers = async (req, res) => {
    const gid = req.params.gid;
    const group = await groupsDao.findByGroupId(gid);
    console.log(group);
    const users = await usersDao.findAllUsers(group.userIds);
    res.json(users);
}

const findOneUser = async (req, res) => {
    const users = await usersDao.findOneUser( req.params.email);
    res.json(users);
}

const createUser = async  (req, res) => {
    const newUser = req.body;
    const insertedUser = await usersDao.createUser(newUser);
    res.json(insertedUser);
}

const updateUsers = async (req, res) => {
    const usersIdToUpdate = req.params.usersId;
    const updatedUsers = req.body;
    const status = await usersDao.updateUsers(usersIdToUpdate, updatedUsers);
    res.send(status);
}
