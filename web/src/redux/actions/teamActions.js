import { baseUrl } from "../../util/constants";
export const CREATING_TEAM = "@@/USER_ACTIONS/CREATING_TEAM";
export const SET_CURRENT_TEAM = "@@/USER_ACTIONS/SET_CURRENT_TEAM";
export const CREATING_TEAM_FAILED = "@@/USER_ACTIONS/SET_CURRENT_TEAM";
export const FETCHING_TEAM_FAILED = "@@/USER_ACTIONS/FETCHING_TEAM_FAILED";
export const FETCHING_TEAM_MEMBERS = "@@/USER_ACTIONS/FETCHING_TEAM_MEMBERS";
export const SET_TEAM_MEMBERS = "@@/USER_ACTIONS/SET_TEAM_MEMBERS";
export const FETCHING_TEAM_MEMBERS_FAILED =
  "@@/USER_ACTIONS/FETCHING_TEAM_MEMBERS_FAILED";
export const FETCHING_EVENT_TEAMS = "@@/USER_ACTIONS/FETCHING_EVENT_TEAMS";
export const SET_EVENT_TEAMS = "@@/USER_ACTIONS/SET_EVENT_TEAMS";
export const FETCHING_EVENT_TEAMS_FAILED =
  "@@/USER_ACTIONS/FETCHING_EVENT_TEAMS_FAILED";
export const JOINING_TEAM = "@@/USER_ACTIONS/JOINING_TEAM";
export const JOINING_TEAM_FAILED = "@@/USER_ACTIONS/JOINING_TEAM_FAILED";
export const LEAVING_TEAM = "@@/USER_ACTIONS/LEAVING_TEAM";
export const LEAVING_TEAM_FAILED = "@@/USER_ACTIONS/LEAVING_TEAM_FAILED";

export const createTeam = (userDetails) => async (dispatch) => {
  dispatch({ type: CREATING_TEAM, payload: true });
  try {
    const user = await fetch(`${baseUrl}/teams`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    const json = await user.json();
    dispatch({ type: SET_CURRENT_TEAM, payload: json });
  } catch (err) {
    dispatch({ type: CREATING_TEAM_FAILED, payload: true });
  } finally {
    dispatch({ type: CREATING_TEAM, payload: false });
  }
};

export const getTeamMembers = (teamId) => async (dispatch) => {
  dispatch({ type: FETCHING_TEAM_MEMBERS, payload: true });
  try {
    const user = await fetch(`${baseUrl}/teams/${teamId}/members`);
    const json = await user.json();
    dispatch({ type: SET_TEAM_MEMBERS, payload: json });
  } catch (err) {
    dispatch({ type: FETCHING_TEAM_MEMBERS_FAILED, payload: true });
  } finally {
    dispatch({ type: FETCHING_TEAM_MEMBERS, payload: false });
  }
};

export const getTeamsByEventId = (eventId) => async (dispatch) => {
  dispatch({ type: FETCHING_EVENT_TEAMS, payload: true });
  try {
    const user = await fetch(`${baseUrl}/teams/${eventId}`);
    const json = await user.json();
    dispatch({ type: SET_EVENT_TEAMS, payload: json });
  } catch (err) {
    dispatch({ type: FETCHING_EVENT_TEAMS_FAILED, payload: true });
  } finally {
    dispatch({ type: FETCHING_EVENT_TEAMS, payload: false });
  }
};

export const joinTeam = (userId, eventId, teamId) => async (dispatch) => {
  dispatch({ type: JOINING_TEAM, payload: true });
  try {
    const user = await fetch(`${baseUrl}/userteams/modify`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ userId, eventId, teamId }),
    });
    const json = await user.json();
    dispatch({ type: SET_CURRENT_TEAM, payload: json });
  } catch (err) {
    dispatch({ type: JOINING_TEAM_FAILED, payload: true });
  } finally {
    dispatch({ type: JOINING_TEAM, payload: false });
  }
};

export const leaveTeam = (userId, eventId) => async (dispatch) => {
  dispatch({ type: LEAVING_TEAM, payload: true });
  try {
    const user = await fetch(`${baseUrl}/userteams/modify`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ userId, eventId, teamId: null }),
    });
    const json = await user.json();
    dispatch({ type: SET_CURRENT_TEAM, payload: json });
  } catch (err) {
    dispatch({ type: LEAVING_TEAM_FAILED, payload: true });
  } finally {
    dispatch({ type: LEAVING_TEAM, payload: false });
  }
};
