import { baseUrl } from "../../util/constants";
export const CREATING_USER = "@@/USER_ACTIONS/CREATING_USER";
export const SET_CURRENT_USER = "@@/USER_ACTIONS/SET_CURRENT_USER";
export const CREATING_USER_FAILED = "@@/USER_ACTIONS/SET_CURRENT_USER";
export const FETCHING_USER = "@@/USER_ACTIONS/FETCHING_USER";
export const FETCHING_USER_FAILED = "@@/USER_ACTIONS/FETCHING_USER_FAILED";

export const createUser = (userDetails) => async (dispatch) => {
  dispatch({ type: CREATING_USER, payload: true });
  try {
    const user = await fetch(`${baseUrl}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userDetails),
    });
    const json = await user.json();
    dispatch({ type: SET_CURRENT_USER, payload: json });
  } catch (err) {
    dispatch({ type: CREATING_USER_FAILED });
  } finally {
    dispatch({ type: CREATING_USER, payload: false });
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
  } catch (err) {
    dispatch({ type: FETCHING_USER_FAILED, payload: true });
  } finally {
    dispatch({ type: FETCHING_USER, payload: false });
  }
};
