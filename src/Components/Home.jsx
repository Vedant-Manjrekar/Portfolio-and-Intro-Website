import React, { useEffect, useRef, useState } from "react";
import { Text, Box } from "@chakra-ui/react";
import Projects from "./Projects";
import About from "./About";
import Intro from "./Intro";

function Home() {
  return (
    <Box display="grid" h="max-content">
      <Intro />
      <About />
      <Projects />
    </Box>
  );
}

export default Home;
