import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import Contact from "../../components/Contact";

const imageStyles = {
  width: "80vw",
  height: "40vh",
  minWidth: "400px",
  minHeight: "400px",

  background: `url(/images/fun_pg.jpg)  no-repeat  `,

  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  mt: "50px",
};

const dataStyles = {
  margin: "50px",
  textAlign: "justify",
  maxWidth: "800px",
  ".data": {
    margin: "50px 0",
  },
  "div span,ul": {
    display: "block",
    margin: "20px 0",
  },
  "div ul li": {
    textIndent: "30px",
  },
  ".fee": {
    width: "100%",
    button: {
      margin: "10px 0",
    },
  },
  ".contact": {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: "30px 0",
  },
  ".data h2, .fee h3": {
    margin: "40px 0",
  },
};

export default function CadathonPage() {
  const theme = useTheme();
  const router = useRouter();

  const goBack = () => {
    router.push("/events/valorant");
  };

  const headerStyles = {
    width: "800px",
    maxWidth: "90vw",
    position: "relative",
    button: {
      position: "absolute",
      border: "1px solid white",
      backdropFilter: "blur(10px)",
    },
    ".left": {
      left: "0",
      [theme.breakpoints.down("md")]: {
        top: "100px",
      },
    },
    ".right": {
      right: "0",
      [theme.breakpoints.down("md")]: {
        bottom: "50px",
      },
    },
  };
  return (
    <Box sx={{ width: "100vw", background: "black" }} className="center1 mt-10">
      <Box sx={headerStyles} className="center2">
        <IconButton onClick={goBack} className="left">
          <ArrowBackIcon fontSize="large" color="white" />
        </IconButton>
        <Box sx={imageStyles}></Box>
      </Box>
      <Box sx={dataStyles} className="data">
        <Box>
          <Typography sx={{}} variant="p">
            Impetus 8.0 brings to you a proper carnival game of skill. Dodge
            between one bunker to another to make a lead over others . Test the
            cognitive and hand coordination in breaking down the complete
            pyramid. Try your hands on darts and wire wand loop. Take help with
            your partner in moving through the proper pathway in completing the
            event. If you can manage all these , some prizes are surely waiting
            for you.
          </Typography>
          <br></br>
          <br></br>
          <h1 className="md:text-3xl text-2xl font-bold ">Balloon Dart Game</h1>
          <Typography variant="p">
            A popular and engaging funfair game that blends excitement and
            accuracy. Using a set of darts, participants must burst balloons
            attached to a backdrop. The challenge lies in using the dart&apos;s
            sharp point to accurately hit and pop the balloons, each of which
            may conceal a reward.<br></br>
            <span className="py-3 px-2.5 me-2  md:text-lg text-md font-medium rounded-lg text-center  bg-gray-800 text-gray-300  ">
              {" "}
              Venue - Parade Ground, IIEST Shibpur.
            </span>
          </Typography>

          <br></br>
          <br></br>
          <h1 className="md:text-3xl text-2xl font-bold ">Buzz Wire Game</h1>
          <Typography variant="p">
            A captivating and challenging activity that requires a steady hand
            and precise coordination. The game involves guiding a metal loop
            along an electrified wire, avoiding contact with the wire. If the
            loop gets in contact with the wire, it triggers a buzzing sound, and
            the player wins.<br></br>
            <span className="py-3 px-2.5 me-2  md:text-lg text-md font-medium rounded-lg text-center  bg-gray-800 text-gray-300  ">
              {" "}
              Venue - Parade Ground, IIEST Shibpur.
            </span>
          </Typography>

          <br></br>
          <br></br>
          <h1 className="md:text-3xl text-2xl font-bold ">Robosoccer</h1>
          <Typography variant="p">
            Participants engage in a thrilling one-on-one competition where each
            player is provided with robots. Two players compete in a game where
            they control robots on a field, aiming to skillfully navigate,
            strategically dribble the soccer ball, and score goals.<br></br>
            <span className="py-3 px-2.5 me-2  md:text-lg text-md font-medium rounded-lg text-center  bg-gray-800 text-gray-300  ">
              {" "}
              Venue - Parade Ground, IIEST Shibpur.
            </span>
          </Typography>
        </Box>
      </Box>
      <Contact />
    </Box>
  );
}
