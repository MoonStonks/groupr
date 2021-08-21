const { db } = require("../config/firestore");
const { queryFirestoreWithBuckets } = require("../utils/utils");
const { addUserToUserTeams } = require("./userTeams");

const getAllEvents = async () => {
  const snapshot = await db.collection("Events").get();
  const users = [];
  snapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });
  return users;
};

const getEventsByUserId = async (id) => {
  const ref = db.collection("UserTeams").where("userId", "==", id);
  return await queryFirestoreWithBuckets(ref, "eventId", "Events");
};

const createEvent = async ({ name, maxTeamSize }) => {
  const docRef = await db.collection("Events").add({
    name,
    maxTeamSize,
  });
  const doc = await docRef.get();
  if (!doc.exists) {
    throw new Error("Could not create event");
  } else {
    return { id: doc.id, ...doc.data() };
  }
};

const registerUserInEvent = async (body) => await addUserToUserTeams(body);

const getEventMaxTeamSize = async (eventId) => {
  return 4;
};

module.exports = {
  getAllEvents,
  getEventsByUserId,
  createEvent,
  registerUserInEvent,
  getEventMaxTeamSize,
};
