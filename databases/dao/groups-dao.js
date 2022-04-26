import groupsModel from "../../model/groups-model.js";

export const findAllGroups = () => groupsModel.find();
export const findSectionsByGroupId = (gid) => groupsModel.findById(gid);
export const addSectionInGroup = (sid, gid) => groupsModel.updateOne({_id: gid},{"$push": {"todoSectionIds": sid} });
export const deleteSectionFromGroup = (sid, gid) => groupsModel.updateOne({_id: gid}, {"$pull": {"todoSectionIds": sid}});