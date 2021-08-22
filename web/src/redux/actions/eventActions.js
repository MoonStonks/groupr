import { baseUrl } from "../../util/constants";
export const CREATING_EVENT = "@@/USER_ACTIONS/CREATING_EVENTS";
export const SET_CURRENT_EVENT = "@@/USER_ACTIONS/SET_CURRENT_EVENTS";
export const CREATING_EVENT_FAILED = "@@/USER_ACTIONS/SET_CURRENT_EVENTS";
export const FETCHING_EVENTS = "@@/USER_ACTIONS/FETCHING_EVENTS";
export const SET_USER_EVENTS = "@@/USER_ACTIONS/SET_USER_EVENTS";
export const FETCHING_EVENTS_FAILED = "@@/USER_ACTIONS/FETCHING_EVENTS_FAILED";

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
    dispatch({ type: SET_CURRENT_EVENT, payload: json });
  } catch (err) {
    dispatch({ type: CREATING_EVENT_FAILED, payload: true });
  } finally {
    dispatch({ type: CREATING_EVENT, payload: false });
  }
};

export const getEventsByUserId = (userId) => async (dispatch) => {
  dispatch({ type: FETCHING_EVENTS, payload: true });
  try {
    const user = await fetch(`${baseUrl}/events/${userId}`);
    const json = await user.json();
    dispatch({ type: SET_USER_EVENTS, payload: json });
  } catch (err) {
    dispatch({ type: FETCHING_EVENTS_FAILED, payload: true });
  } finally {
    dispatch({ type: FETCHING_EVENTS, payload: false });
  }
};

export const getEventMembers = (eventId) => async (dispatch) => {
  
};
