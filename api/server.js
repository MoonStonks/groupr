const express = require("express");
const cors = require("cors");
const {
  createEvent,
  getAllEvents,
  registerUserInEvent,
  getEventsByUserId,
  getEventMembers,
  getEventByEventId,
} = require("./models/events");
const {
  getTeams,
  createTeam,
  modifyTeam,
  getTeamsByEventId,
  getTeamMembers,
} = require("./models/teams");
const { createUser, getUsers, getUserProfile } = require("./models/users");
const { modifyUserTeam } = require("./models/userTeams");
require("dotenv").config();
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

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

app.post("/login", async (req, res) => {
  try {
    const userProfile = await getUserProfile(req.body);
    res.status(200).send(userProfile);
  } catch (err) {
    try {
      const newUser = await createUser(req.body);
      res.status(200).send(newUser);
    } catch (err) {
      res.status(500).send(err.message);
    }
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
 * avatarUrl: string
 * skills: Array<string>
 * interest: Array<string>
 * role: string
 * socials: Object<{
 *    twitter: string or null
 *    facebook: string or null
 *    whatsapp: string or null
 *    github: string or null
 *    linkedin: string or null
 * }>
 */
app.post("/users", async (req, res) => {
  try {
    const userData = await createUser(req.body);
    res.status(200).send(userData);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// PATCH: User (same props as above)
app.patch("/users/:userid", async (req, res) => {
  try {
    const user = await getUsers(req.params.userid, req.body);
    res.status(200).send(user);
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
    const team = await modifyTeam(req.params.teamid, req.body);
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

// GET: Members of team by team ID
app.get("/teams/:teamid/members", async (req, res) => {
  try {
    const members = await getTeamMembers(req.params.teamid);
    res.status(200).send(members);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

/**
 * PATCH: Add/remove user from team
 * (this does NOT modify the Team. See /teams patch route above)
 *
 * userId: string
 * eventId: string
 * teamId: string
 */
app.patch("/userteams/modify", async (req, res) => {
  try {
    const pairing = await modifyUserTeam(req.body);
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

// GET: Events by event ID
app.get("/events/:eventid", async (req, res) => {
  try {
    const events = await getEventByEventId(req.params.eventid);
    res.status(200).send(events);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET: Events by User ID
app.get("/users/:userid/events", async (req, res) => {
  try {
    const events = await getEventsByUserId(req.params.userid);
    res.status(200).send(events);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET: Event members by event ID
app.get("/events/:eventid/members", async (req, res) => {
  try {
    const members = await getEventMembers(req.params.eventid);
    res.status(200).send(members);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

/**
 * POST: Create team
 *
 * name: string
 * maxTeamSize: integer
 * avatarUrl: string
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
