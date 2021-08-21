const { db } = require("../config/firestore");

const addUserToUserTeams = async (body) => {
  const { userId, eventId } = body;
  const docRef = await db.collection("UserTeams").add({
    userId,
    teamId: null,
    eventId,
  });
  const doc = await docRef.get();
  if (!doc.exists) {
    throw new Error("Could not create match");
  } else {
    return doc.data();
  }
};

const modifyUserTeam = async (body) => {
  const { userId, teamId, eventId } = body;
  const ref = db
    .collection("UserTeams")
    .where("eventId", "==", eventId)
    .where("userId", "==", userId);
  const found = [];
  const doc = await ref.get();
  doc.forEach((elem) => {
    found.push(elem);
  });
  const [toUpdate] = found;
  const refToUpdate = db.collection("UserTeams").doc(toUpdate.id);
  await refToUpdate.update({ teamId });
  const resultRef = db.collection("UserTeams").doc(toUpdate.id);
  const res = await resultRef.get();
  if (!res.exists) {
    throw new Error("Could not update match");
  } else {
    return { id: res.id, ...res.data() };
  }
};

module.exports = {
  modifyUserTeam,
  addUserToUserTeams,
};
