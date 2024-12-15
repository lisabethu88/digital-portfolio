import { Box, List } from "@mui/material";
import React from "react";
import Project from "./Project";
import { krlMediaDescription } from "../data/data";

const data = {
  krlMedia: {
    img: "/krl.png",
    title: "KRL Media",
    description: krlMediaDescription,
  },
  // merryFlickmas: {
  //   img: "/krl.png",
  //   title: "Merry Flickmas!",
  //   description:
  //     "As part of my portfolio, KRL Media highlights my work in designing and developing a fictional digital arts media agency. This project showcases my ability to create a cohesive and visually engaging site that represents a team of experienced Graphic Designers, UX Designers, and Web Developers. The site emphasizes collaboration with global clients, focusing on logo creation, branding, and digital and printed launches. This project allowed me to demonstrate my skills in building user-friendly interfaces, crafting compelling content, and presenting a professional brand identity.",
  // },
};
const ProjectSection = () => {
  return (
    <Box
      id="projects"
      sx={{
        backgroundColor: "#181818",
        minHeight: "100vh",
        height: "fit-content",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Project projectData={data.krlMedia} />
      <Project projectData={data.krlMedia} />
      <Project projectData={data.krlMedia} />
    </Box>
  );
};

export default ProjectSection;
