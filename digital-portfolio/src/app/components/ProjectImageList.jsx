import React, { useState } from "react";
import {
  ImageList,
  ImageListItem,
  Box,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ProjectImageList = ({ itemData }) => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  const handleOpen = (img) => {
    setCurrentImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
      <Box
        className="photo-grid"
        sx={{ maxWidth: { xs: "100%", md: "50%" } }}
        data-aos="zoom-in-left"
      >
        {itemData.map((item, index) => (
          <div className="thumb-container" key={index}>
            <img
              src={item.img}
              alt={item.title}
              className="thumb-image"
              onClick={() => handleOpen(item.img)}
            />
          </div>
        ))}
      </Box>

      {/* Modal/Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent
          sx={{
            position: "relative",
            padding: 0,
            backgroundColor: "#000",
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "white",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <CloseIcon />
          </IconButton>
          {currentImage && (
            <img
              src={currentImage}
              alt="Full-size view"
              style={{
                maxWidth: "100%",
                maxHeight: "90vh",
                borderRadius: 8,
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectImageList;
