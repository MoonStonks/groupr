/* eslint-disable import/no-anonymous-default-export */
import {
  CREATING_TEAM,
  CREATING_TEAM_FAILED,
  FETCHING_TEAM_MEMBERS,
  FETCHING_TEAM_FAILED,
  SET_CURRENT_TEAM,
  SET_TEAM_MEMBERS,
  FETCHING_EVENT_TEAMS,
  SET_EVENT_TEAMS,
  FETCHING_EVENT_TEAMS_FAILED,
  JOINING_TEAM,
  JOINING_TEAM_FAILED,
  LEAVING_TEAM,
  LEAVING_TEAM_FAILED,
} from "redux/actions/teamActions";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATING_TEAM:
      return {
        ...state,
        fetching: action.payload,
      };
    case SET_CURRENT_TEAM:
      return {
        ...state,
        currentTeam: action.payload,
      };
    case FETCHING_TEAM_MEMBERS:
      return {
        ...state,
        fetching: action.payload,
      };
    case SET_TEAM_MEMBERS:
      return {
        ...state,
        teamMembers: action.payload,
      };
    case FETCHING_EVENT_TEAMS:
      return {
        ...state,
        fetching: action.payload,
      };
    case SET_EVENT_TEAMS:
      return {
        ...state,
        eventTeams: action.payload,
      };
    case LEAVING_TEAM:
      return {
        ...state,
        leavingTeam: action.payload,
      };
    case JOINING_TEAM:
      return {
        ...state,
        leavingTeam: action.payload,
      };
    case JOINING_TEAM_FAILED:
    case LEAVING_TEAM_FAILED:
    case FETCHING_EVENT_TEAMS_FAILED:
    case FETCHING_TEAM_FAILED:
    case CREATING_TEAM_FAILED:
    default:
      return state;
  }
};
