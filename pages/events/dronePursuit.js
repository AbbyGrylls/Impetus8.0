import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Button, IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import Contact from "../../components/Contact";
import EventMag from "../../components/EventManagement";
const imageStyles = {
  width: "80vw",
  height: "40vh",
  minWidth: "400px",
  minHeight: "400px",

  background: `url(/images/events/Dronepursuit.png)  no-repeat  `,

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
    router.push("/events/valorant");
  };
  const goBack = () => {
    router.push("/events/deathrace");
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
      name: "Varun Gautam",
      phone: "+91 9368145959",
    },
    person2: {
      name: "Harsh Kumar",
      phone: "+91 8240541513",
    },
    person3: {
      name:"Ritesh Gupta",
      phone:"+91 8291164387",
    }
  };
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
        <div className="py-2  ">
          <p className="text-lg font-normal text-gray-200  ">
          Hobby aircraft are booming, and multi-rotors are no exception. IMPETUS along with ROBODARSHAN brings you the opportunity to showcase your talents through Drone Pursuit. Drone Pursuit includes a race course, where participants will fly their drones through a series of gates and obstacles to win the race. Amaze the audience with your models and make this competition a great success with your performances. You will be judged on both the aspects of a multi-rotor that is, on the expertise of your flying skills and the stability of your bot.

          </p>
          <div className="py-2 flex items-center flex-col md:flex-row justify-center gap-auto md:gap-[60px]">
          <div className="py-3 mt-2 " style={{marginBottom:"10px"}}>
          <h1 className="text-2xl font-bold ">Rule Book</h1>
          <div style={{display:"flex", justifyContent:"center",marginTop:"5px"}}>
            
          <a
          href="/docs/Rulebook_dp.pdf"
            target="_blank"
            type="button"
              className="mt-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
          >
            Click Here
          </a>
          </div>
          
        </div> 
            <div className="py-3 flex flex-col items-center justify-center gap-y-2">
              <p className="text-lg">
                <span className="py-3 px-2.5 me-2  md:text-lg text-md font-medium rounded-lg   bg-gray-800 text-gray-400  ">
                  <CalendarMonthIcon className="h-5" />
                  Dates
                </span>
                 {/* 10th February, 2024  4:00pm to 6:00pm */}
                 7Th Feb 2025, 6:00pm - 10:30pm<br></br>
                 <p style={{marginLeft:"100px"}}>8Th Feb 2025, Starts at 8:30pm</p>
              </p>
              <button
              type="button"
              className="mt-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              onClick={(event) =>
                (window.location.href = "https://forms.gle/e9SLGrNviaA6EASP9")
              }
            >
              Register Now
            </button> 
            </div>
            <Box>
          <h1 className="text-xl  font-bold mt-2 md:text-2xl py-2">
            Registration fee
          </h1>
          <li className="py-1">Free (For IIEST students)</li>
          <li>
            <span className="font-bold text-xl">Rs. 500</span> (For non-IIEST
            students)
          </li>
          </Box>
          </div>
        </div>
         <div className="py-2  ">
          <h1 className="text-3xl py-1 font-bold ">Objective</h1>
          <p className="text-lg font-normal text-gray-200  ">
          The objective of this competition is to test the agility and manoeuverability of your drones . The drones are required to pass through a series of manoeuvre, such as passing through hoops, avoiding obstacles. You will be judged on the overall performance of your drones.
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
                    Till 1 hour before the commencement of event
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
                    Team of max 5 members
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
                  <div className="text-sm font-medium  md:text-lg ">(Refer Rulebook)</div>
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
                    <span className="font-bold ">Rs. 40,000</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2 md:px-4 py-2 whitespace-nowrap ">
                  <div className="text-sm font-medium  md:text-lg ">Venue</div>
                </td>
                <td className=" pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                    Lords Ground, IIEST Shibpur.
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
                (window.location.href = "https://drive.google.com/file/d/1qlAAE3qJrvrNqPjUlFVuBwdr_WO2b1Ks/view?usp=sharing")
              }
            >
              Click Here
            </button>
          </div>
          
        </div>  */}
        {/* ***************************************************** */}

        {/* <div className="py-3 mt-2 ">
          <h1 className="text-3xl font-bold ">Event Structure</h1>
          <Box className="data mt-2" sx={dataStyles}>
            <p className="text-lg font-normal text-gray-200  ">
            The competition requires the participants to design and fabricate a VTOL Drone and
            perform a set of maneuvers where it has to be passed through various obstacles 
            There will be 1 round in the competition:
            (No lateral entry allowed).
            </p>
          </Box>
        </div>
        <div className="py-3  ">
          <h1 className="md:text-3xl text-2xl font-bold ">
            Model Specifications
          </h1>
          <p className="text-lg font-normal text-gray-200  "></p>
        </div>
        <Box className="data" sx={dataStyles}>
          <ul className="bulletArrow">
            <ul className="BulletNone">
              <li>
                {" "}
                The maximum possible distance between any two motor shafts of your bot should have a value between 25cm and 50cm. For example, in the case of the quadcopter, the diagonal length will be measured.

              </li>
              <li>
                {" "}
                Metal Propellers are not allowed.
              </li>
              <li>
                {" "}
                Any material can be used for construction.
              </li>
              <li>
                {" "}
                Arduino and other boards can be directly used. You may or may not use pre-programmed boards.
              </li>
              <li>
                {" "}
                Exchanging of models is strictly not allowed. Each team must have its own model. 
              </li>
              <li>
                {" "}
                Throughout the event, only one model must be used in all rounds.
              </li>
              <li>
                {" "}
                RTF models will not be allowed.
              </li>
                            
              
            </ul>{" "}
            
          </ul>
        </Box>
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
                There will be no trial in the first round.
              </li>
              <li>
                {" "}
                You can have a short trial of 2 min before attempting the second round.
              </li>
              <li>
                {" "}
                Each team must have its own model. Exchanging models is not allowed.
              </li>
              <li>
                {" "}
                You should not lift the bot to improve your position.
              </li>
              <li>
                {" "}
                Any failed attempt at landing (touch to the ground), which does not get you a point will lead to the end of the round.
              </li>
              <li>
                {" "}
                RTF models will not be allowed, however pre-programmed boards may or may not be used. The shelf frame and electronics can be used.
              </li>
              <li>
                {" "}
                Already built frames can be used.
              </li>
              <li>
                {" "}
                No restriction on the material used in making the machine but metal propellers are not allowed.
              </li>
              <li>
                {" "}
                A team can use only one model throughout the event in all the rounds.
              </li>
              <li>
                {" "}
                The organizers reserve all rights to change any or all of the above rules.
              </li>
              <li>
                {" "}
                Changes will be highlighted on the website and will also be mailed to all the registered participants. However, you are suggested to keep checking the website regularly.
              </li>              
              
            </ul>{" "}
            <li>
              <ul className="nestedList">
                <span className="font-bold text-xl text-blue-500  ">
                  Round 1 :
                </span>
                <ul className="BulletNone">
                  <li>
                  The model has to be flown through 10 circular rings that will be placed at some heights ranging from 2 meters to 5 meters (the diameter of rings will vary between 70 cm to 100 cm).
                  </li>
                  <li>
                  Specific points will be given to each ring (ring score). Participants will get the points only when the model passes through the ring (without touching) successfully.
                  </li>
                  <li>
                  Participants can choose to skip any ring (but will not be rewarded any points) 4. The maximum time limit is 10 mins.
                  </li>
                  <li>
                  The time for completing round 1 will be noted and given appropriate points.
                  </li>
                  <li>
                  The total score gained by each team will include the ring score and time score. 
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
                  <li>
                    The first part is called the &quot;Dry Run&quot;.In this
                    run, the bot starts from the Start and finds its way to
                    reach the End of the arena. The bot must follow an algorithm
                    to find its path to the End, and it can store turns in its
                    memory to discover the shortest path during the second part
                    of the journey. There are no restrictions for covering all
                    the checkpoints.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                    The second part is called the &quot;Actual Run&quot;. During
                    this run, the bot must start over from the Start and find
                    its way to the End by following the best possible path that
                    was stored from the first run. The timer will be reset to
                    zero as the &qout;Actual Run&qout; begins.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>No restarts are allowed</li>
                </ul>
              </ul>
            </li>
          </ul>
        </Box> */}




        {/* ***************************************************** */}
        <div className="">
          <p className="text-lg font-semibold  text-gray-200  ">
            If any team faces any problem, they are supposed to report to the
            Event Co-Ordinator or Pool Volunteer without much delay.<br></br>
          </p>
          <p className="text-lg font-semibold  text-gray-200  " style={{marginTop:"20px"}}>
          In case of any discrepancy, event coordinators decisions will be considered.
          <br></br>
          </p>
          {/* <h1 className="text-xl  font-bold mt-2 md:text-3xl py-2">
            Registration fee
          </h1>
          <li className="py-1">Free (For IIEST students)</li>
          <li>
            <span className="font-bold text-xl">Rs. 500</span> (For non-IIEST
            students)
          </li> */}
        </div>
        <Box>
          <Box className="fee">
            {/* <Box sx={{ width: "100%" }} className="py-4 center1">
              <button
                type="button"
                className=" font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                onClick={(event) =>
                  (window.location.href = "https://forms.gle/e9SLGrNviaA6EASP9")
                }
              >
                Register Now
              </button>
            </Box> */}
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
            <EventMag person={person.person3} />
          </Box>
        </Box> 
      </section>
      <Contact />
    </Box>
  );
}
