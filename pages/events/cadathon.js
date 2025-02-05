import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, color } from "@mui/system";
import { useRouter } from "next/router";
import Contact from "../../components/Contact";
import EventMag from "../../components/EventManagement";
import { IconButton, Typography, useTheme } from "@mui/material";

const imageStyles = {
  width: "80vw",
  height: "40vh",
  minWidth: "600px",
  minHeight: "400px",
  background: `url(/images/events/Cadathon.jpg)  no-repeat  `,
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
    router.push("/events/yantrasearch");
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
  const content_style={
    p:{
      color: "red",
    }
  }
  const person = {
    person1: {
      name: "Rajdeep Sarkar",
      phone: "+91 7980430746",
    },
    person2: {
      name: "Debolina Das",
      phone: "+91 7003574001",
    },
  };

  return (
    <Box sx={{ width: "100vw", background: "black", background:"linear-gradient(180deg, #000000, #18192aab, #04040a)" }} className="center1 mt-10">
      <Box sx={headerStyles} className="center2">
      <Box sx={{ ...imageStyles, borderRadius: "15px", overflow: "hidden" }}></Box>
        <IconButton onClick={goNext} className="right">
          <ArrowForwardIcon fontSize="large" color="white" />
        </IconButton>
      </Box>
      <section className="py-10 max-w-screen-lg md:px-10 px-4" style={content_style}>
        <div className="py-2  ">
          <p className="text-lg font-normal text-gray-200  ">
          This competition aims to develop the idea of Engineering Drawing and modelling of 3D
structures on a CAD software. This event will be organized by the Society of Automotive Engineers
(SAE), IIEST Shibpur under the banner of &quot;Impetus 8.0&quot;.
          </p>
          <div className="py-2 flex items-center flex-col md:flex-row justify-center gap-auto md:gap-[60px]">
          <div className="py-3 mt-2 " style={{marginBottom:"10px"}}>
          <h1 className="text-2xl font-bold ">Rule Book</h1>
          <div style={{display:"flex", justifyContent:"center",marginTop:"5px"}}>
          <button
              type="button"
              className="mt-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              
              onClick={(event) =>
                (window.location.href = "https://drive.google.com/file/d/1uhbbXAB3ktWwJ9C4mVjdk-5qnGr64x8u/view?usp=sharing")
              }
            >
              Click Here
            </button>
          </div>
        </div>
            <div className="py-3 flex flex-col mt-1 items-center justify-center gap-y-2">
              <p className="text-lg">
                <span className="py-3 px-2.5 me-2  md:text-lg text-md font-medium rounded-lg   bg-gray-800 text-gray-400  ">
                  <CalendarMonthIcon className="h-5" />
                  Round 1 & 2
                </span>
                8th February 2025 , 2:00pm - 4:30pm
                {/* Coming soon... */}
              </p>
              <button
              type="button"
              className="mt-2 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
              onClick={(event) =>
                (window.location.href = "https://forms.gle/ZTjNRtyFgKXEV2Tv7")
              }
            >
              Register Now
            </button>
            </div>
        <Box sx={{display:"flex", flexDirection:"column",marginBottom:"10px "}}>
        <h1 className="text-xl  font-bold mt-2 md:text-2xl py-2">
            Registration fee
          </h1>
          <li className="py-1">Free (For IIEST students)</li>
          <li>
            <span className="font-bold text-xl">Free </span> (For non-IIEST
            students)
          </li>
          </Box>
          </div>
        </div>
        <div className="py-2  ">
          <h1 className="text-3xl py-1 font-bold ">Objective</h1>
          <p className="text-lg font-normal text-gray-200  ">
          Initially, the organizing team will provide a problem statement with a figure given and the
participants will have to draw all 3 views of the figure or made 3D model of the structure on CAD
software within the speculated time.
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
                    Individual
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
                  Gallery 6, Department of Mechanical Engineering, IIEST Shibpur
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
                <td className="pl-2 md:px-4  py-2 whitespace-nowrap ">
                  <div className="text-sm font-medium  md:text-lg ">
                    Duration of round1:-
                  </div>
                </td>
                <td className="pl-2 py-1">
                  <div className="text-sm font-medium  md:text-lg ">
                     60 minutes
                  </div>
                </td>
              </tr>
              <tr>
                <td className="pl-2  md:px-4 py-2 whitespace-nowrap ">
                  <div className="text-sm font-medium  md:text-lg ">
                    Duration of round2:-
                  </div>
                </td>
                <td className="pl-2 py-1">
                  <div className="text-sm font-medium md:text-lg  ">
                    90 minutes
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
                    <span className="font-bold ">Rs. 8000</span>
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
                (window.location.href = "https://drive.google.com/file/d/1RXkGg9k8WHokScmeVT3gms4xPVOC7mP6/view?usp=drive_link")
              }
            >
              Click Here
            </button>
          </div>
          
        </div> */}
        
        {/* <div className="py-3 mt-2 ">
          <h1 className="text-3xl font-bold ">Flow of the events</h1>
          <p className="text-lg font-normal text-gray-200  ">
            <b>CADathon</b> is going to be held in 2 rounds. In the first round of competition participants have
to do according to problem statement (Engineering Drawing or CAD as per their choice submitted
through Google form) and submit it in 90 minutes. The top 10 candidates from the first round can only
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
              Registered candidates are to be present in the department building before the commencement
of the event.
              </li>
            </ul>{" "}
            <li>
              <ul className="nestedList">
                <span className="font-bold text-xl text-blue-500  ">
                  Round 1 :
                </span>
                <ul className="BulletNone">
                  <li>Each participant will be provided with a problem statement.</li>
                </ul>
                <ul className="BulletNone">
                  <li>
                  Participants are required to bring their own drawing instruments (drawing sheets
will be provided) and laptop with any CAD software installed in it.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                  Participants need to do according to the instructions in problem statement.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                  The top 10 participants from round 1 will continue to round 2. Evaluation will
be done based on accuracy and time consumed.
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
                  The selected participants from 1st round will have to model the assembly on
CAD software or draw it on the provided Graphic (Drawing) sheet as per the
choice chosen by the participants through Google form.
                  </li>
                </ul>
                <ul className="BulletNone">
                  <li>
                  Participants will be evaluated based on accuracy and time.
                  </li>
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
            <span className="font-bold text-xl">Rs.50</span> (For non-IIEST
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
                  (window.location.href = "https://forms.gle/ZTjNRtyFgKXEV2Tv7")
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
          </Box>
        </Box>
      </section>
      <Contact />
    </Box>
  );
}