import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
// import Link from 'next/link'; // Adjust based on your setup
// import { Box, Typography } from '@mui/material'; // Adjust imports based on your library

const containerStyles = {
  marginTop: "50px",
  margin: {
    xl: "9% auto",
    lg: "9%",
    sm: "9%",
    xs: "9%",
  },
  padding: "50px",
  maxWidth: "1500px",
  width: "85vw",
  borderRadius: "15px",
  padding: {
    xs: "0",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  h1: {
    padding: "0 0 20px 0",
    textAlign: {
      lg: "left",
      sm: "center",
      xs: "center",
    },
    fontSize: {
      lg: "48px",
      sm: "32px",
      xs: "32px",
    },
  },
};

const style = {
  display: "flex",
  alignItems: "center",
  maxWidth: "1280px",
  width: "70vw",
  gap: "55px",
  margin: "20px",
  flexDirection: {
    xs: "column-reverse",
    sm: "column-reverse",
    lg: "row",
  },
  ".content": {
    flex: "1",
    display: "flex",
    p: {
      overflowY: "hidden",
      lineHeight: "1.5",
      height: "auto",
      minHeight: "150px",
      color: "white",
      textAlign: "justify",
    },
    flexDirection: "column",
  },
  ".ButtonBox": {
    display: "flex",
    justifyContent: "center",
    margin: "25px 0",
    ".Btn": {
      border: "solid #3452ff 2px",
      borderRadius: "25px",
      padding: "10px 30px",
      color: "white",
      ":hover": {
        backgroundColor: "#3452ff",
        color: "white",
      },
    },
  },
  ".tShirt": {
    width: {
      lg: "30%",
      sm: "40%",
      xs: "80%",
    },
    borderRadius: "10px",
  },
};

export default function HomePageAbout1(p) {
  return (
    <Box sx={containerStyles}>
      <Box sx={style}>
        <Box className="tShirt">
          {p.img === 'teaser' ? (
            <LiteYouTubeEmbed id="gp4IQg8Or8g" />
          ) : p.img.endsWith('.png') ? (
            <Link href={p.link}>
              <img src={`/images/${p.img}`} alt="tshirt" />
            </Link>
          ) : (
            <div>No valid content to display</div>
          )}
        </Box>
        <Box className="content">
          <Typography className="flux" variant="h1">
            {p.name}
          </Typography>
          <Typography variant="body1">{p.text}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
