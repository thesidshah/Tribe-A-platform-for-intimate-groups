import groupsModel from "../../model/groups-model.js";

export const findAllGroups = () => groupsModel.find();
export const findByGroupId = (gid) => groupsModel.findById(gid);
export const createGroup = (group) => groupsModel.create(group);
export const deleteGroup = (gid) => groupsModel.deleteOne({_id: gid});
export const addSectionInGroup = (sid, gid) => groupsModel.updateOne({_id: gid},{"$push": {"todoSectionIds": sid} });
export const addExpenseInGroup = (exId, gid) => groupsModel.updateOne({_id: gid},{"$push": {"expensesIds": exId} });
export const addPostInGroup = (pid, gid) => groupsModel.updateOne({_id: gid},{"$push": {"postsIds": pid} });
export const deleteSectionFromGroup = (sid, gid) => groupsModel.updateOne({_id: gid}, {"$pull": {"todoSectionIds": sid}});
export const deleteExpenseFromGroup = (exId, gid) => groupsModel.updateOne({_id: gid}, {"$pull": {"expensesIds": exId}});
export const deletePostFromGroup = (pid, gid) => groupsModel.updateOne({_id: gid}, {"$pull": {"postsIds": pid}});