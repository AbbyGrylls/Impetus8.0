import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import Contact from "../../components/Contact";
import EventMag from "../../components/EventManagement";
import SponsorCard from "../../components/SponsorCard";
const imageStyles = {
  width: "80vw",
  height: "40vh",
  minWidth: "400px",
  minHeight: "400px",
  background: `url(/images/events/iQIgnition.jpg)  no-repeat  `,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  mt: "50px",
};

const dataStyles = {
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
      name: "Dibyajyoti",
      phone: "+91 7699249687",
    },
    person2: {
      name: "Arunabh",
      phone: "+91 6232089966",
    },
  };
  const sponsor = {
    sponsor1: {
      imgname: "IMechE.jpg",link: "https://www.imeche.org/" 
    },
  }
  return (
    <Box sx={{ width: "100vw", background:"black",background:"linear-gradient(180deg, #000000, #18192aab, #04040a)" }} className="mt-10 center1">
      <Box sx={headerStyles} className="center2">
        <IconButton onClick={goBack} className="left">
          <ArrowBackIcon fontSize="large" color="white" />
        </IconButton>
        <Box sx={imageStyles}></Box>
        <IconButton onClick={goNext} className="right">
          <ArrowForwardIcon fontSize="large" color="white" />
        </IconButton>
      </Box>
      <section className="py-10 max-w-screen-lg md:px-10 px-4">
      {/* <h1 className="text-3xl py-1 font-bold ">Event Sponsor</h1> */}
        {/* <Box className="cards" style={{width:"100%"}}>
          <SponsorCard sponsor={sponsor.sponsor1} />
        </Box> */}
        <div className="py-2  ">
          <p className="text-lg font-normal text-gray-200  ">
          IQ Ignition is a high-intensity quiz competition that tests your knowledge across various
domains. Participants will be challenged with a series of questions, ranging from general
knowledge to technical expertise.
          </p>
          <div className="py-2 flex items-center flex-col md:flex-row justify-center gap-auto md:gap-[60px]">
          <div className="py-3 mt-2 " style={{marginBottom:"10px"}}>
          <h1 className="text-2xl font-bold ">Rule Book</h1>
          <div style={{display:"flex", justifyContent:"center",marginTop:"5px"}}>
          <button
              type="button"
              className="mt-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              
              onClick={(event) =>
                (window.location.href = "https://drive.google.com/file/d/1YTc_bKUsOa3fYqN0dgZiRwkDu6nVh3xR/view?usp=sharing")
              }
            >
              Click Here
            </button>
          </div>
          
        </div>
            <div className="py-3 flex flex-col items-center justify-center gap-y-2">
              <p className="text-lg">
                <span className="py-3 px-2.5 me-2  md:text-lg text-md font-medium rounded-lg   bg-gray-800 text-gray-400  ">
                  <CalendarMonthIcon className="h-5" />
                  Round 1 & 2
                </span>
                {/* 10th February 2024 , 11:00am - 12:00pm */}
                8th Feb 2025, 10:00am - 11:30am
              </p>
              <button
              type="button"
              className="mt-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              onClick={(event) =>
                (window.location.href = "https://forms.gle/b3SgxfnNhuWQ3bFc6")
              }
            >
              Register Now
            </button>
            </div>
            <div className="">
          <h1 className="text-xl  font-bold mt-2 md:text-3xl py-2">
            Registration fee
          </h1>
          <li className="py-1">Free (For IIEST students)</li>
          <li>
            <span className="font-bold text-xl">Rs. 50</span> (For non-IIEST
            students)
          </li>
        </div>
          </div>
        </div>
        <div className="py-6 bg-gray-900 mb-2 shadow-md sm:rounded-lg px-0 rounded-md">
          <table className="min-w-full divide-y">
            <tbody className="bg-gray-900 md:text-lg text-gray-300 divide-y divide-gray-800">
              <tr>
                <td className="pl-2 py-2 whitespace-nowrap  md:px-4 ">
                  <div className="text-sm md:text-lg font-medium ">
                    Registration (online)
                  </div>
                </td>
                <td className="pl-2 py-1">
                  <div className="text-sm md:text-lg font-medium ">
                    Till 2 hour before the commencement of Round 1
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 whitespace-nowrap  md:px-4 ">
                  <div className="text-sm md:text-lg font-medium ">
                    Registration (offline)
                  </div>
                </td>
                <td className="pl-2 py-1">
                  <div className="text-sm md:text-lg font-medium ">
                    On spot registrations subject to availability.
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 whitespace-nowrap  md:px-4 ">
                  <div className="text-sm  md:text-lg font-medium ">
                    Participation
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                  Teams of size (1-3)
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 whitespace-nowrap  md:px-4 ">
                  <div className="text-sm  md:text-lg font-medium ">
                    Venue
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                  Alumni Seminar Hall, S&T First Floor, IIEST Shibpur.
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 whitespace-nowrap  md:px-4 ">
                  <div className="text-sm  md:text-lg font-medium ">
                    No. of rounds
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">2</div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 md:px-4  whitespace-nowrap ">
                  <div className="text-sm font-medium  md:text-lg ">
                    Duration of each round
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    Round 1- 45 mins, Round 2- 45 mins
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 md:px-4 py-2 whitespace-nowrap ">
                  <div className="text-sm font-medium  md:text-lg ">
                    Prizes worth
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    {" "}
                    <span className="font-bold ">Rs. 8,000</span>
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>

        {/* <div className="py-3 mt-2 " style={{marginBottom:"30px"}}>
          <h1 className="text-3xl font-bold ">Rule Book</h1>
          <div style={{display:"flex", justifyContent:"center"}}>
          <button
              type="button"
              className="mt-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              
              onClick={(event) =>
                (window.location.href = "https://drive.google.com/file/d/1RbPAJOwPjbLF78HItCrv129snU3M0LtT/view?usp=drive_link")
              }
            >
              Click Here
            </button>
          </div>
          
        </div> */}

        {/* <div className="py-3 mt-2 ">
          <h1 className="text-3xl font-bold ">Flow of the events</h1>
          <Box className="data mt-2" sx={dataStyles}>
            <p className="text-lg font-normal text-gray-200  ">
              The quiz will be a short format quiz held in two rounds. The
              questions will be a general quiz with plenty of hints for working
              out the answers with intelligent guesses. The quizmaster has
              promised that there will not be a single answer that you
              haven&apos;t heard before, so anybody with a knack for quizzing
              can easily participate and win laurels
            </p>
          </Box>
        </div>
        <div className="py-3  ">
          <h1 className="md:text-3xl text-2xl font-bold ">
            Rules and Regulations
          </h1>
          <p className="text-lg font-normal text-gray-200  "></p>
        </div>
        <Box className="data" sx={dataStyles}>
          <ul className="bulletArrow">
            <ul className="BulletNone">
              <li>
                {" "}
                Teams will have to register 2 hours before the deadline of the
                registration form
              </li>
            </ul>{" "}
            <ul className="BulletNone">
              <li>
                On-spot registrations on subject to availability of slots.
              </li>
            </ul>{" "}
            <ul className="BulletNone">
              <li>
                The quiz will be of two rounds. First round will have 10
                questions. +10/0- for each question.
              </li>
            </ul>{" "}
            <ul className="BulletNone">
              <li>
                The second round will be of bounce and pounce format. Teams
                pouncing will get +10/-5, for each question. Teams who will
                answer the questions on bounce will get +5/-0 for each question.
              </li>
            </ul>{" "}
            <ul className="BulletNone">
              <li> Quizmaster&apos;s say is final.</li>
            </ul>{" "}
          </ul>
        </Box> */}
        <div className="">
          <p className="text-lg font-semibold  text-gray-200  ">
            If any team faces any problem, they are supposed to report to the
            Event Co-Ordinator or Pool Volunteer without much delay.<br></br>
          </p>
          {/* <h1 className="text-xl  font-bold mt-2 md:text-3xl py-2">
            Registration fee
          </h1>
          <li className="py-1">Free (For IIEST students)</li>
          <li>
            <span className="font-bold text-xl">Rs.75</span> (For non-IIEST
            students)
          </li> */}
        </div>
        <Box>
          {/* <Box className="fee">
            <Box sx={{ width: "100%" }} className="py-4 center1">
              <button
                type="button"
                className=" font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                onClick={(event) =>
                  (window.location.href = "https://forms.gle/b3SgxfnNhuWQ3bFc6")
                }
              >
                Register Now
              </button>
            </Box>
          </Box> */}
          <Typography
            variant="h3"
            sx={{ textAlign: "center", marginTop: "20px" }}
            className="text-xl  font-bold mt-2 md:text-3xl py-2"
          >
            Event Coordinators
          </Typography>
          <Box className=" flex items-center md:flex-row flex-col justify-center md:gap-x-4 gap-y-4 mt-4">
            <EventMag person={person.person1} />
            <EventMag person={person.person2} />
          </Box>
        </Box>
      </section>
      <Contact />
    </Box>
  );
}
