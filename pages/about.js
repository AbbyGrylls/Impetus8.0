"use-client";

import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import ContactCard from "../components/ContactCard";
import Contact from "../components/Contact";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ImageListComp from "../components/ImageListComp";
import Divider2 from "../components/Divider2";

import QuizComponent from "../components/Quizz";
import Leaderboard from "../components/Leaderboard";

export default function AboutPage() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [propertyValue, setPropertyValue] = useState("absolute");
  // const [TopValue, setTopValue] = useState('400px');
  const [TopValue, setTopValue] = useState("45vh");
  const [HeightValue, setHeightValue] = useState("50%");
  const theme = useTheme();
  const videoId = "Y9VOzNnr8aY";

  const styles = {
    width: "100vw",
    ".videos": {
      width: "100vw",
      ".overlay": {
        position: "absolute",
        // backgroundColor: "steelblue",
        opacity: "0.5",
        zIndex: "1",
        width: "100vw",
        height: "100vh",
      },
      "#trailer": {
        [theme.breakpoints.down("md")]: {
          // display: "none",
        },
        width: "100vw",
        height: "100vh",
        objectFit: "contain",
      },
      filter: "brightness(80%)",
    },
    h1: {
      m: "50px 0",
      fontSize: "60px",
      textAlign: "center",
    },
    "div .content": {
      maxWidth: "1000px",
      p: {
        // textAlign: "justify",
        margin: "30px",
      },
      ".date": {
        display: "block",
        textAlign: "center",
        textIndent: "0",
        margin: "30px 0",
        fontSize: "32px",
        fontSize: {
          xs: "24px",
        },
        margin: {
          xs: "5px auto",
        },
      },
    },
    ".contact": {
      width: "100%",
      maxWidth: "1000px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      mb: "50px",
    },
    ".aboutImpetus, .aboutDept": {
      margin: "50px 0",
      marginTop: "170px",
    },
  };

  const YTvideoStyle = {
    position: propertyValue,
    zIndex: "1",
    top: TopValue,
    width: "100%",
    height: HeightValue,
    marginTop: "100px",
  };

  // const muteVideo = () => {
  //   const scrollPosition = window.scrollY;
  //   if (scrollPosition === 0) setMuted(false);
  //   else setMuted(true);
  // };

  // const toggleVolume = () => {
  //   setMuted(!muted);
  // };

  const handleSize = (e) => {
    const width = e.target.innerWidth;
    if (width < 8) videoRef.current.pause();
    else {
      setMuted(true);
      videoRef.current.play().catch((e) => console.log(e));
    }
  };

  useEffect(() => {
    if (window.innerWidth > 8) {
      videoRef.current?.play().catch((e) => console.log(e));
    } else {
      videoRef.current?.pause();
    }
    // window.addEventListener("scroll", muteVideo);
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
      // window.removeEventListener("scroll", muteVideo);
      videoRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setPropertyValue("relative");
        setTopValue("0");
        setHeightValue("40vw");
      } else {
        setPropertyValue("absolute");
        setTopValue("45vh");
        setHeightValue("50%");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set the initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

 

  return (
    <Box sx={styles} className="center1">
      <Box className="videos">
        <div className="overlay"></div>
        <video
          // onClick={toggleVolume}
          ref={videoRef}
          muted={muted}
          id="trailer"
          className="tvid"
          autoPlay
          loop
        >
          <source src="images/about/teaser.mp4" type="video/mp4" />
        </video>
        


        {/* <Divider2 /> */}
      </Box>
      {/* <Box style={YTvideoStyle}> */}
      {/*   <iframe */}
      {/*     src={`https://www.youtube.com/embed/${videoId}`} */}
      {/*     style={{ */}
      {/*       aspectRatio: "16/9", */}
      {/*       height: "100%", */}
      {/*       width: "auto", */}
      {/*       margin: "0 auto", */}
      {/*       // border:"solid 2px #00A7E7", */}
      {/*       borderRadius: "10px", */}
      {/*     }} */}
      {/*     frameBorder="0" */}
      {/*     allowFullScreen */}
      {/*     title="My YouTube Video" */}
      {/*   /> */}
      {/* </Box> */}

      <Box className="aboutImpetus center1">
        <Image
          sx={{ mt: "50px" }}
          src="/images/impetusLogo.png"
          height="300"
          width="300"
          alt="SME"
        />
        <Box className="content" style={{ textAlign: "justify" }}>
          <Typography variant="p">
            Theoretical knowledge will serve no purpose until combined with
            skills and real-world knowledge. IMPETUS is an attempt to bring the
            industry closer to the students at IIEST, Shibpur. It is organized
            annually by the Society of Mechanical Engineers (SME) on behalf of
            the department of Mechanical Engineering. This occasion unites
            experts from both industries and education on IIEST&apos;s soil and
            provides opportunity to the students to get the best of both worlds.
            The various events in impetus are designed to enrich one&apos;s
            practical knowledge, while they also give you a chance to interact
            with leading industry professionals in the field of mechanical
            engineering.
            <br></br>
            So, no matter where you come from, we will make sure you add a
            feather to your cap on the way back.
          </Typography>
        </Box>
      </Box>
      <Box className="aboutDept center1">
        <Image src="/images/SMEwhite.png" height="300" width="300" alt="SME" />
        <Box className="content" style={{ textAlign: "justify" }}>
          <Typography variant="p">
            It was on 4th March, 1921, a diploma course on mechanical
            engineering was started and this was the beginning of the golden
            journey for the department. The first degree level course started on
            17th july 1930 and the post graduate courses began in 1954. Ever
            since it&apos;s inauguration, the department has had a rich legacy
            of producing extremely talented engineers who have been top
            performers in their domain and are still adding feathers to the cap.
            The department has earned its name and fame across the country as
            well as in the world through its methodical approach of teaching and
            research in it&apos;s field. The faculty consists of erudite
            teachers and almost all the faculty members have earned the credit
            of having quite a few praiseworthy research papers published in
            internationally acclaimed research journals. The academic and
            cultural society of department of mechanical engineering is the
            Society of Mechanical Engineers (SME). A number of international
            societies have their student section: Society of Automotive
            Engineers (SAE), American Society of Mechanical Engineers (ASME) and
            Indian Society of Heating, Refrigerating and Air conditioning
            Engineers (ISHRAE). Prominent speakers from the academic world and
            industrial domain are often invited for delivering lectures and
            Industrial visits are also organised by the department for making
            the students aware about the modern developments in the industries.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography
          variant="h2"
          style={{
            fontFamily: "Rowdies",
            margin: "0 30px",
            textAlign: "center",
          }}
        >
          SOME MOMENTS OF PREVIOUS EDITIONS
        </Typography>

        <br></br>

        <ImageListComp />

        {/* QUIZZ section */}
        <Box className="quizzBox"
          sx={{margin:"100px 50px 100px 50px",
          // backgroundColor:"#999",
          border:"solid #333 5px",
          borderRadius:"20px"}}>
          <Typography sx={{fontFamily:"Rowdies", textAlign:"center",fontSize:"5rem"}}>Quizz</Typography>
          <Box sx={{display:"flex", flexDirection:{
            lg:"row",
            xs:"column"
          }}}>
            <Box className="quizzBox_inner" style={{marginRight:"10px",width:"70%",maxWidth:"600px", minWidth:"280px", margin:"0 auto", flex:"0.7"}}>
              <QuizComponent />
            </Box>
          <Leaderboard />
          </Box>
        </Box>
        
      </Box>
      <Contact />
    </Box>
  );
}
