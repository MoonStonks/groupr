import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";

const Groups = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { groupId } = params;

  const [id, setId] = useState(null);

  useEffect(() => {
    console.log();

    // fetch data
    setId(groupId);
  }, [groupId]);

  return (
    <Box>
      <Text>Groups Page</Text>
      <Text>{groupId}</Text>
    </Box>
  );
};

export default Groups;
