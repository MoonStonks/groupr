const { db } = require("../config/firestore");

const createUser = async ({
  email,
  firstName,
  lastName,
  skills = [],
  interests = [],
}) => {
  const docRef = await db.collection("Users").add({
    firstName,
    lastName,
    email,
    skills,
    interests,
  });
  const doc = await docRef.get();
  if (!doc.exists) {
    throw new Error("Could not create user");
  } else {
    return { id: doc.id, ...doc.data() };
  }
};

const getUsers = async () => {
  const snapshot = await db.collection("Users").get();
  const users = [];
  snapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });
  return users;
};

const getUserProfile = async ({ email }) => {
  const usersRef = db.collection("Users").where("email", "==", email);
  const docs = await usersRef.get();
  const queryResult = [];
  docs.forEach((doc) => {
    queryResult.push(doc);
  });
  const [profile] = queryResult;
  const profileRef = db.collection("Users").doc(profile.id);
  const result = await profileRef.get();
  if (!result.exists) {
    throw new Error("Could not find user");
  } else {
    return { id: result.id, ...result.data() };
  }
};

const getUserProfileById = async (userId) => {
  const userRef = db
    .collection("Users")
    .where(admin.firestore.FieldPath.documentId(), "==", userId);
  const docs = await userRef.get();
  const queryResult = [];
  docs.forEach((doc) => {
    queryResult.push(doc);
  });
  const [profile] = queryResult;
  const profileRef = db.collection("Users").doc(profile.id);
  const result = await profileRef.get();
  if (!result.exists) {
    throw new Error("Could not find user");
  } else {
    return { id: result.id, ...result.data() };
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserProfile,
  getUserProfileById
};
