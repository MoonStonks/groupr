import { baseUrl } from "../../util/constants";
export const MODIFYING_USER = "@@/USER_ACTIONS/MODIFYING_USER";
export const SET_CURRENT_USER = "@@/USER_ACTIONS/SET_CURRENT_USER";
export const MODIFYING_USER_FAILED = "@@/USER_ACTIONS/MODIFYING_USER_FAILED";
export const FETCHING_USER = "@@/USER_ACTIONS/FETCHING_USER";
export const FETCHING_USER_FAILED = "@@/USER_ACTIONS/FETCHING_USER_FAILED";
export const FETCHING_USER_EVENTS = "@@/USER_ACTIONS/FETCHING_EVENTS";
export const SET_USER_EVENTS = "@@/USER_ACTIONS/SET_USER_EVENTS";
export const FETCHING_EVENTS_FAILED = "@@/USER_ACTIONS/FETCHING_EVENTS_FAILED";
export const LOGGING_IN = "@@/USER_ACTIONS/LOGGING_IN";
export const LOGGING_IN_FAILED = "@@/USER_ACTIONS/LOGGING_IN_FAILED";

export const modifyUser = (userId, userDetails) => async (dispatch) => {
  dispatch({ type: MODIFYING_USER, payload: true });
  try {
    const user = await fetch(`${baseUrl}/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    const json = await user.json();
    dispatch({ type: SET_CURRENT_USER, payload: json });
  } catch (err) {
    dispatch({ type: MODIFYING_USER_FAILED });
  } finally {
    dispatch({ type: MODIFYING_USER, payload: false });
  }
};

export const getUserProfile = (email) => async (dispatch) => {
  dispatch({ type: FETCHING_USER, payload: true });
  try {
    console.log(JSON.stringify({ email }));
    const user = await fetch(`${baseUrl}/profile/me`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const json = await user.json();
    dispatch({ type: SET_CURRENT_USER, payload: json });
    dispatch(getEventsByUserId(json.id));
  } catch (err) {
    dispatch({ type: FETCHING_USER_FAILED, payload: true });
  } finally {
    dispatch({ type: FETCHING_USER, payload: false });
  }
};

export const getEventsByUserId = (userId) => async (dispatch) => {
  dispatch({ type: FETCHING_USER_EVENTS, payload: true });
  try {
    const user = await fetch(`${baseUrl}/users/${userId}/events`);
    const json = await user.json();
    dispatch({ type: SET_USER_EVENTS, payload: json });
  } catch (err) {
    dispatch({ type: FETCHING_EVENTS_FAILED, payload: true });
  } finally {
    dispatch({ type: FETCHING_USER_EVENTS, payload: false });
  }
};

export const login = (email) => async (dispatch) => {
  dispatch({ type: LOGGING_IN, payload: true });
  try {
    const user = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const json = await user.json();
    dispatch({ type: SET_CURRENT_USER, payload: json });
    dispatch(getEventsByUserId(json.id));
  } catch (err) {
    dispatch({ type: LOGGING_IN_FAILED });
  } finally {
    dispatch({ type: LOGGING_IN, payload: false });
  }
};
