import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Anime from "react-anime";

function Loader() {
  return (
    <Anime
      targets=".box_spinner"
      rotate="-360deg"
      scale="2.5"
      loop={true}
      direction="alternate"
    >
      <Box
        h={"100vh"}
        w="100vw"
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          backgroundColor="#64ffdb"
          className="box_spinner"
          color="black"
          fontFamily="Heebo, sans-serif"
          transform="rotate(45deg)"
          borderRadius="2px"
          h="3vw"
          fontSize="1.5vw"
          w={"3vw"}
          display="flex"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            position="fixed"
            display="flex"
            justifyContent="center"
            alignItems="center"
            transform="rotate(-45deg)"
          >
            V
          </Text>
        </Box>
      </Box>
    </Anime>
  );
}

export default Loader;
