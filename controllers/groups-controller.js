import * as groupsDao from "../databases/dao/groups-dao.js";

export default (app) => {
    app.get('/', (req, res) => {
        res.send('Server works fine.')
    });
    app.get('/famjam', findAllGroups);
}

const findAllGroups = async (req, res) => {
    const groups = await groupsDao.findAllGroups()
    res.json(groups);
}