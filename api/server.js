const express = require("express");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
require("dotenv").config();
const app = express();
const port = 5000;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send("ok");
});

app.get("/users", async (req, res) => {
  try {
    const snapshot = await db.collection("users").get();
    const users = [];
    snapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/users", async (req, res) => {
  try {
    const { email, firstName, lastName } = req.body;
    const docRef = await db.collection("users").add({
      firstName,
      lastName,
      email,
    });
    const doc = await docRef.get();
    if (!doc.exists) {
      throw new Error("Could not create user");
    } else {
      res.status(200).send(doc.data());
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// list teams
app.get("/teams", async (req, res) => {
  try {
    const snapshot = await db.collection("teams").get();
    const teams = [];
    snapshot.forEach((doc) => {
      teams.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).send(teams);
  } catch (err) {
    res.status(500).send(err);
  }
});

// create teams
app.post("/teams", async (req, res) => {
  try {
    const { name, userId, capacity, eventId } = req.body;
    const docRef = await db.collection("teams").add({
      name,
      createdByUserId: userId,
      memberIds: [userId],
      capacity,
      eventId,
    });
    const doc = await docRef.get();
    if (!doc.exists) {
      throw new Error("Could not create team");
    } else {
      res.status(200).send(doc.data());
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// modify team
app.patch("/teams/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, userId, memberIds } = req.body;
    const ref = db.collection("teams").doc(id);
    await ref.update({
      name,
      createdByUserId: userId,
      memberIds,
    });
    const resultRef = db.collection("teams").doc(id);
    const doc = await resultRef.get();
    if (!doc.exists) {
      throw new Error("Could not update team");
    } else {
      res.status(200).send({ id: doc.id, ...doc.data() });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

// delete team

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
