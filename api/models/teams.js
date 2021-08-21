const { db, admin } = require("../config/firestore");
const { getEventMaxTeamSize } = require("./events");
const { modifyUserTeam, isUserRegisteredInEvent } = require("./userTeams");
const { bucketize } = require("../utils/utils");
const { getUserProfileById } = require("./users");

const getTeams = async () => {
  const snapshot = await db.collection("Teams").get();
  const teams = [];
  snapshot.forEach((doc) => {
    teams.push({ id: doc.id, ...doc.data() });
  });
  return teams;
};

const createTeam = async ({ name, userId, eventId }) => {
  if (await isUserRegisteredInEvent(userId, eventId)) {
    const docRef = await db.collection("Teams").add({
      name,
      createdByUserId: userId,
      capacity: await getEventMaxTeamSize(eventId),
      eventId,
    });
    const doc = await docRef.get();
    await modifyUserTeam(userId, {
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

const modifyTeam = async (id, { name, userId }) => {
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

const getTeamsByEventId = async (eventId) => {
  const ref = db.collection("UserTeams").where("eventId", "==", eventId);
  const docs = await ref.get();
  const queryResult = [];
  docs.forEach((doc) => {
    queryResult.push(doc.data().teamId);
  });
  const buckets = bucketize(10, queryResult);
  const teamsRef = db.collection("Teams");
  console.log(buckets);
  const teams = await Promise.all(
    buckets.map((bucket) => {
      return teamsRef
        .where(admin.firestore.FieldPath.documentId(), "in", bucket)
        .get();
    })
  );
  const teamsList = [];
  teams.forEach((querySnapshot) => {
    querySnapshot.forEach((elem) => {
      teamsList.push({ id: elem.id, ...elem.data() });
    });
  });
  return teamsList;
};

module.exports = {
  getTeams,
  createTeam,
  modifyTeam,
  getTeamsByEventId,
};
