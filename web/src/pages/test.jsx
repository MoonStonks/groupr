import React from "react";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getEventsByUserId } from "redux/actions/userActions";
import { getEventMembers } from "redux/actions/eventActions";

export const Test = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getEventMembers("64sQPJ5NtWbRVh5YZ5J1"));
  };

  return (
    <>
      <Button onClick={handleClick}>dashboard page</Button>
    </>
  );
};
