const { db } = require("../config/firestore");
const { getEventMaxTeamSize } = require("./events");
const { modifyUserTeam, isUserRegisteredInEvent } = require("./userTeams");
const { queryFirestoreWithBuckets } = require("../utils/utils");

const getTeams = async () => {
  const snapshot = await db.collection("Teams").get();
  const teams = [];
  snapshot.forEach((doc) => {
    teams.push({ id: doc.id, ...doc.data() });
  });
  return teams;
};

const createTeam = async ({ name, userId, eventId, avatarUrl = "" }) => {
  if (await isUserRegisteredInEvent(userId, eventId)) {
    const docRef = await db.collection("Teams").add({
      name,
      createdByUserId: userId,
      capacity: await getEventMaxTeamSize(eventId),
      eventId,
      avatarUrl,
    });
    const doc = await docRef.get();
    await modifyUserTeam({
      userId,
      teamId: doc.id,
      eventId: eventId,
    });
    if (!doc.exists) {
      throw new Error("Could not create team");
    } else {
      return { id: doc.id, ...doc.data() };
    }
  } else {
    throw new Error("User is not registered in this event!");
  }
};

const modifyTeam = async (id, { name, createdByUserId }) => {
  const ref = db.collection("Teams").doc(id);
  const json = { createdByUserId, name };
  const filtered = Object.keys(json).reduce((result, curr) => {
    if (json[curr] === null || json[curr] === undefined) {
      return result;
    } else {
      return {
        ...result,
        [curr]: json[curr],
      };
    }
  }, {});
  await ref.update(filtered);
  const resultRef = db.collection("Teams").doc(id);
  const doc = await resultRef.get();
  if (!doc.exists) {
    throw new Error("Could not update team");
  } else {
    return { id: doc.id, ...doc.data() };
  }
};

const getTeamsByEventId = async (eventId) => {
  const ref = db.collection("UserTeams").where("eventId", "==", eventId);
  const teams = await queryFirestoreWithBuckets(ref, "teamId", "Teams");
  return await Promise.all(
    teams.map(async (team) => {
      const members = await getTeamMembers(team.id);
      return { ...team, members };
    })
  );
};

const getTeamMembers = async (teamId) => {
  const ref = db.collection("UserTeams").where("teamId", "==", teamId);
  return await queryFirestoreWithBuckets(ref, "userId", "Users");
};

module.exports = {
  getTeams,
  createTeam,
  modifyTeam,
  getTeamsByEventId,
  getTeamMembers,
};
