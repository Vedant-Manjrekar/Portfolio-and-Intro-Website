import { Box, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

function RightPicProject({ photo, description, link, github }) {
  useEffect(() => {
    gsap.fromTo(
      ".projectR",
      { x: "-100%", delay: 1, opacity: 0 },
      {
        duration: 1.5,
        x: "0%",
        ease: "power1",
        stagger: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: ".projectR",
        },
      }
    );
  }, []);

  return (
    <Box
      pl={"10vw"}
      className="projectR"
      display="flex"
      justifyContent="center"
    >
      <Box
        className="descrptn"
        backgroundColor="white"
        color="black"
        h="max-content"
        position="absolute"
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="space-evenly"
        left="24vw"
        zIndex="1"
        m="auto"
        top="2vh"
        p=".5rem"
        w="20vw"
        fontSize="1.5vw"
      >
        {description}

        <Box className="sources" display="flex" gap="1rem">
          <a href={link}>Link</a>
          <a href={github}>Github</a>
        </Box>
      </Box>
      <Box className="photo">
        <Image
          w="55vw"
          objectFit="cover"
          src={photo}
          left="37vw"
          position="absolute"
          alt="Dan Abramov"
        />
      </Box>
    </Box>
  );
}

export default RightPicProject;
