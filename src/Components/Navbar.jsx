import React, { useEffect, useState } from "react";
import { Grid, Stack, Box } from "@chakra-ui/react";
import { BiHomeCircle } from "react-icons/bi";
import { BiFolder } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
import { TweenMax } from "gsap/gsap-core";
gsap.registerPlugin(ScrollToPlugin);

export function goToProjects() {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#proj_t" },
  });

  document.getElementById("home_nav")?.classList.remove("active");
  document.getElementById("about_nav")?.classList.remove("active");
  document.getElementById("proj_nav")?.classList.add("active");
  document.getElementById("contact_nav")?.classList.remove("active");
}

export function goToAbout() {
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: "#about" },
  });

  document.getElementById("home_nav")?.classList.remove("active");
  document.getElementById("about_nav")?.classList.add("active");
  document.getElementById("proj_nav")?.classList.remove("active");
  document.getElementById("contact_nav")?.classList.remove("active");
}

export function goToHome() {
  gsap.to(window, {
    duration: 2,
    ease: "bounce",
    scrollTo: { y: "#home" },
  });

  document.getElementById("home_nav")?.classList.add("active");
  document.getElementById("about_nav")?.classList.remove("active");
  document.getElementById("proj_nav")?.classList.remove("active");
  document.getElementById("contact_nav")?.classList.remove("active");
}

function Navbar() {
  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      { y: "100%", opacity: 0 },
      {
        duration: 0.5,
        y: "0%",
        ease: "power1",
        stagger: 0.5,
        opacity: 1,
      }
    );
    gsap.fromTo(
      ".icons",
      { transform: "scale(0.5)", opacity: 0 },
      {
        transform: "scale(1)",
        delay: 1,
        duration: 1,
        scale: "1",
        ease: "power1",
        stagger: 0.5,
        opacity: 1,
      }
    );
  }, []);

  return (
    <Stack
      className="navbar"
      id="navbar"
      zIndex="1"
      backgroundColor={"white"}
      position="fixed"
      h="stretch"
      w="8vw"
      display="grid"
      gridTemplateColumns="1fr"
      gridTemplateRows={"repeat(10, 1fr)"}
      justifyContent="center"
      gap="2rem"
    >
      {/* Face */}
      <Box
        color="black"
        gridArea={"1 / 1 / 2 / 2"}
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        className="icons"
      >
        face
      </Box>

      {/* Home */}
      <Box
        color="black"
        gridArea={"3 / 1 / 4 / 2"}
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={goToHome}
        cursor="pointer"
      >
        <BiHomeCircle id="home_nav" size="3vw" className="icons" />
      </Box>

      {/* About */}
      <Box
        color="black"
        gridArea="4 / 1 / 5 / 2;"
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={goToAbout}
        cursor="pointer"
      >
        <BiUser id="about_nav" size="3vw" className="icons" />
      </Box>

      {/* Projects */}
      <Box
        color="black"
        gridArea="5 / 1 / 6 / 2;"
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={goToProjects}
        cursor="pointer"
      >
        <BiFolder id="proj_nav" size="3vw" className="icons" />
      </Box>

      {/* Contact */}
      <Box
        gridArea="6 / 1 / 7 / 2;"
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
      >
        <GrContact className="icons" size="3vw" />
      </Box>
      <Box
        color="black"
        gridArea="8 / 1 / 8 / 2;"
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
      >
        <a target="_blank" href="https://github.com/Vedant-Manjrekar">
          <BsGithub size="3vw" className="icons" />
        </a>
      </Box>
      <Box
        color="black"
        gridArea="9 / 1 / 9 / 2;"
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <a target="_blank" href="https://twitter.com/vedstwt">
          <BsTwitter size="3vw" className="icons" />
        </a>
      </Box>
      <Box
        color="black"
        gridArea="10 / 1 / 10 / 2;"
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <a
          target="_blank"
          href="https://www.linkedin.com/in/vedant-manjrekar-705707222/"
        >
          <BsLinkedin size="3vw" className="icons" />
        </a>
      </Box>
      <Box
        color="black"
        gridArea="11 / 1 / 11 / 2;"
        w="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      ></Box>
    </Stack>
  );
}

export default Navbar;
