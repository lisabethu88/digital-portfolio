import React, { useEffect, useState, useRef } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ProjectImageList from "./ProjectImageList";

const Project = ({ projectData }) => {
  return (
    <Box
      sx={{
        height: "fit-content",
        maxHeight: { xs: "none", md: "100vh" },
        width: "80%",
        minHeight: "100vh",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          gap: 1,
          flexWrap: { xs: "wrap", md: "nowrap" },
          alignContent: "center",
          width: "fit-content",
          margin: { xs: 0, md: 2 },
          borderRadius: { xs: 0, md: 2 },
          paddingY: 2,
          backgroundColor: "#262626",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: { xs: "90%", md: "50%" },
            margin: 2,
            padding: 2,
            borderRadius: 2,
          }}
          data-aos="zoom-in-right"
        >
          <Box>
            <Typography
              gutterBottom
              variant="h3"
              // sx={{
              //   fontSize: { xs: "2rem", md: "2.5rem" },
              // }}
            >
              {/* <KeyboardDoubleArrowRightIcon
                sx={{ color: "#7ed463", fontSize: "3rem" }}
              /> */}
              <span className="arrows">{"<"}</span>
              {projectData.title} <span className="arrows">{"/>"}</span>
            </Typography>
            {/* <Divider sx={{ borderColor: "#ff24d2", marginY: 2 }} /> */}
            {/* <Divider
              sx={{ borderColor: "#7767ba", marginY: 2, maxWidth: 300 }}
            />
            <Divider
              sx={{ borderColor: "#678fb3", marginY: 2, maxWidth: 200 }}
            /> */}
          </Box>
          {/* Objectives */}
          <Box
            sx={{
              height: "50vh",
              overflowY: "scroll",
              padding: 2,
              borderRadius: 2,
              backgroundColor: "#2d2d2d",
            }}
          >
            {/* <Typography
              gutterBottom
              variant="h4"
              sx={{
                color: "white",
                fontFamily: "Lato",
                fontWeight: 500,
                textTransform: "uppercase",
              }}
            >
              {projectData.description.title}
            </Typography>
            <Divider sx={{ borderColor: "#eba958", marginY: 2 }} /> */}

            <Typography variant="h5" sx={{ marginTop: 2 }}>
              Objectives:
            </Typography>
            <List>
              {projectData.description.objectives.map((objective, index) => (
                <ListItem key={index}>
                  <ListItemText primary={objective} sx={{ color: "white" }} />
                </ListItem>
              ))}
            </List>
            {/* Challenges */}
            <Typography variant="h5" sx={{ marginTop: 2 }}>
              Challenges:
            </Typography>
            <List>
              {projectData.description.challenges.map((challenge, index) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={challenge.description}
                    sx={{ color: "white" }}
                  />
                </ListItem>
              ))}
            </List>
            {/* Tools Used */}
            <Typography variant="h5" sx={{ marginTop: 2 }}>
              Tools Used:
            </Typography>
            <List>
              {Object.entries(projectData.description.toolsUsed).map(
                ([tool, description], index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={`${tool}: ${description}`}
                      sx={{ color: "white" }}
                    />
                  </ListItem>
                )
              )}
            </List>
            {/* Outcomes */}
            <Typography variant="h5" sx={{ marginTop: 2 }}>
              Outcomes:
            </Typography>
            <List>
              {projectData.description.outcomes.map((outcome, index) => (
                <ListItem key={index}>
                  <ListItemText primary={outcome} sx={{ color: "white" }} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <ProjectImageList itemData={projectData.images} />
      </Box>
    </Box>
  );
};

export default Project;
