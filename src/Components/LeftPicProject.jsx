import { Box, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

function LeftPicProject({ photo, description, link, github }) {
  useEffect(() => {
    gsap.fromTo(
      ".projectL",
      { x: "200%", delay: 1, opacity: 0 },
      {
        duration: 1.5,
        x: "0%",
        ease: "power1",
        stagger: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: ".projectL",
        },
      }
    );
  }, []);

  return (
    <Box
      pl={"10vw"}
      className="projectL"
      display="flex"
      justifyContent="center"
      h="30vw"
      mb="15vw"
    >
      <Box className="photo">
        <Image
          w="55vw"
          objectFit="cover"
          src={photo}
          left="19vw"
          position="absolute"
          alt="Dan Abramov"
        />
      </Box>
      <Box
        className="descrptn"
        backgroundColor="white"
        color="black"
        h="max-content"
        position="absolute"
        right="7vw"
        m="auto"
        p=".5rem"
        top="2vh"
        w="20vw"
        fontSize="1.5vw"
      >
        {description}

        <Box className="sources" display="flex" gap="1rem">
          <a href={link}>Link</a>
          <a href={github}>Github</a>
        </Box>
      </Box>
    </Box>
  );
}

export default LeftPicProject;
