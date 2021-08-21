import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

export const Home = () => {
  let history = useHistory();

  return (
    <Box>
      <Button onClick={() => history.push(`/group-123`)}>
        Navigate to Group
      </Button>
    </Box>
  );
};
