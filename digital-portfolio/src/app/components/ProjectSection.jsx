import { Box, List } from "@mui/material";
import React from "react";
import Project from "./Project";
import {
  justTheEffingRecipeDescription,
  krlMediaDescription,
  krlMediaImages,
  merryFlickmasDescription,
  merryFlickmasImages,
  justTheEffingRecipeImages,
} from "../data/data";

const data = {
  krlMedia: {
    title: "KRL Media",
    description: krlMediaDescription,
    images: krlMediaImages,
  },
  merryFlickmas: {
    title: "Merry Flickmas!",
    description: merryFlickmasDescription,
    images: merryFlickmasImages,
  },
  justTheEffingRecipe: {
    title: "Just the Effing Recipe",
    description: justTheEffingRecipeDescription,
    images: justTheEffingRecipeImages,
  },
};
const ProjectSection = () => {
  return (
    <Box
      id="projects"
      sx={{
        backgroundColor: "#181818",
        height: "fit-content",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <Project projectData={data.krlMedia} />
      <Project projectData={data.merryFlickmas} />
      <Project projectData={data.justTheEffingRecipe} />
    </Box>
  );
};

export default ProjectSection;
