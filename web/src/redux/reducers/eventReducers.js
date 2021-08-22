/* eslint-disable import/no-anonymous-default-export */
import {
  CREATING_EVENT,
  CREATING_EVENT_FAILED,
  FETCHING_EVENTS,
  SET_USER_EVENTS,
  SET_CURRENT_EVENT,
  FETCHING_EVENTS_FAILED,
} from "redux/actions/eventActions";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATING_EVENT:
      return {
        ...state,
        creatingEvent: action.payload,
      };
    case SET_CURRENT_EVENT:
      return {
        ...state,
        currentEvent: action.payload,
      };
    case FETCHING_EVENTS:
      return {
        ...state,
        fetchingEvents: action.payload,
      };
    case SET_USER_EVENTS:
      return {
        ...state,
        userEvents: action.payload,
      };
    case FETCHING_EVENTS_FAILED:
    case CREATING_EVENT_FAILED:
      return {
        fetchingFailed: true,
      };
    default:
      return state;
  }
};
