import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef , useState} from "react";
import LearnMore from "./LearnMore";
import { useInViewport } from "react-in-viewport";

export default function EventDescription({ index, setCurrIdx, currIdx }) {
  const theme = useTheme();
  const ref = useRef(null);
  const headingRef = useRef(null);
  const [TopValue, setTopValue] = useState('45vh');
  const { inViewport } = useInViewport(headingRef);

  const styles = {
    "div h2": {
      fontSize: "40px",
      fontWeight: "700",
      marginBottom: "13px",
      letterSpacing: "2px",
    },
    "div span": {
      fontSize: "18px",
      lineHeight: "0.5",
    },
    width: "500px",
    maxWidth: "90vw",
    textAlign: "justify",
    height: "100vh",
    position: "relative",
    left: "50vw",
    div: {
      position: "relative",
      top: "35vh",
    },
    [theme.breakpoints.down("lg")]: {
      left: "5vw",
      div: {
        // top: "50vh",
        top:TopValue,
        // marginBottom: "300px",
      },
    },
    scrollSnapAlign: "center",
  };

  const handleScroll = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        // setPropertyValue('relative');
        setTopValue('43vh');
        // setHeightValue('40vw');

      } else {
        // setPropertyValue('absolute');
        setTopValue('35vh');
        // setHeightValue('50%');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially to set the initial value

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (index === currIdx) handleScroll();
  }, [currIdx, index]);
  const heading = [
    "CADathon",
    "Yantra Search",
    "Heatovation",
    "Scrapyard",
    "IQ Ignition",
    "Death Race",
    "Drone Pursuit",
    "Valorant",
    "Fun Bunkers",
  ];
  const link = [
    "cadathon",
    "yantrasearch",
    "heatovation",
    "scrapyard",
    "iQIgnition",
    "deathrace",
    "dronePursuit",
    "valorant",
    "fun",
  ];

  const cadathon =
    'This competition aims to develop the idea of assembly of 3D structures on a CAD software.This event will be organized by the Society of Automotive Engineers (SAE), IIEST Shibpur  under the banner of "Impetus 7.0".';
  const yantrasearch =
    "This event organized by ASME IIEST, aims to give you all the excitement of treasure hunt.You can look forward to having fun while solving mysteries together and hunting down simple machines in our college campus.";
  const heatovation =
    '"Heatovation", organized by IMPETUS 7.0 in association with ISHRAE-IIEST Kolkata chapter empowers social entrepreneurs to create a culture for entrepreneurship and to promote entrepreneurial education in the field of HVAC.';
  const scrapyard =
    'Innovation need not come from what everyone considers to be a resource; it can also come from making use of what others consider to be waste and producing something useful. With this thought in mind IMPETUS 7.0 presents to you "Scrapyard"';
  const quiz =
    "To instil the essence of quizzing, IMechE IIEST, Shibpur brings to you a Grand General Technical Quiz: ' Suspects' under the banner of Impetus 7.0 .The quiz tests and showcases students' technical knowledge and skills.";
  const deathrace =
    "The Death Race is a thrilling competition that brings together talented individuals to showcase their skills in building and maneuvering a robot through a challenging track filled with obstacles. ";
  const dronePursuit =
    "Through Drone Pursuit, IMPETUS and ROBODARSHAN give you the chance to showcase your skills. In Drone Pursuit, participants fly drones through hurdles and gates to win the race. Bring your models to life and make this competition a great success.";
  const valorant =
    "The Valorant gaming event is a competition that brings together talented players to showcase their skills and compete for recognition. It is an exciting opportunity for Valorant fans to experience high-level gameplay and celebrate the top talent in the game.";
  const fun =
    "Impetus 7.0 presents a carnival game of skill. Dodge between bunkers to lead, test hand coordination with pyramid breaking, aim for prizes with darts and wire wand loop. Work with a partner to navigate the proper pathway for a chance to win rewards.";

  const content = [
    cadathon,
    yantrasearch,
    heatovation,
    scrapyard,
    quiz,
    deathrace,
    dronePursuit,
    valorant,
    fun,
  ];

  return (
    <Box ref={ref} sx={styles}>
      <Box>
        <h1
          ref={headingRef}
          class="mb-4 text-2xl font-extrabold tracking-tight xs:text-center leading-none text-white  lg:text-4xl"
        >
          {heading[currIdx % 9]}
        </h1>

        <p className="lg:tracking-normal  relative sm:tracking-tight text-lg font-normal lg:text-xl sm:px-18 sm:text-xm text-justify rtl:text-right text-gray-300">
          {content[currIdx % 9]}
        </p>
        <LearnMore link={`/events/${link[currIdx % 9]}`} />
        <button
              type="button"
              className="mt-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              onClick={(event) =>
                (window.location.href = "https://forms.gle/pxEokiDjCRBXDMah7")
              }
            >
              Register Now
        </button>
      </Box>
    </Box>
  );
}
