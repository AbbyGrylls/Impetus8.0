import { IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Contact from "../../components/Contact";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/router";
import EventMag from "../../components/EventManagement";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SponsorCard from "../../components/SponsorCard";
const imageStyles = {
  width: "80vw",
  height: "40vh",
  minWidth: "400px",
  minHeight: "400px",

  background: `url(/images/events/Yantrasearch.jpg)  no-repeat  `,

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
  "div ul li": {},
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
    router.push("/events/heatovation");
  };
  const goBack = () => {
    router.push("/events/cadathon");
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
      name: "Rajdeep",
      phone: "+91 7980430746",
    },
    person2: {
      name: "Ritesh",
      phone: "+91 8291164387",
    },
    person3: {
      name: "Harsh Kumar Tiwari",
      phone: "+91 8240541513",
    },
    person4: {
      name: "Debjit",
      phone: "+91 8167025227",
    },
    person5: {
      name: "Shivansh",
      phone: "+91 8545898275",
    },
  };
  const sponsor = {
    sponsor1: {
      imgname: "Cognitive.jpg", link: "#"
    },
  }
  return (
    <Box sx={{ width: "100vw", background:"black",background:"linear-gradient(180deg, #000000, #18192aab, #04040a)" }} className="center1 mt-10">
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
        {/* <h1 className="text-3xl py-1 font-bold ">Event Sponsor</h1>
        <Box className="cards" style={{width:"100%"}}>
          <SponsorCard sponsor={sponsor.sponsor1} />
        </Box> */}
        <div className="py-2  ">
          <p className="text-lg font-normal text-gray-200  ">
            {" "}
            Get ready for a thrilling adventure! This event is like a treasure hunt, but instead of
buried gold, you&apos;ll be searching for simple machines hidden around our campus. Solve
riddles, work together, and have a blast discovering these mechanical wonders!
          </p>
          <div className="py-2 flex items-center flex-col justify-center ">
            <div className="py-3 flex flex-col items-center justify-center gap-y-2">
              <p className="text-lg">
                <span className="py-3 px-2.5 me-2  md:text-lg text-md font-medium rounded-lg   bg-gray-800 text-gray-400  ">
                  <CalendarMonthIcon className="h-5" />
                  Dates
                </span>
                {/* 9th February 2024 <span className="pl-3"> 4:30pm - 7pm</span> */}
                Coming Soon...
              </p>
            </div>
            <button
              type="button"
              className="mt-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              onClick={(event) =>
                (window.location.href = "https://forms.gle/zVVLVsUvVZgZEuG28")
              }
            >
              Register Now
            </button>
          </div>
        </div>
        <div className="py-2  ">
          <h1 className="text-3xl py-1 font-bold ">Objective</h1><br></br>
          <p className="text-lg font-normal text-gray-200  ">
            - The Challenge: Teams will solve a series of 10 riddles.
            <br></br>
            - The Clues: Each riddle&apos;s answer is a simple machine or mechanism found on
            campus.<br></br>
            - The Race: Teams must locate the machine/mechanism, take a photo, and send it to
            a volunteer to receive the next riddle. <br></br>
            - The Win: The team that finishes all 10 riddles and photo submissions in the
            shortest time wins.<br></br>

          </p>
        </div>
        <div className="py-6 bg-gray-900 mb-2 shadow-md sm:rounded-lg px-0 rounded-md">
          <table className="min-w-full divide-y">
            <tbody className="bg-gray-900 md:text-lg text-gray-300 divide-y divide-gray-800">

              <tr>
                <td className="pl-2 py-2 whitespace-nowrap  md:px-4 ">
                  <div className="text-sm md:text-lg font-medium ">
                    Registration
                  </div>
                </td>
                <td className="pl-2 py-1">
                  <div className="text-sm md:text-lg font-medium ">
                    Till 1 hour before the commencement of event <br></br>(On spot
                    registrations will be available only if slots are available)
                  </div>
                </td>
              </tr>

              <tr>
                <td className="pl-2 py-2 md:px-4  whitespace-nowrap ">
                  <div className="text-sm font-medium  md:text-lg ">
                    Pre-requirements
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    WhatsApp, moderate internet connection
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
                    Team of 3 members
                  </div>
                </td>
              </tr>

              {/* <tr>
                <td className="pl-2 py-2 md:px-4  whitespace-nowrap ">
                  <div className="text-sm font-medium  md:text-lg ">
                    Platform
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    Gallery 5, Department of Mechanical Engineering.
                  </div>
                </td>
              </tr> */}

              <tr>
                <td className="pl-2 py-2 whitespace-nowrap  md:px-4 ">
                  <div className="text-sm  md:text-lg font-medium ">
                    No. of rounds
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">1</div>
                </td>
              </tr>

              <tr>
                <td className="pl-2 py-2 md:px-4  whitespace-nowrap ">
                  <div className="text-sm font-medium  md:text-lg ">
                    Duration of event
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    2 hours approximately
                  </div>
                </td>
              </tr>

              {/* <tr>
                <td className="pl-2 md:px-4 py-2 whitespace-nowrap ">
                  <div className="text-sm font-medium  md:text-lg ">
                    Prizes worth
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    {" "}
                    <span className="font-bold ">Rs.10000</span>
                  </div>
                </td>
              </tr> */}

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
                (window.location.href = "https://drive.google.com/file/d/1RgNY4BK_VPSTxi8lAOyLV8x2QxHOr4ic/view?usp=drive_link")
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
                <li>10 riddles will be numbered 1 to 10.</li>
              </ul>{" "}
              <ul className="BulletNone">
                <li>
                  All the teams need to come to the meeting place from where the
                  event will commence.
                </li>
              </ul>{" "}
              <ul className="BulletNone">
                <li>
                  {" "}
                  Volunteers will be assigned to different teams; each volunteer
                  will cater to multiple teams at once so it is suggested to be
                  patient for their response.
                </li>
              </ul>{" "}
              <ul className="BulletNone">
                <li>
                  {" "}
                  The contact no. of the Volunteer will be provided, who will
                  provide the teams with riddles one after the other, after each
                  one is solved.
                </li>
              </ul>{" "}
              <ul className="BulletNone">
                <li>
                  Team needs to solve the given riddle (answer will be some
                  simple machine or mechanism), find the machine/mechanism
                  around them, click a selfie with the whole team, and send it
                  to the associated volunteer over WhatsApp while mentioning
                  their team’s name too.
                </li>
              </ul>{" "}
              <ul className="BulletNone">
                <li>
                  If the answer is correct the volunteer will give you the next
                  riddle.
                </li>
              </ul>{" "}
              <ul className="BulletNone">
                <li>Team fastest to solve 10 riddles wins.</li>
              </ul>{" "}
              <ul className="BulletNone">
                <li>The next two runners up will be awarded.</li>
              </ul>{" "}
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
                {" "}
                All team members must be present at the common spot before the
                event starts.
              </li>
            </ul>{" "}
            <ul className="BulletNone">
              <li>
                Attempt to bribe the volunteer to get clues or answer will lead
                to disqualification.
              </li>
            </ul>{" "}
            <ul className="BulletNone">
              <li>Do not Ask for help from anyone or misguide anyone.</li>
            </ul>{" "}
            <ul className="BulletNone">
              <li>
                Maintain co-ordination amongst team mates, more than one person
                sending solution & picture to volunteer will lead to penalty.
              </li>
            </ul>{" "}
            <ul className="BulletNone">
              <li>
                {" "}
                <b>Tip</b>: This event aims to get your body moving around the
                campus rather than sit in one place, stay on your feet to
                complete the tasks quickly and to complete elementary exercise
                needed for the day!
              </li>
            </ul>{" "}
          </ul>
        </Box> */}
        <div className="">
          <p className="text-lg font-semibold  text-gray-200  ">
            If any team faces any problem, they are supposed to report to the
            Event Co-Ordinator or Pool Volunteer without much delay.<br></br>
          </p>
          <h1 className="text-xl  font-bold mt-2 md:text-3xl py-2">
            Registration fee
          </h1>
          <li className="py-1">Free (For IIEST students)</li>
          <li>
            <span className="font-bold text-xl">Rs.150</span> (For non-IIEST
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
                  (window.location.href = "https://forms.gle/zVVLVsUvVZgZEuG28")
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
            {/* <EventMag person={person.person3} /> */}
            {/* <EventMag person={person.person4} /> */}
          </Box>
          <Box className=" flex items-center md:flex-row flex-col justify-center md:gap-x-4 gap-y-4 mt-4">
            {/* <EventMag person={person.person1} /> */}
            {/* <EventMag person={person.person2} /> */}
            <EventMag person={person.person3} />
            <EventMag person={person.person4} />
          </Box>
          <Box className=" flex items-center md:flex-row flex-col justify-center md:gap-x-4 gap-y-4 mt-4">
            <EventMag person={person.person5} />
            {/* <EventMag person={person.person2} /> */}
          </Box>
        </Box>
      </section>
      <Contact />
    </Box>
  );
}
