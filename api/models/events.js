const { db, admin } = require("../config/firestore");
const { bucketize } = require("../utils/utils");
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
  docs.forEach((doc) => {
    eventIds.push(doc.data().eventId);
  });
  const buckets = bucketize(10, eventIds);
  const eventsRef = db.collection("Events");
  const events = await Promise.all(
    buckets.map((bucket) => {
      return eventsRef
        .where(admin.firestore.FieldPath.documentId(), "in", bucket)
        .get();
    })
  );
  const eventList = [];
  events.flat(Infinity).forEach((querySnapshot) => {
    querySnapshot.forEach((elem) => {
      eventList.push({ id: elem.id, ...elem.data() });
    });
  });
  return eventList;
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
