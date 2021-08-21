const { db } = require("../config/firestore");
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
  const docs = await ref.get();
  const eventIds = [];
  docs.forEach(doc => {
    eventIds.push(doc);
  });
  let i = 0;
  while (i < eventIds.length) {
    if ()
  }
};

const createEvent = async (body) => {
  const { name, maxTeamSize } = body;
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
