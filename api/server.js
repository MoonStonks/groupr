const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
require("dotenv").config();
const app = express();
const port = 5000;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", async (req, res) => {
  res.status(200).send("ok");
});

app.get("/users", async (req, res) => {
  try {
    const snapshot = await db.collection("users").get();
    const users = [];
    snapshot.forEach((doc) => {
      users.push(doc.data());
    });
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/users", jsonParser, async (req, res) => {
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
    const users = [];
    snapshot.forEach((doc) => {
      users.push(doc.data());
    });
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

// list teams
app.post("/teams", async (req, res) => {
  try {
    const { name, createdByUserId, memberIds, capacity, eventId } = req.body;
    const docRef = await db.collection("teams").add({
      name,
      createdByUserId,
      memberIds,
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

// create teams
// list teams
// delete teams
// modify team

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
