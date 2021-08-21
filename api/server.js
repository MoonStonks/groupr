const express = require("express");
const { getTeams, createTeam, modifyTeam } = require("./models/teams");
const { createUser, getUsers } = require("./models/users");
const { addUserToUserTeams } = require("./models/userTeams");
require("dotenv").config();
const app = express();
const port = 5000;
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send("ok");
});

app.get("/users", async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/users", async (req, res) => {
  try {
    const userData = await createUser(req.body);
    res.status(200).send(userData);
  } catch (err) {
    res.status(500).send(err);
  }
});

// list teams
app.get("/teams", async (req, res) => {
  try {
    const teams = await getTeams();
    res.status(200).send(teams);
  } catch (err) {
    res.status(500).send(err);
  }
});

// create team
app.post("/teams", async (req, res) => {
  try {
    const team = await createTeam(req.body);
    res.status(200).send(team);
  } catch (err) {
    res.status(500).send(err);
  }
});

// modify team
app.patch("/teams/:id", async (req, res) => {
  try {
    await modifyTeam(req.params.id, req.body);
    res.status(200).send(team);
  } catch (err) {
    res.status(500).send(err);
  }
});

// modify user <-> team matching
app.patch("/userteams/:id", async (req, res) => {
  try {
    const pairing = await addUserToUserTeams(req.params.id, req.body);
    res.status(200).send(pairing);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/events/register", async (req, res) => {

});

// get all users in an event

// get users by team ID

// create event
// get all events
// get event by user ID
// patch event

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
