const express = require("express");
const {
  createEvent,
  getAllEvents,
  registerUserInEvent,
} = require("./models/events");
const { getTeams, createTeam, modifyTeam } = require("./models/teams");
const { createUser, getUsers } = require("./models/users");
const { modifyUserTeam } = require("./models/userTeams");
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
    const pairing = await modifyUserTeam(req.body);
    res.status(200).send(pairing);
  } catch (err) {
    res.status(500).send(err);
  }
});

// get all events
app.get("/events", async (req, res) => {
  try {
    const events = await getAllEvents();
    res.status(200).send(events);
  } catch (err) {
    res.status(500).send(err);
  }
});

// get all events matching user ID
app.get("/events/:userid", async (req, res) => {
  
});

// create event
app.post("/events/create", async (req, res) => {
  try {
    const event = await createEvent(req.body);
    res.status(200).send(event);
  } catch (err) {
    res.status(500).send(err);
  }
});

// add user to event
app.post("/events/register", async (req, res) => {
  try {
    const event = await registerUserInEvent(req.body);
    res.status(200).send(event);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
