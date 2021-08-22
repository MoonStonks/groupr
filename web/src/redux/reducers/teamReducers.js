/* eslint-disable import/no-anonymous-default-export */
import {
  CREATING_TEAM,
  CREATING_TEAM_FAILED,
  FETCHING_TEAM,
  FETCHING_TEAM_FAILED,
  SET_CURRENT_TEAM,
  SET_TEAM_MEMBERS,
} from "redux/actions/teamActions";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATING_TEAM:
      return {
        ...state,
        creatingTeam: action.payload,
      };
    case SET_CURRENT_TEAM:
      return {
        ...state,
        currentTeam: action.payload,
      };
    case FETCHING_TEAM:
      return {
        ...state,
        fetchingTeam: action.payload,
      };
    case SET_TEAM_MEMBERS:
      return {
        ...state,
        teamMembers: action.payload,
      };
    case FETCHING_TEAM_FAILED:
    case CREATING_TEAM_FAILED:
      return {
        fetchingFailed: true,
      };
    default:
      return state;
  }
};
