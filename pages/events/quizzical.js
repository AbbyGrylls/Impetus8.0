import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Contact from "../../components/Contact";
import ContactCard from "../../components/ContactCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";
import EventMag from "../../components/EventManagement";

const imageStyles = {
  width: "80vw",
  height: "40vh",
  minWidth: "400px",
  minHeight: "400px",

  background: `url(/images/quizzical_pg.jpg)  no-repeat  `,

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

  const goNext = () => {
    router.push("/events/deathrace");
  };
  const goBack = () => {
    router.push("/events/scrapyard");
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
  const person = {
    person1: {
      name: "Ajay Khandelwal ",
      phone: "+91 7792062842",
    },
    person2: {
      name: "Shreya Jaiswal ",
      phone: "+91 6394615691",
    },
  };
  return (
    <Box sx={{ width: "100vw" , background:"black",background:"linear-gradient(180deg, #000000, #18192aab, #04040a)"}} className="center1">
      <Box sx={headerStyles} className="center2">
        <IconButton onClick={goBack} className="left">
          <ArrowBackIcon fontSize="large" color="white" />
        </IconButton>
        <Box sx={imageStyles}></Box>
        <IconButton onClick={goNext} className="right">
          <ArrowForwardIcon fontSize="large" color="white" />
        </IconButton>
      </Box>
      <Box sx={dataStyles} className="data">
        <Box>
          <Typography sx={{}} variant="p">
            To instil the essence of quizzing, IMechE IIEST Shibpur brings to
            you a Grand General Technical Quiz: IQ Ignition under the banner of
            Impetus 8.0.
          </Typography>

          <ul className="nestedList" style={{ fontSize: "21px" }}>
            Dates: 18th February, 2023 10:45am
          </ul>
          <Box sx={{ width: "100%", marginTop: "30px" }} className="center1">
            <Button
              variant="contained"
              size="large"
              onClick={(event) =>
                (window.location.href = "https://forms.gle/qmsV4qKKxAoFGUhe9")
              }
            >
              Register Now
            </Button>
          </Box>
        </Box>
        <Box className="data">
          <Typography variant="h2">Basic Information</Typography>
          <ul className="bulletArrow">
            <li>
              <ul className="BulletNone">
                <li>
                  Registration(online) - Till 2 hours before commencement of
                  Round 1
                </li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>
                  Registration (Offline)- On spot registrations subject to
                  availability.
                </li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>Participation - Teams of size (1-3)</li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>
                  Venue - Gallery 6, Department of Mechanical Engineering (IIEST
                  Shibpur)
                </li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>No. of Rounds - 2</li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>Duration of each round- Round 1-30 min & Round 2-30min</li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>
                  Prizes worth <b>Rs.8000/-</b>
                </li>
              </ul>
            </li>
          </ul>
          <Typography variant="h2">Flow of the events</Typography>
          <Typography sx={{}} variant="p">
            The quiz will be a short format quiz held in two rounds. The
            questions will be a general quiz with plenty of hints for working
            out the answers with intelligent guesses. The quizmaster has
            promised that there will not be a single answer that you
            haven&apos;t heard before, so anybody with a knack for quizzing can
            easily participate and win laurels.
          </Typography>
          <Typography variant="h2">Rules and Regulations</Typography>
          <ul className="bulletArrow">
            <li>
              <ul className="BulletNone">
                <li>
                  Teams will have to register 2 hours before the deadline of the
                  registration form.
                </li>
              </ul>
            </li>

            <li>
              <ul className="BulletNone">
                <li>
                  On-spot registrations on subject to availability of slots.
                </li>
              </ul>
            </li>

            <li>
              <ul className="BulletNone">
                <li>
                  The quiz will be of two rounds. First round will have 10
                  questions. +10/0- for each question.
                </li>
              </ul>
            </li>

            <li>
              <ul className="BulletNone">
                <li>
                  The second round will be of bounce and pounce format. Teams
                  pouncing will get +10/-5, for each question. Teams who will
                  answer the questions on bounce will get +5/-0 for each
                  question.
                </li>
              </ul>
            </li>

            <li>
              <ul className="BulletNone">
                <li>Quizmaster&apos;s say is final.</li>
              </ul>
            </li>
            <li>
              <ul className="BulletNone">
                <li>Team size 1-3 people.</li>
              </ul>
            </li>
          </ul>
        </Box>
        <Box>
          <Typography variant="h6">
            If any team faces any problem, they are supposed to report to the
            Event Co-Ordinator or Pool Volunteer without much delay.<br></br>
            <br></br>
          </Typography>

          <Box className="fee">
            <Typography variant="h3">Registration fee: </Typography>
            <ul className="nestedList" style={{ fontSize: "21px" }}>
              <li>
                <ul className="BulletNone">
                  <li>Free (for IIEST Students)</li>
                </ul>
              </li>
              <li>
                <ul className="BulletNone">
                  <li>Rs.70 (for non-IIEST Students)</li>
                </ul>
              </li>
            </ul>
            <Box sx={{ width: "100%" }} className="center1">
              <Button
                variant="contained"
                size="large"
                onClick={(event) =>
                  (window.location.href = "https://forms.gle/qmsV4qKKxAoFGUhe9")
                }
              >
                Register Now
              </Button>
            </Box>
          </Box>
          <Typography
            variant="h2"
            sx={{ textAlign: "center", marginTop: "20px" }}
          >
            Event Coordinators
          </Typography>
          <Box className="contact">
            <EventMag person={person.person1} />
            <EventMag person={person.person2} />
          </Box>
        </Box>
      </Box>
      <Contact />
    </Box>
  );
}
