import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const styles = {
  // overflow:"hidden",
  width: "1000px",
  height: "450px",
  maxHeight: "90vh",
  maxWidth: "90vw",
  transform: "translateZ(0)",
  margin: "10px auto",
  gridTemplateColumns: {
    lg: "repeat(12,1fr) !important",
    md: "repeat(12,1fr) !important",
    sm: "repeat(6,1fr) !important",
    xs: "repeat(6,1fr) !important",
  },
};

export default function ImageListComp() {
  return (
    <ImageList sx={styles} rowHeight={200} gap={1}>
      {itemData.map((item, idx) => {
        const cols = item.cols;
        const rows = item.rows;

        return (
          <ImageListItem key={idx} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                // sx={{ color: "white" }}
                // aria-label={`star ${item.title}`}
                >
                  {/* <StarBorderIcon /> */}
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = Array.from({ length: 31 }, (_, i) => {
  const index = i + 1; // Since the array starts from 0, we need to adjust it
  return {
    img: `/images/about/prevEditions/imag${index}.jpg`,
    cols: (index % 4 === 0) ? 6 : 3, // Larger images every 4th item
    rows: (index % 5 === 0) ? 2 : 1, // Taller images every 5th item
  };
});




