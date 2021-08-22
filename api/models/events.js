const { db } = require("../config/firestore");
const {
  queryFirestoreWithBuckets,
  generateRandomString,
} = require("../utils/utils");
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

const createEvent = async ({ name, maxTeamSize, avatarUrl = "" }) => {
  const docRef = await db.collection("Events").add({
    name,
    maxTeamSize,
    avatarUrl,
    inviteCode: generateRandomString(6),
  });
  const doc = await docRef.get();
  if (!doc.exists) {
    throw new Error("Could not create event");
  } else {
    return { id: doc.id, ...doc.data() };
  }
};

const registerUserInEvent = async ({ inviteCode, ...body }) => {
  const eventRef = await db
    .collection("Events")
    .where("inviteCode", "==", inviteCode);
  await addUserToUserTeams(body);
};

const getEventMaxTeamSize = async (eventId) => {
  const docRef = db.collection("Events").doc(eventId);
  const doc = await docRef.get();
  return doc.data().maxTeamSize;
};

const getEventMembers = async (eventId) => {
  const ref = db.collection("UserTeams").where("eventId", "==", eventId);
  return await queryFirestoreWithBuckets(ref, "userId", "Users");
};

module.exports = {
  getAllEvents,
  getEventsByUserId,
  createEvent,
  registerUserInEvent,
  getEventMaxTeamSize,
  getEventMembers,
};
