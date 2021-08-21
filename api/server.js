const express = require("express");
const {
  createEvent,
  getAllEvents,
  registerUserInEvent,
  getEventsByUserId,
} = require("./models/events");
const {
  getTeams,
  createTeam,
  modifyTeam,
  getTeamsByEventId,
} = require("./models/teams");
const { createUser, getUsers, getUserProfile } = require("./models/users");
const { modifyUserTeam } = require("./models/userTeams");
require("dotenv").config();
const app = express();
const port = 5000;
app.use(express.json());

app.get("/", async (req, res) => {
  res.status(200).send("ok");
});

app.post("/profile/me", async (req, res) => {
  try {
    const userProfile = await getUserProfile(req.body);
    res.status(200).send(userProfile);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET: Users
app.get("/users", async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

/**
 * POST: Create user
 *
 * firstName: string
 * lastName: string
 * email: string
 */
app.post("/users", async (req, res) => {
  try {
    const userData = await createUser(req.body);
    res.status(200).send(userData);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET: Teams
app.get("/teams", async (req, res) => {
  try {
    const teams = await getTeams();
    res.status(200).send(teams);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

/**
 * POST: Create team
 *
 * name: string
 * userId: string
 * eventId: string
 */
app.post("/teams", async (req, res) => {
  try {
    const team = await createTeam(req.body);
    res.status(200).send(team);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

/**
 * PATCH: Modify team
 *
 * name: string
 * userId: string
 * avatarUrl: string
 */
app.patch("/teams/:teamid", async (req, res) => {
  try {
    await modifyTeam(req.params.teamid, req.body);
    res.status(200).send(team);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET: Teams by event ID
app.get("/teams/:eventid", async (req, res) => {
  try {
    const teams = await getTeamsByEventId(req.params.eventid);
    res.status(200).send(teams);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

/**
 * PATCH: Add/remove user from team
 *
 * eventId: string
 * teamId: string
 */
app.patch("/userteams/modify/:userid", async (req, res) => {
  try {
    const pairing = await modifyUserTeam(req.params.userid, req.body);
    res.status(200).send(pairing);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET: Events
app.get("/events", async (req, res) => {
  try {
    const events = await getAllEvents();
    res.status(200).send(events);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET: Events by User ID
app.get("/events/:userid", async (req, res) => {
  try {
    const events = await getEventsByUserId(req.params.userid);
    res.status(200).send(events);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

/**
 * POST: Create team
 *
 * name: string
 * maxTeamSize: integer
 */
app.post("/events/create", async (req, res) => {
  try {
    const event = await createEvent(req.body);
    res.status(200).send(event);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

/**
 * POST: Register user in event
 *
 * userId: string
 * eventId: integer
 */
app.post("/events/register", async (req, res) => {
  try {
    const event = await registerUserInEvent(req.body);
    res.status(200).send(event);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
