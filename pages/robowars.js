import { Typography, useTheme, Button } from "@mui/material";
import { Box, } from "@mui/system";
import Contact from "../components/Contact";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Timeline from "../components/Timeline";
import NoiseBackground from "../components/NoiseBackground";
import { useEffect, useRef, useState } from "react";

export default function ExpoPage() {
  const [rulebookRef, rulebookInView] = useInView({ threshold: 0.1 });
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
    <Box sx={styles} className="center1" style={{ backgroundColor: "#060606",/* height: "100vh", */}}>
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
            width: "100%",
            marginLeft:"0px",
            marginTop:"-20px",
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
              backgroundColor: "rgb(255, 67 ,26)",
              "&:hover": {
                    backgroundColor: "rgb(200, 47, 18)",
                },
            }}
          >
            Register Now!
          </Button>
        </Box>
      </Box>
      <Box sx={{ //overall box with flex of 1st pg and 2md pg
        display: "flex",
        flexDirection: "column",
        "@media (max-width: 900px)": {
          marginTop: "-100px",
        },
      }}>
      {/* <NoiseBackground style={{zIndex:0,}} /> */}
        <Box //1st pg box starts here
          /* ref={aboutRef} */
          sx={{
            display: "flex",
            zIndex:2,
            flexDirection: { xs: "column", md: "row-reverse" },
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "space-between",
            gap: 2,
            width: "100%",
           flexGrow: 1,
            maxWidth: "1200px",
            "@media (min-width: 900px)": {
              maxWidth:"1400px",
              padding:"0 60px 0 90px",
            },
            mx: "auto",
            /* transform: aboutInView ? "translateY(0)" : "translateY(75px)",
            pacity: aboutInView ? 3 : 0,
            transition: "transform 1s ease-out, opacity 1s ease-out",  */
            position:"relative",
            "@media (max-width: 900px)": {
              marginTop: "-100px",
            },
            overflow:"hidden"
          }}
        >  
          {/* Image Component */}
          <Box ref={aboutRef}
            sx={{
              flex: { xs: "1 1 auto", md: "0 0 40%" },
              display: "flex",
              justifyContent: "center",
              transform: aboutInView ? "translateY(0)" : "translateY(75px)",
            pacity: aboutInView ? 3 : 0,
            transition: "transform 1s ease-out, opacity 1s ease-out", 
            }}
          >
            <Image
              src="/images/robowarimg.png"
              alt="RoboWars Event"
              width={400}
              height={300}
              style={{
                borderRadius: "10px",
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                marginTop: "100px",
              }}
            />
          </Box>

          {/* Text Component */}
          <Box ref={aboutRef}
            sx={{
              flex: { xs: "1 1 auto", md: "0 0 60%" },
              maxWidth: "100%",
              wordWrap: "break-word",
              p: { xs: "20px", sm: "30px", md: "40px" },
              fontSize: { xs: "14px", md: "16px" },
              boxSizing: "border-box",
              overflow: "hidden",
              textAlign: { xs: "center", md: "justify" },
              transform: aboutInView ? "translateY(0)" : "translateY(75px)",
            pacity: aboutInView ? 3 : 0,
            transition: "transform 1s ease-out, opacity 1s ease-out", 
            }}
          >
            <Typography sx={{ fontFamily: "Bebas Neue,sans-serif", color: "rgb(255,67,24)", fontSize: "40px", marginBottom: "15px" }}
            >{">>"}Battlebots</Typography>
            {[
              "Welcome to the electrifying world of BattleBots, where metal warriors clash in the ultimate test of engineering and strategy! This is your gateway to the adrenaline-fueled realm of robot combat, where teams of ingenious builders pit their custom creations against each other in fierce battles of wit and metal.",
              "Explore the intricacies of the BattleBots arena, where every corner holds peril and every move could be the difference between victory and defeat. Engage with a passionate community of fans, share your thoughts, and connect with like-minded enthusiasts who share your love for all things robotic.",
              "Get ready to unleash your inner robot warrior and join us on an unforgettable journey into the heart of BattleBots!",
            ].map((text, idx) => (
              <Typography
                key={idx}
                sx={{
                  fontFamily: "Nunito",
                  lineHeight: 1.5,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  mb: 2,
                  color: "#fff",
                  textAlign: "justify",
                }}
              >
                {text}
              </Typography>
            ))}
            <p><span style={{color: "rgb(255,67,24)"}}>WEIGHT CATEGORY:</span> 15KGS</p>
            <p><span style={{color: "rgb(255,67,24)"}}>ARENA SIZE:</span> 16x16 FEET</p>
          </Box>
          {/* <NoiseBackground style={{zIndex:-1,}} /> */}
        </Box>{/* 1st pg box ends here */}
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            width: "100%",
            marginTop: {
              xs: "20px",
              md: "0px",
            },
            "@media (max-width: 1000px)": {
              flexDirection: "column",
              marginTop: "0px",
            },
            overflow: "hidden",
            position:"relative"
          }}
        > 
        {/* <NoiseBackground style={{zIndex:0,}} /> */}
          {/* Rulebook Section */}
          <Box
            ref={rulebookRef}
            sx={{
              zIndex: 3,
              flex: { xs: "1 1 auto", sm: "0 0 25%" },
              position:"sticky",
              top:"30px",
              width: { xs: "95%", sm: "95%" },
              padding: { xs: 3, sm: 2 },
              boxSizing: "border-box",
              marginLeft: { md: "80px ", xs: "-35px auto" },
              "@media (min-width: 1000px)": {
                marginTop: "-500px",
                marginBottom: "50px",
              },
              borderRadius: "8px",
              opacity: rulebookInView ? 1 : 0,
              transform: rulebookInView ? "translateY(50)" : "translateY(200px)",
              transition: "all 0.7s ease-in-out",
              justifyContent: "left",
            }}
          >
            {/* Rulebook content */}
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Bebas Neue",
                color: "rgb(255, 67, 24)",
                marginTop: "15px",
                textAlign: "left",
                fontSize: { xs: "1.5rem", sm: "2rem" },
              }}
            >
            Rulebook
            </Typography>

            <Box sx={{ maxWidth: "600px", wordWrap: "break-word", padding: "10px 10px 10px 0", margin: "0" }}>
              {[
                "Ensure your bot meets all the rules and specifications.",
                "Download the rulebook for detailed guidelines.",
              ].map((text, idx) => (
                <Typography
                  key={idx}
                  sx={{
                    fontFamily: "Bebas Neue, sans-serif",
                    lineHeight: 1.4,
                    fontSize: "17px",
                    mb: 1.2,
                    color: "#fff",
                    textAlign: "left",
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Box>
           
            <Box sx={{ marginTop: "-10px", marginLeft: "10px", display: "flex", textAlign: "center", alignItems: "center", justifyContent: "flex-start" }}>
              <Button
                href="/docs/robowars-rulebook.pdf"
                sx={{
                  fontFamily: "Bebas Neue, sans-serif",
                  backgroundColor: "rgb(255,67,24)",
                  color: "#fff",
                  borderRadius: "3px",
                  fontSize: "1rem",
                  padding: "12px 20px",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgb(200, 47, 18)",
                  },
                }}
              >
                DOWNLOAD RULEBOOK!
              </Button>
            </Box>
          </Box>
          {/* Timeline Section */}
          <Box ref={rulebookRef}
            sx={{
              width: { xs: "100%", sm: "100%" },
              boxSizing: "border-box",
              justifyContent: "center",
              alignItems: "flex-start",
              marginTop: { xs: "20px", md: "0px" },
              padding: { xs: "10px", sm: "20px" },
              "@media (min-width: 1000px)": {
                marginTop: "100px",
              },
              opacity: rulebookInView ? 1 : 0,
              transform: rulebookInView ? "translateY(50)" : "translateY(200px)",
              transition: "all 0.7s ease-in-out",
            }}
          >
            <Timeline />
          </Box>
        </Box>

      </Box>
      {/* Contact Section */}
      {/* <Box style={{position: "relative",zIndex:1,width:"1400px"}}>
      
      </Box> */}
      {/* <NoiseBackground style={{zIndex:-1,}} /> */}

      <Contact style={{bottom:"0", position: "relative" }} />
    </Box>
  );
}