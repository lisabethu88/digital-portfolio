"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import { Button } from "@mui/material";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const buttonStyle = {
  color: "#eba958",
  fontWeight: 600,
  letterSpacing: 1,
  backgroundColor: "#181818",
};
export default function Header(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: "transparent",
            boxShadow: 0,
          }}
        >
          <Toolbar
            sx={{ backgroundColor: "transparent", gap: 1, flexWrap: "wrap" }}
          >
            <Button
              onClick={() => scrollToSection("about")}
              sx={{
                ...buttonStyle,
                // textShadow: " 0px 10px 0px black",
              }}
            >
              About
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              sx={{ ...buttonStyle }}
            >
              Projects
            </Button>
            <Button
              onClick={() => scrollToSection("reflection")}
              sx={{ ...buttonStyle }}
            >
              Reflection
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
