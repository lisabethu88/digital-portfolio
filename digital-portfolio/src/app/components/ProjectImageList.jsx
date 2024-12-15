import React, { useState } from "react";
import {
  ImageList,
  ImageListItem,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ProjectImageList = () => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const itemData = [
    {
      img: "/krlmedia/krl.png",
      title: "KRL media homepage",
      rows: 1,
      cols: 2,
    },
    {
      img: "/krlmedia/Screenshot 2024-12-14 at 10.39.23 PM.png",
      title: "Screenshot of open modal",
      rows: 1,
      cols: 2,
    },
    {
      img: "/krlmedia/Screenshot 2024-12-14 at 10.39.39 PM.png",
      title: "Camera",
      rows: 2,
      cols: 1,
    },
    {
      img: "/krlmedia/Screenshot 2024-12-14 at 10.40.11 PM.png",
      title: "Camera",
      rows: 2,
      cols: 1,
    },
    {
      img: "/krlmedia/Screenshot 2024-12-14 at 10.40.21 PM.png",
      title: "Camera",
      rows: 1,
      cols: 2,
    },
    {
      img: "/krlmedia/Screenshot 2024-12-14 at 10.40.52 PM.png",
      title: "Camera",
      rows: 2,
      cols: 2,
    },
    {
      img: "/krlmedia/Screenshot 2024-12-14 at 10.40.57 PM.png",
      title: "Camera",
      rows: 1,
      cols: 2,
    },
  ];

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
      <ImageList
        sx={{
          width: 500,
          minHeight: 450,
          overflowY: "visible",
          borderRadius: 2,
        }}
        variant="quilted"
        cols={4}
        rowHeight={121}
        data-aos="zoom-in-left"
      >
        {itemData.map((item) => (
          <ImageListItem
            sx={{
              transition: "0.1s ease-in-out",
              ":hover": {
                opacity: 0.5,
                transition: "0.1s ease-in-out",
              },
            }}
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            onClick={() => handleOpen(item.img)} // Open modal on click
            style={{ cursor: "pointer" }} // Indicate clickability
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              style={{ borderRadius: 5 }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* Modal/Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            backgroundColor: "#000", // Optional dark background for better contrast
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
