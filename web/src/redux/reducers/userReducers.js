/* eslint-disable import/no-anonymous-default-export */
import {
  CREATING_USER,
  CREATING_USER_FAILED,
  FETCHING_USER,
  FETCHING_USER_FAILED,
  SET_CURRENT_USER,
} from "redux/actions/userActions";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATING_USER:
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
    case FETCHING_USER_FAILED:
      return {
        ...state,
        fetchingFailed: true,
      };
    case CREATING_USER_FAILED:
      return {
        fetchingFailed: true,
      };
    default:
      return state;
  }
};
