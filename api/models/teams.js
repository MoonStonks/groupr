const { db } = require("../config/firestore");
const { getEventMaxTeamSize } = require("./events");
const { modifyUserTeam } = require("./userTeams");

const getTeams = async () => {
  const snapshot = await db.collection("Teams").get();
  const teams = [];
  snapshot.forEach((doc) => {
    teams.push({ id: doc.id, ...doc.data() });
  });
  return teams;
};

const createTeam = async (body) => {
  const { name, userId, eventId } = body;
  const docRef = await db.collection("Teams").add({
    name,
    createdByUserId: userId,
    capacity: await getEventMaxTeamSize(eventId),
    eventId,
  });
  const doc = await docRef.get();
  await modifyUserTeam({
    userId: userId,
    teamId: doc.id,
    eventId: eventId,
  });
  if (!doc.exists) {
    throw new Error("Could not create team");
  } else {
    return { id: doc.id, ...doc.data() };
  }
};

const modifyTeam = async (id, body) => {
  const { name, userId } = body;
  const ref = db.collection("Teams").doc(id);
  await ref.update({
    name,
    createdByUserId: userId,
  });
  const resultRef = db.collection("Teams").doc(id);
  const doc = await resultRef.get();
  if (!doc.exists) {
    throw new Error("Could not update team");
  } else {
    return { id: doc.id, ...doc.data() };
  }
};

module.exports = {
  getTeams,
  createTeam,
  modifyTeam,
};
