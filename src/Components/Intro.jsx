import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDisclosure } from "@chakra-ui/react";
import { GoThreeBars } from "react-icons/go";
import resume from "../assets/vedResume.pdf";
import { goToHome, goToAbout, goToProjects, goToContact } from "./Navbar";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from "@chakra-ui/react";
gsap.registerPlugin(ScrollTrigger);

function Intro() {
  const textGreen = "#64ffdb";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  useEffect(() => {
    gsap.fromTo(
      ".name",
      { y: "100%", delay: 1, opacity: 0 },
      {
        duration: 1.5,
        y: "0%",
        ease: "power1",
        stagger: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: ".name",
        },
      }
    );
    gsap.fromTo(
      ".desc",
      { x: "-100%", delay: 1, opacity: 0 },
      {
        duration: 1.5,
        x: "0%",
        ease: "power1",
        stagger: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: ".name",
        },
      }
    );
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      id="home"
      h="100vh"
      justifyContent="center"
      textAlign="left"
      w="stretch"
      m={{ base: "25vh", xs: "25vh", sm: "25vh", lg: null }}
    >
      <div className="nav" id="drawer-btn">
        <Button
          ref={btnRef}
          colorScheme="teal"
          variant="outline"
          w={{ base: "12vw" }}
          onClick={onOpen}
          top="2vh"
          left="2vh"
          textAlign="center"
        >
          <GoThreeBars />
        </Button>
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody
            display="grid"
            alignItems="center"
            justifyContent="center"
          >
            <Text onClick={goToHome} fontWeight="bold" textAlign="center">
              Home
            </Text>
            <Text onClick={goToAbout} fontWeight="bold" textAlign="center">
              About
            </Text>
            <Text onClick={goToProjects} fontWeight="bold" textAlign="center">
              Projects
            </Text>
            <Text fontWeight="bold" onClick={goToContact}>
              Contact Me
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Text
        className="desc"
        color={textGreen}
        w="stretch"
        pl={{ md: "12vw", base: "5vw", sm: "12vw", lg: "12vw" }}
        fontFamily="monospace"
        // fontSize="2vw"
        fontSize={{ base: "3vw", sm: "3vw", md: "2.5vw", lg: "1.5vw" }}
        mt="0"
        mb={{ lg: "1rem" }}
        textAlign="left"
      >
        Hi, my name is
      </Text>
      <Text
        fontSize={{ base: "14vw", sm: "10vw", md: "10vw", lg: "7vw" }}
        w="stretch"
        pl={{ sm: "12vw", base: "5vw", md: "12vw", lg: "12vw" }}
        fontFamily="Rajdhani, sans-serif"
        className="name"
        m="1rem 0"
        mt={{ base: "1rem", md: "3rem", lg: "3rem" }}
        lineHeight="9vh"
      >
        VEDANT MANJREKAR.
      </Text>
      <Text
        fontSize={{ base: "9vw", sm: "7vw", md: "8vw", lg: "7vw" }}
        w="stretch"
        fontFamily="Cairo Play, cursive"
        fontStyle="italic"
        className="desc"
        m="5px 0"
        ml={{ sm: "8vw", base: "0", md: "8vw", lg: "8vw" }}
        // ml="1rem"
        pl="5vw"
        mb={{ lg: "2rem" }}
        color="white"
        backgroundColor="#f58045"
        lineHeight={{ base: "9vw", sm: "7vw", md: "7vw", lg: "8vw" }}
      >
        I build stuff for the Web.
      </Text>
      <Text
        className="desc"
        color={textGreen}
        fontSize={{ base: "3vw", sm: "3vw", md: "2.5vw", lg: "1.5vw" }}
        w="stretch"
        pl={{ md: "12vw", base: "5vw", sm: "12vw", lg: "12vw" }}
        fontFamily="monospace"
        m="0"
        mt="3vw"
      >
        I am a design minded front-end developer.
      </Text>
      <Text
        className="desc"
        color={textGreen}
        fontSize={{ base: "3vw", sm: "3vw", md: "2.5vw", lg: "1.5vw" }}
        w="stretch"
        pl={{ md: "12vw", base: "5vw", sm: "12vw", lg: "12vw" }}
        fontFamily="monospace"
        mb="2rem"
      >
        FrontEnd / BackEnd / MERN Stack
      </Text>

      <ButtonGroup
        w="stretch"
        ml={{ sm: "12vw", base: "5vw" }}
        className="name"
      >
        <a href={resume} target="_blank">
          <Button
            // colorScheme="whiteAlpha"
            color="white"
            variant="outline"
            fontSize="2vw"
            h={{ base: "8vw", sm: "8vw", lg: "5vw" }}
            w="18vw"
            className="resume_btn"
          >
            Resume
          </Button>
        </a>

        <Button
          color="white"
          variant="outline"
          fontSize="2vw"
          h={{ base: "8vw", sm: "8vw", lg: "5vw" }}
          w="18vw"
          className="resume_btn"
          onClick={goToContact}
        >
          Contact Me
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default Intro;
