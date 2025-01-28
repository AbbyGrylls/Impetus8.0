import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import Contact from "../../components/Contact";
import EventMag from "../../components/EventManagement";
const imageStyles = {
  width: "80vw",
  height: "40vh",
  minWidth: "400px",
  minHeight: "400px",
  background: `url(/images/events/Deathrace.jpg)  no-repeat  `,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  mt: "50px",
};

const dataStyles = {
  textAlign: "justify",
  maxWidth: "800px",
  ".data": {
    margin: "50px 0 0 0",
  },
  "div span,ul": {
    display: "block",
    margin: "10px 0",
  },
  "div ul li": {
    textIndent: "10px",
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
  ".nestedList": {
    margin: "0",
  },
  ".data h2, .fee h3": {
    margin: "40px 0",
  },
};

export default function CadathonPage() {
  const theme = useTheme();
  const router = useRouter();

  const goNext = () => {
    router.push("/events/dronePursuit");
  };
  const goBack = () => {
    router.push("/events/iQIgnition");
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
      name: "Ritesh Gupta",
      phone: "+91 8291164387",
    },
    person2: {
      name: "Shivansh Kumar",
      phone: "+91 8545898275",
    },
    
  };
  return (
    <Box sx={{ width: "100vw" , background:"black",background:"linear-gradient(180deg, #000000, #18192aab, #04040a)"}} className="center1 mt-10">
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
        <div className="py-2  ">
          <p className="text-lg font-normal text-gray-200  ">
          Think your robot can overcome any obstacle-big or minor in the least time? Get it on the track and let the game begin. Design a manually controlled ROBOT that can conquer hurdles and cover maximum distance amongst the best competitors in minimum time. Show off how you enter, your speed, and your path to overcoming challenges here at the enthralling event of “Obsta-Course”. “It is the event where you get to test the efficiency, skills, and power of your droid/robot.”
          </p>
          <div className="py-2 flex items-center flex-col md:flex-row justify-center gap-auto md:gap-[60px]">
          <div className="py-3 mt-2 " style={{marginBottom:"10px"}}>
          <h1 className="text-2xl font-bold ">Rule Book</h1>
          <div style={{display:"flex", justifyContent:"center",marginTop:"5px"}}>
          <button
              type="button"
              className="mt-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              
              onClick={(event) =>
                (window.location.href = "https://drive.google.com/file/d/1RfiyE20W_TAXa6vMokDYQpMsSDBBQY0s/view?usp=drive_link")
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
                  Date
                </span>
                8th February 2025 , 10:00am - 12:00am &<br></br><span style={{marginLeft:"90px"}}> 3:00pm - 6:00pm</span> 
                {/* Coming Soon... */}
              </p>
              <button
              type="button"
              className="mt-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              onClick={(event) =>
                (window.location.href = "https://forms.gle/W3f6VdQbcFyBvsaT8")
              }
            >
              Register Now
            </button>
            </div>
            <div className="">
          <h1 className="text-xl  font-bold mt-2 md:text-2xl py-2">
            Registration fee
          </h1>
          <li className="py-1">Free (For IIEST students)</li>
          <li>
            <span className="font-bold text-xl">Rs.250</span> (For non-IIEST
            students)
          </li>
        </div>
          </div>
        </div>
        <div className="py-2  ">
          <h1 className="text-3xl py-1 font-bold ">Problem Statement</h1>
          <p className="text-lg font-normal text-gray-200  ">
          Design a manually controlled ROBOT that can cover maximum distance in the shortest possible time, challenging the hurdles and being one of the best opponents. Think your robot can overcome any obstacle-big or minor in the least time. If so, get it on the track and let the game begin. And bear in mind that maximizing RPM does. The way you enter, the way you proceed, and the way you reveal your speed to others beings here at the enthralling event of “Robo-Race”. It is the event where you get to test the efficiency, power, and skills of your droid/robot. Race your bots to the finish line and earn accolades.
          </p>
        </div>
        <br></br>
        <br></br>
        <div className="py-6 bg-gray-900 mb-2 shadow-md sm:rounded-lg px-0 rounded-md">
          <table className="min-w-full divide-y">
            <tbody className="bg-gray-900 md:text-lg text-gray-300 divide-y divide-gray-800">
              <tr>
                <td className="pl-2 py-2 whitespace-nowrap  md:px-4 ">
                  <div className="text-sm md:text-lg font-medium ">
                    Registration:-
                  </div>
                </td>
                <td className="pl-2 py-1">
                  <div className="text-sm md:text-lg font-medium ">
                    Till 1 hour before the commencement of Round 1
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 whitespace-nowrap  md:px-4 ">
                  <div className="text-sm  md:text-lg font-medium ">
                    Participation:-
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    Team of maximum 5 members
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2  md:px-4  ">
                  <div className="text-sm font-medium  md:text-lg ">
                    Venue:-
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    Netaji Bhavan
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 py-2 md:px-4  whitespace-nowrap ">
                  <div className="text-sm font-medium  md:text-lg ">
                    No. of rounds:-
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">2</div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 md:px-4 py-2 whitespace-nowrap ">
                  <div className="text-sm font-medium  md:text-lg ">
                    Prizes worth:-
                  </div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    {" "}
                    <span className="font-bold ">Rs.10,000</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>
        <br></br>

        {/* <div className="py-3 mt-2 " style={{marginBottom:"30px"}}>
          <h1 className="text-3xl font-bold ">Rule Book</h1>
          <div style={{display:"flex", justifyContent:"center"}}>
          <button
              type="button"
              className="mt-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              
              onClick={(event) =>
                (window.location.href = "https://drive.google.com/file/d/1RfiyE20W_TAXa6vMokDYQpMsSDBBQY0s/view?usp=drive_link")
              }
            >
              Click Here
            </button>
          </div>
          
        </div> */}
        {/* <div className="py-2  ">
          <h1 className="text-3xl py-1 font-bold ">Bot Specification</h1>
          <Box className="data" sx={dataStyles}>
          <ul className="bulletArrow">
            <ul className="BulletNone">
              <li>
              Maximum bot length allowed: 30cm
              </li>
            </ul>
            <ul className="BulletNone">
              <li>
              Maximum bot width allowed: 25cm
              </li>
            </ul>
            <ul className="BulletNone">
              <li>
              No restrictions on the height of the bot.
              </li>
            </ul>
            <ul className="BulletNone">
              <li>
              Maximum bot weight allowed: 2kg
              </li>
            </ul>
            <ul className="BulletNone">
              <li>
              The bot should be wireless or wired but manually controlled.
              </li>
            </ul>
            
            <ul className="BulletNone">
              <li>
              The box and the sand (200 gms) will be provided on the spot.
              </li>
            </ul>
            <ul className="BulletNone">
              <li>
              Only electrical motors are allowed.
              </li>
            </ul>
            <ul className="BulletNone">
              <li>
              Maximum allowed potential difference of battery: 24V
              </li>
            </ul>
            <ul className="BulletNone">
              <li>
              A tolerance of 5% will be considered.
              </li>
            </ul>            
          </ul>
        </Box>
        </div>
        <div className="py-3 mt-2 ">
          <h1 className="text-3xl font-bold ">Flow of the events</h1>
          <p className="text-lg font-normal text-gray-200  ">
          Death Race is going to be held in 2 rounds. Candidates qualified from the first round can only
participate in second round (No lateral entry allowed).
          </p>
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
              This is a racing event, so the fastest and most balanced robot will win.
              </li>
            </ul>
            <ul className="BulletNone">
              <li>
              Each team can have a maximum of 5 members.
              </li>
            </ul>
            <ul className="BulletNone">
              <li>
              The robot should follow the specifications provided.
              </li>
            </ul>
            <ul className="BulletNone">
              <li>
              Any deviation from the mentioned specification will lead to disqualification.
              </li>
            </ul>
            <ul className="BulletNone">
              <li>
              If the Robot crosses a checkpoint and moves off track, then the robot should be placed on the previous checkpoint.
              </li>
            </ul>
            <ul className="BulletNone">
              <li>
              No Test practice will be inside Arenas.
              </li>
            </ul>
            <ul className="BulletNone">
              <li>
              You will have to submit your bot at the start of the event. No modification will be allowed during the event. However, you can change the battery.
              </li>
            </ul>
            <ul className="BulletNone">
              <li>
              In case of any dispute, the decision of the judge and Organizer will be final.
              </li>
            </ul>
            <li>
              <ul className="nestedList">
                <span className="font-bold text-xl text-blue-500  ">
                  Round 1:
                </span>
                <ul className="BulletNone">
                  <li>
                  In the first round, is a time-based elimination round, and the points were awarded completely based on time.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                  No hurdle skipping.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                  Maximum time of run is 10 min.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                  Penalties will be awarded if there is a track change by any bot.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                  A leaderboard will be created and a qualified team will compete in the second round.
                  </li>
                </ul>
              </ul>
            </li>
            <li>
              <ul className="nestedList">
                <span className="font-bold text-xl text-blue-500  ">
                  Round 2 (Final Showdown):
                </span>
                <ul className="BulletNone">
                  <li>
                  It is completely 1 vs 1 round.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>No time-out criterion, it&apos;s a race between two teams who were qualified for the second round.</li>
                </ul>
                <ul className="BulletNone">
                  <li>The competitor will be decided by the Team Impetus. Track would be decided by Toss.</li>
                </ul>
              </ul>
            </li>
            <li>
              <ul className="nestedList">
                <span className="font-bold text-xl text-blue-500  ">
                General Rules:
                </span>
                <ul className="BulletNone">
                  <li>
                  No Interventions of the Team Members. Allowance In the case it&apos;s an issue regarding the power supply or any hardware.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>If the bot is stuck in the arena, only the organizing team can intervene.</li>
                </ul>
                <ul className="BulletNone">
                  <li>It&apos;s completely the decision of the organizing team for the intervention.</li>
                </ul>
                <ul className="BulletNone">
                  <li>The team must not disassemble their bots before the final results are announced.</li>
                </ul>
                <ul className="BulletNone">
                  <li>No Power supply stations would be provided for DC [Participants can bring]. 220V AC Plug Point would be provided.</li>
                </ul>
              </ul>
            </li>
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
            <span className="font-bold text-xl">Rs.250</span> (For non-IIEST
            students)
          </li> */}
        </div>
        <Box>
          
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
