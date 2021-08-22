import React from "react";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { createUser, getUserProfile } from "redux/actions/userActions";
import { getEventsByUserId } from "redux/actions/eventActions";

export const Test = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getEventsByUserId("s7nIf7g9Dq9YDNkeC5xw"));
  };

  return (
    <>
      <Button onClick={handleClick}>dashboard page</Button>
    </>
  );
};
