import mongoose from 'mongoose';
import groupsSchema from "../databases/schemas/groups-schema.js";
const groupsModel = mongoose.model('groupsModel', groupsSchema);
export default groupsModel;