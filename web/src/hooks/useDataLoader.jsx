import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserProfile } from "redux/actions/userActions";
import firebase from "../firebase/firebase";

export const useDataLoader = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(getUserProfile(user.email));
      } else {
        history.push("/login");
      }
    });
  };
};
