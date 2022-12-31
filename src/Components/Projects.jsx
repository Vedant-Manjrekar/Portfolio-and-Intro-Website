import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Media
import netflixPic from "../assets/netflix_1.png";
import expenseTrack from "../assets/expenseTracker.png";
import meme_generator from "../assets/meme_generator.png";
import Image_Search_App from "../assets/image_search_app_thumbnail.png";
import Card1 from "./Card";

// // Registrations
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useEffect(() => {
    gsap.fromTo(
      ".projects",
      { delay: 1, opacity: 0, scale: 0.5 },
      {
        duration: 1.5,
        scale: 1,
        ease: "power1",
        stagger: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: ".projects",
        },
      }
    );
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      h={"max-content"}
      flexDirection={"column"}
      id="projects_"
      mb={"20vh"}
      mt="5rem"
    >
      <Text
        fontSize={{ base: "12vw", md: "7vw" }}
        textAlign={{ base: "center", md: "left", lg: "left" }}
        className="projects_"
        pl={{ base: "2vw", sm: "8vw", md: "8vw", lg: "12vw" }}
      >
        {" "}
        &lt; PROJECTS /&gt;
      </Text>

      <Box
        overflowX={"scroll"}
        pl={{ base: "1vw", md: "9vw" }}
        mt={"5vw"}
        margin="auto"
        w={{ base: "72vw", md: "98vw", sm: "98vw", lg: "98vw" }}
      >
        <div className="card">
          {/* Expense Tracker App */}
          <Card1
            classs={"projects"}
            pic={expenseTrack}
            name="Expense Tracker"
            info={
              "Voice command enabled web-App made using ReactJS, Firebase and Speechly to keep track of our Incomes and Expenses."
            }
            url="https://expense-tracker-sigma-seven.vercel.app/"
            github="https://github.com/Vedant-Manjrekar/Expense-Tracker"
          />

          {/* Image Search App */}
          <Card1
            classs={"projects"}
            pic={Image_Search_App}
            name="Image Search App"
            info="App made using ReactJS which can search Images and also lets users to download them."
            url="https://image-search-seven.vercel.app/"
            github="https://github.com/Vedant-Manjrekar/Image-Search-"
          />

          {/* Netflix Clone */}
          <Card1
            classs={"projects"}
            pic={netflixPic}
            name="Netflix Clone"
            info={"Netflix Clone made using ReactJs and FireBase"}
            url="https://netflix-clone-theta-liart.vercel.app/"
            github="https://github.com/Vedant-Manjrekar/Netflix-Clone"
          />

          {/* Meme Generator */}
          <Card1
            classs={"projects"}
            pic={meme_generator}
            name="Meme Generator"
            url="https://meme-generator28.vercel.app/"
            github="https://github.com/Vedant-Manjrekar/Meme-Generator"
          />
        </div>
      </Box>
    </Box>
  );
}

export default Projects;
