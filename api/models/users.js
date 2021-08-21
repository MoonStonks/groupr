const { db } = require("../config/firestore");

const createUser = async (body) => {
  const { email, firstName, lastName, skills, interests } = body;
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
    return doc.data();
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

module.exports = {
  createUser,
  getUsers,
};
