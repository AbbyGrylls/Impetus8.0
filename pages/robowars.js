import { Typography, useTheme, Button } from "@mui/material";
import { Box, display } from "@mui/system";
import Contact from "../components/Contact";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React, { useRef, useEffect, useState } from "react";

export default function ExpoPage() {
  //const [infoRef, infoInView] = useInView({ threshold: 0.1 });
  const [rulebookRef, rulebookInView] = useInView({ threshold: 0.1 });
  const [timelineRef, timelineInView] = useInView({ threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1 });
  const theme = useTheme();

  const btnStyle = {
    border: "solid #1E3A8A 2px",
    borderRadius: "10px",
    padding: "5px 20px",
    color: "#BFDBFE",
    ":hover": {
      backgroundColor: "#00A7E7",
      color: "white",
    },
  };

  const styles = {
    ".Robo .img img": {
      width: "400px !important",
    },
    ".VR, .EV, .Robo": {
      width: "100vw",
      minHeight: "100vh",
      overflowY: "hidden",
      display: "grid",
      [theme.breakpoints.down("md")]: {
        placeItems: "center",
      },
      gridTemplateColumns: "1fr 1fr",
      ">*": {
        [theme.breakpoints.down("md")]: {
          gridColumn: "span 2",
        },
      },
      ".img": {
        width: "100%",
        minHeight: "400px",
        img: {
          width: {
            lg: "600px",
            md: "600px",
            sm: "500px",
            xs: "500px",
          },
          filter: "drop-shadow(16px 16px 10px black)",
        },
      },
      ".content": {
        width: "550px",
        maxWidth: "90vw",
        margin: "50px 0",
        textAlign: "justify",
        h2: {
          margin: "30px 0",
        },
      },
    },
    [theme.breakpoints.up("md")]: {
      ".EV .content": {
        order: "-1",
        marginLeft: "100px !Important",
      },
    },
    ".Robo .img img": {
      width: "300px !important",
    },
  };

  return (
    <Box sx={styles} style={{ backgroundColor: "#060606", height: "100vh", }}>
      {/* Hero Section */}
      <Box
        className="heroRobowars"
        style={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          // backgroundColor:"black"
          maxHeight: "1200px",
        }}
      >
        {/* Background Image */}
        <Image
          src="/images/heroshade.png"
          alt="Hero Shade"
          width={500}
          height={300}
          quality={100}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            filter: "brightness(10)",
            zIndex: 2,
            // border: "solid red",
          }}
        />

        {/* Foreground Image */}
        <Image
          className="roboPic"
          src="/images/robo.png"
          alt="Robo"
          width={500}
          height={300}
          quality={100}
          style={{
            position: "absolute",
            // bottom: "-4rem", 
            // top:"18rem",
            top: "25%",
            margin: "0 5vw",
            // bottom: "0px", 
            // left: "50%",
            // transform: "translate(-50%, -50%)", 
            zIndex: 1,
            // border: "2px solid green",
            width: "90%",
            maxWidth: "1400px",
            // height:"100%",
          }}
        />

        {/* Content Box */}
        <Box
          style={{
            position: "absolute",
            top: "22rem", // Position relative to the container
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            width: "100%",
            lineHeight: "5rem",
            padding: "0 1rem",
          }}
        >
          <Typography
            variant="p"
            class="upper_p"
            style={{
              color: "rgb(255 67 26)",
              fontSize: "3rem",
              fontFamily: "Bebas Neue, sans-serif",
            }}
          >
            BATTLEBOTS
          </Typography>
          <Typography
            variant="h1"
            style={{
              fontSize: "6rem",
              fontWeight: "bold",
              color: "#fff",
              fontFamily: "Bebas Neue,sans-serif",
              letterSpacing: "4px",
            }}
          >
            EXPERIENCE THE FORGE!
          </Typography>
          <Typography
            variant="p"
            style={{
              fontSize: "1.25rem",
              color: "#fff",
              lineHeight: "1.75rem",
              fontFamily: "Bebas Neue,sans-serif",
              letterSpacing: "2px",
              padding: "2rem 0"
            }}
          >
            Craft your metal masterpiece and unleash mayhem in the arena!
          </Typography>
          <Button
            href="/register"
            variant="p"
            class="upper_p"
            sx={{
              color: "#fff",
              fontSize: "20px",
              fontFamily: "Bebas Neue, sans-serif",
              padding: "10px 20px",
              border: "5px",
              borderRadius: "3px",
              backgroundColor: "rgb(255 67 26)",
            }}
          >
            Register Now!
          </Button>
        </Box>
      </Box>
      
      {/* Contact Section */}
      <Contact style={{ bottom: "0", position: "relative" }} />
    </Box>
  );

}