/* eslint-disable import/no-anonymous-default-export */
import {
  CREATING_EVENT,
  CREATING_EVENT_FAILED,
  SET_CURRENT_EVENT,
  FETCHING_EVENT_MEMBERS,
  SET_EVENT_MEMBERS,
  SET_NEW_EVENT,
  FETCHING_EVENT_MEMBERS_FAILED,
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
        selectedEvent: action.payload,
      };
    case SET_NEW_EVENT:
      return {
        ...state,
        newEvent: action.payload,
      };
    case FETCHING_EVENT_MEMBERS:
      return {
        ...state,
        fetchingMembers: action.payload,
      };
    case SET_EVENT_MEMBERS:
      return {
        ...state,
        members: action.payload,
      };
    case FETCHING_EVENT_MEMBERS_FAILED:
    case CREATING_EVENT_FAILED:
    default:
      return state;
  }
};
