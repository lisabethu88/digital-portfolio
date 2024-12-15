import React, { useEffect, useState, useRef } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ProjectImageList from "./ProjectImageList";

const Project = ({ projectData }) => {
  const [isScrollable, setIsScrollable] = useState(false);
  const descriptionRef = useRef(null);

  useEffect(() => {
    // Check if content is scrollable
    if (descriptionRef.current) {
      setIsScrollable(
        descriptionRef.current.scrollHeight >
          descriptionRef.current.clientHeight
      );
    }
  }, [projectData]);

  return (
    <Box
      sx={{
        height: "100%",
        maxHeight: { xs: "none", md: "100vh" },
        width: "100%",
        minHeight: "fit-content",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          flexWrap: { xs: "wrap", md: "nowrap" },
          alignContent: "center",
          // backgroundColor: "#3b3b3b",
          width: "fit-content",
          margin: { xs: 0, md: 2 },
          borderRadius: { xs: 0, md: 2 },
          paddingY: 2,
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
          ref={descriptionRef}
        >
          <Typography
            gutterBottom
            variant="h3"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              color: "",
            }}
          >
            {projectData.title}
          </Typography>
          {/* Objectives */}
          <Box
            sx={{
              height: "80vh",
              overflowY: "scroll",
              padding: 2,
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" sx={{ color: "white", marginTop: 2 }}>
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
            <Typography variant="h5" sx={{ color: "white", marginTop: 2 }}>
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
            <Typography variant="h5" sx={{ color: "white", marginTop: 2 }}>
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
            <Typography variant="h5" sx={{ color: "white", marginTop: 2 }}>
              Outcomes:
            </Typography>
            <List>
              {projectData.description.outcomes.map((outcome, index) => (
                <ListItem key={index}>
                  <ListItemText primary={outcome} sx={{ color: "white" }} />
                </ListItem>
              ))}
            </List>
            <Typography variant="h5" sx={{ color: "white", marginTop: 2 }}>
              Reflection:
            </Typography>
            <Box sx={{ marginTop: 2, marginLeft: 2 }}>
              {projectData.description.reflection.map((paragraph, index) => (
                <>
                  <Typography
                    variant={"body1"}
                    sx={{ color: "white", fontFamily: "Lato" }}
                  >
                    {paragraph}
                  </Typography>
                  <br />
                </>
              ))}
            </Box>
          </Box>
        </Box>
        <ProjectImageList />
        {/* <Box
        component="img"
        src={projectData.img}
        sx={{
          width: { xs: "90%", md: "50%" },
          height: "fit-content",
          margin: 2,
          borderRadius: 2,
        }}
        data-aos="zoom-in-left"
      ></Box> */}
      </Box>
    </Box>
  );
};

export default Project;
