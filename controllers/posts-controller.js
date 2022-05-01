import * as PostsDao from "../databases/dao/posts-dao.js";
import * as groupsDao from "../databases/dao/groups-dao.js";

export default (app) => {
    app.get('/', (req, res) => {
        res.send('Hello WORLD !! This is server end.')
    });
    app.get('/famjam/:gid/posts', findAllPosts);
    app.post('/famjam/:gid/posts', createPosts);
    app.delete('/famjam/:gid/posts/:postsId', deletePosts);
    app.put('/famjam/:gid/posts/:postsId', updatePosts);
    app.get('/famjam/posts/user/:userId',findPostByCurrentUser)
}

const createPosts = async  (req, res) => {
    const newPosts = req.body;
    const gid = req.params.gid;
    newPosts.image = "../../images/tom.jpg";
    newPosts.handle = "tomthecat";
    newPosts.author = "Tom";
    newPosts.likes = 0;
    const insertedPosts = await PostsDao.createPosts(newPosts);
    const updateGroup = await groupsDao.addPostInGroup(insertedPosts._id, gid);
    res.json(insertedPosts);
}

const findAllPosts = async (req, res) => {
    const gid = req.params.gid;
    const group = await groupsDao.findByGroupId(gid);
    const posts = await PostsDao.findAllPosts(group.postsIds);
    res.json(posts);
}

const deletePosts = async (req, res) => {
    const postsIdToDelete = req.params.postsId;
    const gid = req.params.gid;
    const status = await PostsDao.deletePosts(postsIdToDelete);
    const statusGroup = await groupsDao.deletePostFromGroup(postsIdToDelete, gid);
    res.send(statusGroup);
}

const updatePosts = async (req, res) => {
    const postsIdToUpdate = req.params.postsId;
    const updatedPosts = req.body;
    const status = await PostsDao.updatePosts(postsIdToUpdate, updatedPosts);
    res.send(status);
}

const findPostByCurrentUser = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    const posts = await PostsDao.findPostsByUser(userId);
    res.json(posts);
}