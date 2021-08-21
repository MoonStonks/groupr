import React from "react";
import { Box, Image, VStack } from "@chakra-ui/react";

/**
 * This component is the left side bar component that contains a vertical list of events the user has joined.
 */

const icons = [
  {
    name: "event1",
    src: "https://bit.ly/sage-adebayo",
  },
  {
    name: "event2",
    src: "https://bit.ly/sage-adebayo",
  },
  {
    name: "event3",
    src: "https://bit.ly/sage-adebayo",
  },
];

export default function EventList({ joinedEvents }) {
  return (
    <VStack>
      {icons.map((icon) => (
        <Box>
          <Image src={icon.src} />
        </Box>
      ))}
    </VStack>
  );
}
