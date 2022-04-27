import mongoose from "mongoose"
const groupsSchema = mongoose.Schema({
        groupName: String,
        admin: mongoose.Schema.Types.ObjectId,
        todoSectionIds: [{type: mongoose.Schema.Types.ObjectId, ref: 'todoSection'}],
        postsIds: [{type: mongoose.Schema.Types.ObjectId, ref: 'posts'}],
        userIds: [{type: mongoose.Schema.Types.ObjectId, ref: 'users'}],
        expensesIds: [{type: mongoose.Schema.Types.ObjectId, ref: 'expense'}],
    },
    {collection: 'group'});
export default groupsSchema;