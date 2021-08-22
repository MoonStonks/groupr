import { baseUrl } from "../../util/constants";
export const CREATING_EVENT = "@@/USER_ACTIONS/CREATING_EVENTS";
export const SET_CURRENT_EVENT = "@@/USER_ACTIONS/SET_CURRENT_EVENT";
export const SET_NEW_EVENT = "@@/USER_ACTIONS/SET_NEW_EVENT_ID";
export const CREATING_EVENT_FAILED = "@@/USER_ACTIONS/CREATING_EVENT_FAILED";
export const REGISTER_USER = "@@/USER_ACTIONS/REGISTER_USER";
export const REGISTER_USER_FAILED = "@@/USER_ACTIONS/REGISTER_USER_FAILED";

export const FETCHING_EVENT_MEMBERS = "@@/USER_ACTIONS/FETCHING_EVENT_MEMBERS";
export const SET_EVENT_MEMBERS = "@@/USER_ACTIONS/SET_EVENT_MEMBERS";
export const FETCHING_EVENT_MEMBERS_FAILED =
  "@@/USER_ACTIONS/FETCHING_EVENT_MEMBERS_FAILED";

export const FETCH_EVENT = "@@/USER_ACTIONS/FETCH_EVENT";
export const FETCH_EVENT_FAILED = "@@/USER_ACTIONS/FETCH_EVENT_FAILED";

export const getEvent = (eventId) => async (dispatch) => {
  dispatch({ type: FETCH_EVENT, payload: true });
  try {
    const event = await fetch(`${baseUrl}/events/${eventId}`);
    const json = await event.json();
    dispatch({ type: SET_CURRENT_EVENT, payload: json });
    dispatch(getEventMembers(eventId));
  } catch (err) {
    dispatch({ type: FETCH_EVENT_FAILED, payload: true });
  } finally {
    dispatch({ type: FETCH_EVENT, payload: false });
  }
};

export const createEvent = (eventDetails) => async (dispatch) => {
  dispatch({ type: CREATING_EVENT, payload: true });
  try {
    const event = await fetch(`${baseUrl}/events/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(eventDetails),
    });
    const json = await event.json();
    dispatch({ type: SET_NEW_EVENT, payload: json });
  } catch (err) {
    dispatch({ type: CREATING_EVENT_FAILED, payload: true });
  } finally {
    dispatch({ type: CREATING_EVENT, payload: false });
  }
};

export const getEventMembers = (eventId) => async (dispatch) => {
  dispatch({ type: FETCHING_EVENT_MEMBERS, payload: true });
  try {
    const user = await fetch(`${baseUrl}/events/${eventId}/members`);
    const json = await user.json();
    dispatch({ type: SET_EVENT_MEMBERS, payload: json });
  } catch (err) {
    dispatch({ type: FETCHING_EVENT_MEMBERS_FAILED, payload: true });
  } finally {
    dispatch({ type: FETCHING_EVENT_MEMBERS, payload: false });
  }
};

export const setSelectedEvent = (event) => (dispatch) => {
  dispatch({ type: SET_CURRENT_EVENT, payload: event });
};

export const registerMember = (inviteCode, userId) => async (dispatch) => {
  dispatch({ type: REGISTER_USER, payload: true });
  try {
    const event = await fetch(`${baseUrl}/events/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ inviteCode, userId }),
    });
    const json = await event.json();
    dispatch(getEvent(json.eventId));
  } catch (err) {
    console.log(err);
    dispatch({ type: REGISTER_USER_FAILED, payload: true });
  } finally {
    dispatch({ type: REGISTER_USER, payload: false });
  }
};
