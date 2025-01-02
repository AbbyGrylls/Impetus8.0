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

  background: `url(/images/events/scrapyard.jpg)  no-repeat  `,

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
    router.push("/events/iQIgnition");
  };
  const goBack = () => {
    router.push("/events/heatovation");
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
      name: "Harsh Tiwari",
      phone: "+91 6232089966",
    },
    person2: {
      name: "Sanjeev Kumar",
      phone: "+91 8545898275",
    },
  };
  const sponsor = {
    sponsor1: {
      imgname: "McPro.png" ,link: "",
    },
  }
  return (
    <Box sx={{ width: "100vw", background:"black" ,background:"linear-gradient(180deg, #000000, #18192aab, #04040a)"}} className="mt-10 center1">
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
          Welcome to SCRAPYARD—an event designed to ignite your creativity and reasoning.
Assemble with your team to tackle a given problem statement, showcasing innovative
ideas that push the boundaries of conventional solutions. It&apos;s a celebration of intellect,
imagination, and collaborative prowess. Join us for a journey into uncharted territories
of innovation.
          </p>
          <div className="py-2 flex items-center flex-col justify-center ">
            <div className="py-3 flex flex-col items-center justify-center gap-y-2">
              <p className="text-lg">
                <span className="py-3 px-2.5 me-2  md:text-lg text-md font-medium rounded-lg   bg-gray-800 text-gray-400  ">
                  <CalendarMonthIcon className="h-5" />
                  Round 1
                </span>
                {/* 10th February, 2024 10:00 AM-11:00 AM */}
                Coming Soon...
              </p>
              <p className="text-lg">
                <span className="py-3 px-2.5 me-2  md:text-lg text-md font-medium rounded-lg   bg-gray-800 text-gray-400  ">
                  <CalendarMonthIcon className="h-5" />
                  Round 2
                </span>
                {/* 10th February, 2024 1:00 PM-3:00 PM */}
                Coming Soon...
              </p>
            </div>
            <button
              type="button"
              className="mt-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              onClick={(event) =>
                (window.location.href = "https://forms.gle/KpHeEY4ev3kNjjmx7")
              }
            >
              Register Now
            </button>
          </div>
        </div>
        <div className="py-2  ">
          <h1 className="text-3xl py-1 font-bold ">Objective</h1>
          <p className="text-lg font-normal text-gray-200  ">
            This is an event of 2 rounds. In the 1st round, Teams will be given
            a test of 30 questions. In the succeeding round the selected few
            teams will be given a problem statement on which they have to use
            their creative skills to make a structure out of scrap that fits the
            problem statement.
          </p>
        </div>
        <div className="py-6 bg-gray-900 mb-2 shadow-md sm:rounded-lg px-0 rounded-md">
          <table className="min-w-full divide-y">
            <tbody className="bg-gray-900 md:text-lg text-gray-300 divide-y divide-gray-800">
              <tr>
                <td className="pl-2 py-2 whitespace-nowrap  md:px-4 ">
                  <div className="text-sm md:text-lg font-medium ">
                    Registration{" "}
                  </div>
                </td>
                <td className="pl-2 py-1">
                  <div className="text-sm md:text-lg font-medium ">
                  Through G-forms, till 1 hour before the commencement of round 1
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 whitespace-nowrap  md:px-4 ">
                  <div className="text-sm  md:text-lg font-medium ">
                    Participation{" "}
                  </div>
                </td>
                <td className="pl-2 py-1">
                  <div className="text-sm md:text-lg font-medium ">
                    A team of maximum 3 people
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2  md:px-4  ">
                  <div className="text-sm font-medium  md:text-lg ">
                    Venue:-{" "}
                  </div>
                </td>
                <td className="pl-2 py-1">
                  <div className="text-sm md:text-lg font-medium ">
                    Round 1- Gallery 6 (Department of Mechanical Engineering, IIEST Shibpur),<br></br> Round 2- Amenities
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 md:px-4  whitespace-nowrap ">
                  <div className="text-sm font-medium  md:text-lg ">
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
                    Duration of rounds:-{" "}
                  </div>
                </td>
                <td className="pl-2 py-1">
                  <div className="text-sm md:text-lg font-medium ">
                    Round 1- 1hr, Round 2- 2hr
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 md:px-4 py-2 whitespace-nowrap ">
                  <div className="text-sm font-medium  md:text-lg ">
                    Prizes worth:
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    {" "}
                    <span className="font-bold ">Rs.8000</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="py-3 mt-2 " style={{marginBottom:"30px"}}>
          <h1 className="text-3xl font-bold ">Rule Book</h1>
          <div style={{display:"flex", justifyContent:"center"}}>
          <button
              type="button"
              className="mt-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              
              onClick={(event) =>
                (window.location.href = "https://drive.google.com/file/d/1RfJw_1AkHs68Y9I8AO2OnJbY0WajoJOe/view?usp=drive_link")
              }
            >
              Click Here
            </button>
          </div>
          
        </div>

        {/* <div className="py-3 mt-2 ">
          <h1 className="text-3xl font-bold ">Flow of the events</h1>
          <Box className="data mt-2" sx={dataStyles}>
            <ul className="bulletArrow">
              <ul className="BulletNone">
                <li>
                  <b>Scrapyard </b> is going to be held in 2 rounds. Candidates
                  qualified from the first round can only participate in second
                  round (No lateral entry allowed)
                </li>
              </ul>{" "}
              <ul className="BulletNone">
                <li>
                  Registration will be done through google forms. And the
                  registered teams will be provided with WhatsApp group link.
                  Through which all the details about the event will be
                  notified.
                </li>
              </ul>{" "}
              <ul className="nestedList">
                <span className="font-bold text-xl text-blue-500  ">
                  Round 1 :
                </span>
                <ul className="BulletNone">
                  <li>
                    {" "}
                    Round 1 is a test. It consists of 30 questions which should
                    be completed within the given time limit of 1hr.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                    The Event team will provide the teams with OMR sheet along
                    with the question paper.{" "}
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                    After the completion of the test, the results will be
                    notified through WhatsApp group.
                  </li>
                </ul>
              </ul>
              <ul className="nestedList">
                <span className="font-bold text-xl text-blue-500  ">
                  Round 2 :
                </span>
                <ul className="BulletNone">
                  <li>
                    {" "}
                    The selected teams which are qualified through round-1 will
                    be given a problem statement.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                    {" "}
                    They should make a structure out of scrap that fits the
                    problem statement with in 2hr time limit.
                  </li>
                </ul>
              </ul>
            </ul>
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
                Registered candidates are to be present in the amenities before
                the commencement of the event.
              </li>
            </ul>{" "}
            <ul className="BulletNone">
              <li>One participant cannot be a part of more than one team. </li>
            </ul>{" "}
            <ul className="BulletNone">
              <li>
                No change in team structure is permitted after the team is
                registered.
              </li>
            </ul>{" "}
            <ul className="BulletNone">
              <li>
                {" "}
                Usage of digital devices is strictly prohibited. Violation leads
                to immediate disqualification.
              </li>
            </ul>{" "}
            <li>
              <ul className="nestedList">
                <span className="font-bold text-xl text-blue-500  ">
                  Round 1 :
                </span>
                <ul className="BulletNone">
                  <li>
                    Participants are required to bring ball point pen along with
                    them to fill the OMR sheet.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                    {" "}
                    Any type of malpractice will not be entertained during the
                    test.
                  </li>
                </ul>
              </ul>
            </li>
            <li>
              <ul className="nestedList">
                <span className="font-bold text-xl text-blue-500  ">
                  Round 2 :
                </span>
                <ul className="BulletNone">
                  <li>All the requirements for this round will be provided.</li>
                </ul>
                <ul className="BulletNone">
                  <li>Plagiarism is prohibited.</li>
                </ul>
                <ul className="BulletNone">
                  <li>
                    EVENT CO-ORDINATER HAVE THE FINAL SAY IN ALL ASPECTS IN THIS
                    EVENT.
                  </li>
                </ul>
              </ul>
            </li>
          </ul>
        </Box> */}
        <div className="">
          <p className="text-lg font-semibold  text-gray-200  ">
            NOTE:- EVENT COORDINATORS HAVE THE FINAL SAY IN ALL ASPECTS IN THIS
            EVENT.<br></br>
          </p>
          <h1 className="text-xl  font-bold mt-2 md:text-3xl py-2">
            Registration fee
          </h1>
          <li className="py-1">Free (For IIEST students)</li>
          <li>
            <span className="font-bold text-xl">Rs.120</span> (For non-IIEST
            students)
          </li>
        </div>
        <Box>
          <Box className="fee">
            <Box sx={{ width: "100%" }} className="py-4 center1">
              <button
                type="button"
                className=" font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                onClick={(event) =>
                  (window.location.href = "https://forms.gle/KpHeEY4ev3kNjjmx7")
                }
              >
                Register Now
              </button>
            </Box>
          </Box>
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
