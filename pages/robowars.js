import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Contact from "../components/Contact";
import Image from "next/image";
export default function ExpoPage() {
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
    <Box sx={styles} style={{ backgroundColor:"#060606" }}>
      {/* Hero Section */}
      <Box
        className="heroRobowars"
        style={{
          position: "relative", // Relative position to contain overlapping elements
          height: "100vh", // Set height for proper stacking
          width: "100%",
          overflow: "hidden", // Prevent elements from spilling out
          // backgroundColor:"black"
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
            filter:"brightness(10)", 
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
            bottom: "-4rem", 
            margin:"0 5vw",
            // bottom: "0px", 
            // left: "50%",
            // transform: "translate(-50%, -50%)", 
            zIndex: 1,
            // border: "2px solid green",
            width:"90%",
            maxWidth:"1400px",
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
            width:"100%",
            lineHeight:"5rem",
            padding:"0 1rem",
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
              fontFamily:"Bebas Neue,sans-serif",
              letterSpacing:"4px",
            }}
          >
            EXPERIENCE THE FORGE!
          </Typography>
          <Typography
            variant="p"
            style={{
              color: "#555",
              fontSize: "1.25rem",
              color: "#fff",
              lineHeight:"1.75rem",
              fontFamily:"Bebas Neue,sans-serif",
              letterSpacing:"2px",
              padding:"2rem 0"
            }}
          >
            Craft your metal masterpiece and unleash mayhem in the arena!
          </Typography>
        </Box>
      </Box>
      <Box style={{
        textAlign:"center",
        padding:"3rem 0",
        marginBottom:"5rem",
        fontSize:"2rem",
        fontFamily:"Bebas Neue",
        letterSpacing:"2px",

         }}>Coming <span style={{
          // color:"rgb(255 67 26)"
          }}>Soon</span>...</Box>
  
      {/* Contact Section */}
      <Contact style={{ bottom: "0", position: "relative" }} />
    </Box>
  );
  
}
