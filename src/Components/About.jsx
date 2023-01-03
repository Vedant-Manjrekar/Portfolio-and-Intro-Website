import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Text, Image } from "@chakra-ui/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import gsap from "gsap";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import "../../src/App.css";

function About() {
  useEffect(() => {
    gsap.fromTo(
      ".about",
      { delay: 1, opacity: 0 },
      {
        duration: 1.5,
        opacity: 1,
        ease: "power1",
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".about",
        },
      }
    );
  }, []);

  return (
    <>
      <Box
        h={{ sm: "max-content", md: "110vh", lg: "110vh" }}
        display="grid"
        id="about"
        className="about"
        alignItems="center"
        justifyContent="space-evenly"
        fontFamily="Raleway, sans-serif"
        mt="4rem"
        pt="1rem"
      >
        <Text
          fontSize={{ base: "12vw", md: "7vw" }}
          textAlign={{ base: "center", md: "left", lg: "left" }}
          className="projects_"
          mb={{ base: "2vw", md: null }}
          pl={{ base: "2vw", md: "10vw" }}
        >
          &lt; ABOUT me /&gt;
        </Text>

        <Box
          pl={{ base: "2vw", sm: "11vw" }}
          className="about"
          fontFamily="Fragment Mono, monospace"
          fontSize={{ base: "4vw", sm: "2vw", md: "2vw", lg: "1.5vw" }}
          lineHeight="43px"
          pr="2vw"
        >
          <Text
            className="op"
            p={{ base: "0 10vw", md: "1vw", sm: "1vw", lg: "1vw" }}
          >
            <br />
            Hello, my name is Vedant Manjrekar.
            <br />
            <br />I am a web developer with a focus on ReactJs and overall MERN
            Stack, also a creative designer, who aims to work with business and
            marginalized communities to bring their passion to life.
          </Text>

          <Text
            className="op"
            p={{ base: "0 10vw", md: "1vw", sm: "1vw", lg: "1vw" }}
          >
            I like exploring different technologies and frameworks that catch my
            interest.
          </Text>
          <div className="photo roll-in-right">
            {/* <img src={photo} className="photo1" alt="Picture" /> */}
          </div>
        </Box>

        <Box
          className="about"
          fontSize="18px"
          fontFamily="Fragment Mono, monospace"
          lineHeight="38px"
          pl="12vw"
        >
          <Text mb="1rem" fontSize={{ md: "2rem" }} mt={["5vh", "md", "lg"]}>
            <span className="span">MY SKILLSET 🛠</span> [Technologies I've been
            working with recently]
          </Text>

          <Grid gridTemplateColumns="1fr 1fr">
            <li className="op">
              <AiFillHtml5 className="tech_stck" /> HTML
            </li>
            <li className="op">
              <DiCss3 className="tech_stck" /> CSS
            </li>
            <li className="op">
              <SiJavascript className="tech_stck" /> JS (ES6){" "}
            </li>
            <li className="op">
              <GrReactjs className="tech_stck" /> React{" "}
            </li>
            <li className="op">
              <SiExpress className="tech_stck" /> Express
            </li>
            <li className="op">
              <SiMongodb className="tech_stck" /> MongoDb
            </li>
            <li className="op">
              <FaNodeJs className="tech_stck" /> NodeJs
            </li>
            <li className="op">
              <SiFirebase className="tech_stck" /> Firebase
            </li>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default About;
