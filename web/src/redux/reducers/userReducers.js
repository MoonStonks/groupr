/* eslint-disable import/no-anonymous-default-export */
import {
  MODIFYING_USER,
  MODIFYING_USER_FAILED,
  FETCHING_USER,
  FETCHING_USER_FAILED,
  SET_CURRENT_USER,
  FETCHING_USER_EVENTS,
  SET_USER_EVENTS,
  FETCHING_EVENTS_FAILED,
  LOGGING_IN,
  LOGGING_IN_FAILED,
} from "redux/actions/userActions";

export default (state = {}, action) => {
  switch (action.type) {
    case MODIFYING_USER:
      return {
        ...state,
        creatingUser: action.payload,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case FETCHING_USER:
      return {
        ...state,
        fetchingUser: action.payload,
      };
    case FETCHING_USER_EVENTS:
      return {
        ...state,
        fetchingEvents: action.payload,
      };
    case SET_USER_EVENTS:
      return {
        ...state,
        events: action.payload,
      };
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: action.payload,
      };
    case FETCHING_USER_FAILED:
    case LOGGING_IN_FAILED:
    case FETCHING_EVENTS_FAILED:
    case MODIFYING_USER_FAILED:
    default:
      return state;
  }
};
