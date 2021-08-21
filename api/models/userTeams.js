const { db } = require("../config/firestore");

const addUserToUserTeams = async (body) => {
  const { userId, teamId, eventId, status } = body;
  console.log({ userId, teamId, eventId, status });
  const docRef = await db.collection("UserTeams").add({
    userId,
    teamId,
    eventId,
    status,
  });
  const doc = await docRef.get();
  if (!doc.exists) {
    throw new Error("Could not create match");
  } else {
    return doc.data();
  }
};

const modifyUserTeam = async (id, body) => {
  const { userId, teamId, eventId, status } = body;
  const bodyValues = { userId, teamId, eventId, status };
  const toUpdate = Object.keys(bodyValues).reduce((result, curr) => {
    if (bodyValues[curr] === undefined) {
      return result;
    } else {
      return {
        ...result,
        [curr]: bodyValues[curr],
      };
    }
  }, {});
  const ref = db.collection("UserTeams").doc(id);
  await ref.update({ ...toUpdate });
  const resultRef = db.collection("UserTeams").doc(id);
  const doc = await resultRef.get();
  if (!doc.exists) {
    throw new Error("Could not update match");
  } else {
    return { id: doc.id, ...doc.data() };
  }
};

module.exports = {
  modifyUserTeam,
  addUserToUserTeams,
};
