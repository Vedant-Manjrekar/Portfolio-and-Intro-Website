import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Media
import netflixPic from "../assets/netflix_1.png";
import expenseTrack from "../assets/expenseTracker.png";
import meme_generator from "../assets/Meme_genrator1.png";
import Image_Search_App from "../assets/image_search_app_thumbnail.png";
import e_commerce from "../assets/E-commerce.png";
import lift_simulation from "../assets/Lift_simulation.png";
import tenzies from "../assets/Tenzies.png";
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
        pl={{ base: "0", sm: "10vw", md: "10vw", lg: "10vw" }}
        marginTop={{ base: "0", md: "20vh" }}
        id="proj_t"
      >
        {" "}
        &lt; PROJECTS /&gt;
      </Text>

      <Box
        overflowX={"scroll"}
        pl={{ base: "1vw", md: "9vw" }}
        mt={"5vw"}
        margin="auto"
        w={{ base: "null", md: "98vw", sm: "98vw", lg: "98vw" }}
        className="cardBody"
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
          {/* E-commerce website */}
          <Card1
            classs={"projects"}
            pic={e_commerce}
            name="E-commerce website"
            info={"E-commerce website made using MERN stack."}
            url="https://e-commerce-store-delta.vercel.app/"
            github="https://github.com/Vedant-Manjrekar/E-commerce-Website-full"
          />
          {/* Image Search App */}
          <Card1
            classs={"projects"}
            pic={Image_Search_App}
            name="Image Search App"
            info="App made using ReactJS which lets the users search images and download them."
            url="https://image-search-seven.vercel.app/"
            github="https://github.com/Vedant-Manjrekar/Image-Search-"
          />
          {/* Lift Simulation */}
          <Card1
            classs={"projects"}
            pic={lift_simulation}
            name="Lift Simulation"
            info="App made using HTML, CSS and Vanilla JavaScript which can make lifts move and create a lift like simulation."
            url="https://lift-simulation-ten.vercel.app/"
            github="https://github.com/Vedant-Manjrekar/Lift-Simulation"
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
            info="Meme Generator made using ReactJs and meme-template-api, which lets users genarate random memes, edit them and download them."
            url="https://meme-generator28.vercel.app/"
            github="https://github.com/Vedant-Manjrekar/Meme-Generator"
          />

          {/* Tenzies game */}
          <Card1
            classs={"projects"}
            pic={tenzies}
            name="Tenzies game"
            info="Tenzies game made using ReactJs."
            url="https://tenzies-game-six.vercel.app/"
            github="https://github.com/Vedant-Manjrekar/Tenzies-Game"
          />
        </div>
      </Box>
    </Box>
  );
}

export default Projects;
