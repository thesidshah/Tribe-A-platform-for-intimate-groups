import * as PostsDao from "../databases/dao/posts-dao.js";

export default (app) => {
    app.get('/', (req, res) => {
        res.send('Hello WORLD !! This is server end.')
    });
    app.get('/famjam/group1', findAllPosts);
    app.post('/famjam/group1', createPosts);
    app.delete('/famjam/group1/:postsId', deletePosts);
    app.put('/famjam/group1/:postsId', updatePosts);
}

const createPosts = async  (req, res) => {
    const newPosts = req.body;
    newPosts.image = "../../images/tom.jpg";
    newPosts.handle = "tomthecat";
    newPosts.author = "Tom";
    newPosts.likes = 0;
    const insertedPosts = await PostsDao.createPosts(newPosts);
    res.json(insertedPosts);
}

const findAllPosts = async (req, res) => {
    const posts = await PostsDao.findAllPosts()
    res.json(posts);
}

const deletePosts = async (req, res) => {
    const postsIdToDelete = req.params.postsId;
    const status = await PostsDao.deletePosts(postsIdToDelete);
    res.send(status);
}

const updatePosts = async (req, res) => {
    const postsIdToUpdate = req.params.postsId;
    const updatedPosts = req.body;
    const status = await PostsDao.updatePosts(postsIdToUpdate, updatedPosts);
    res.send(status);
}
