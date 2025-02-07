import { Typography, useTheme } from "@mui/material";
import { Box, display } from "@mui/system";
import CarouselComp from "../components/CarouselComp";
import ContactCard from "../components/ContactCard";
import Contact from "../components/Contact";
import Image from "next/image";
import SponsorCard from "../components/SponsorCard";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import TakeawayTimeline from "../components/TkeawayTimeline";
import BenifitsTimeline from "../components/BenifitsTimeline";

const aim = [
  {
    head: "Interactive Industry-Academia Engagement",
    des: "Fostering strong communication between industry leaders, academicians, and students while streamlining campus engagement processes. This enables collaborative opportunities, addresses mutual needs effectively, and bridges the gap between academia and industry.",
    img: "iam/intComms.png",
  },
  {
    head: "Expert-Led Insights & Holistic Learning",
    des: "Offering expert-led discussion panels and meaningful interactions to provide a comprehensive understanding of diverse industry and academic needs. Through scenario-based discussions, participants gain valuable insights and a deeper learning experience.",
    img: "iam/camEng.png",
  },
  {
    head: "Innovative Practices for Future Growth",
    des: "Encouraging the adoption of innovative practices to meet the evolving demands of the academic and industrial landscape. By integrating real-world perspectives, participants are empowered to navigate industry changes and drive impactful solutions.",
    img: "iam/holPersp.png",
  },

]
const speakersNew = [

  {
    name: "Dr.Sudeb Datta",
    description: "Technical Director water and gas utilities, M.N. Dastur",
    img: "iam/sudebDutta.jpeg",
  },
  {
    name: "Amar Misra",
    description: "Chief Shared Services, Tata Steel",
    img: "iam/amar.jpeg"
  },
  {
    name: "Arkadeb Banerjee",
    description: "Scientist F at DRDO ",
    img: "iam/arkadeep.jpeg"
  },
  {
    name: "Swapan Kumar Mondal",
    description: "Top Educator at Unacademy",
    img: "iam/skMondal.jpeg",
  },
  {
    name: "Ramanuj Bhattacharya",
    description: "Joint General Manager, MoD, ‎ Government of India",
    img: "iam/ramanuj.jpeg",
},

  {
    name: "Sarbajit Rakshit",
    description: "Master Innovator At IBM",
    img: "iam/rakshit.jpeg",
  },
  /* {
    name:"",
    description:"",
    img:"",
  } */
];
const speakers = [
  {
    name: "Debajyoti Dhar",
    description: "Deputy Director, Space Application Center, Ahmedabad (ISRO)",
    img: "debojyothidhar.jpg",
  },
  {
    name: "Sarojkant Singh",
    description:
      "Associate Vice President,Business Strategy, Power Plant Engineers Ltd.",
    img: "Twoo.jpeg",
  },
  {
    name: "Kousik Maiti",
    description: "Director, PWC",
    img: "Threee.jpeg",
  },
  {
    name: "Dr.Sudeb Datta",
    description: "Technical Director water and gas utilities, M.N. Dastur",
    img: "fourrrr.jpeg",
  },
  {
    name: "Mr. Tatababu Botsa",
    description: "Deputy General Manager, Garden Reach Shipbuilders & Engineers Ltd.",
    img: "MrTatababu.jpg",
  },
  {
    name: "Mr. Abhijit Paliya",
    description: "Vice President (Operations)and Plant Head, Lalbaba Engineering Group",
    img: "MrAbhijit.jpg",
  },
  {
    name: "Mr. Sambhu Prasad Adak",
    description: "Partner, Purahsara Strategist LLP",
    img: "MrSambhu.jpeg",
  },
  {
    name: "Mr. Deepayan Das",
    description: "Managing Director, Mahr Metrology Pvt Ltd",
    img: "MrDeepayan.jpeg",
  },
  {
    name: "Mr. Avelo Roy",
    description: "Managing Director, Kolkata Ventures",
    img: "MrAvelo.jpg",
  },
];
export default function IAMPage() {
  const theme = useTheme();

  const styles = {
    width: "100vw",
    ">*": {
      zIndex: "3",
    },
    h1: {
      m: "50px 0",
      fontSize: "60px",
      textAlign: "center",
    },
    h2: {
      mt: "20px",
      mb: "15px",
    },
    ".content": {
      zIndex: "3",
      maxWidth: "1000px",
      mt: "30px",
      p: {
        textIndent: "50px",
        textAlign: "justify",
        margin: "30px",
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
    ".benefits": {
      maxWidth: "1000px",
      mt: "30px",
      ml: "10px",
      mr: "10px",
      div: {
        margin: "60px 0",
      },
    },
    ".pattern": {
      display: "flex",
      maxWidth: "90vw",
    },
    ".patternR": {
      maxWidth: "90vw",
      display: "flex",
      flexDirection: "row-reverse",
      flexGrow: "1",
    },
    ".pattern, .patternR": {
      alignItems: "center",
      justifyContent: "center",
    },
    ".patimg, .pattext": {
      width: "600px",
      height: "auto",
      maxWidth: "80vw",
      maxHeight: "600px",
      margin: "50px",
    },
    ".pattext": {
      textAlign: "justify",
    },
    ".pattext h3": {
      margin: "30px 0",
      fontSize: "32px",
      fontWeight: "600px",
    },
    [theme.breakpoints.down("md")]: {
      ".patimg, .pattext": {
        margin: "0",
      },
    },
    ".bulletArrow li": {
      textIndent: "0",
      paddingLeft: "40px",
    },
    ".bulletBox": {
      position: "relative",
    },
  };
  const person = {
    person1: {},
    person2: {},
  };

  const sponsor = {
    sponsor1: { imgname: "IOCL.jpg", link: "https://iocl.com/" },
    sponsor2: { imgname: "lal.jpeg", link: "https://lalbabagroup.com/" },
  }
  const sponsorNew = {
    sponsor1: { imgname: "", link: "" },
    sponsor2: { imgname: "", link: "" },
  }
  return (
    <section className="bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-.svg')]">
      <CarouselComp />


      <div className="pt-8 mt-4 px-4 mx-auto max-w-screen-xl text-center  z-10 relative">
        <h1
          className="text-2xl md:text-3xl font-extrabold tracking-tight leading-none text-gray-50 md:text-4xl lg:text-5xl"
          style={{
            fontSize: "4rem",
            fontFamily: "Bebas Neue",
            letterSpacing: "2px",
          }}
        >
          INDUSTRY-ACADEMIA MEET
        </h1>
        <p className=" text-lg font-normal text-gray-400 lg:text-xl sm:px-16 lg:px-48 " style={{
          fontSize: "1.25rem",
          // color: "#fff",
          lineHeight: "1.75rem",
          fontFamily: "Bebas Neue,sans-serif",
          letterSpacing: "2px",
          paddingTop: "0.5rem",
        }}>
          9th February, 2025 - 9AM to 6PM
          {/* Venue- Institute Hall, IIEST Shibpur. */}
        </p>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          pt: 8,
          mt: 4,
          px: 4,
          mx: "auto",
          maxWidth: "1200px",
          // textAlign: "left", 
          zIndex: 10,
          position: "relative",
        }}
      >
       {/*  <h1
          className="text-3xl md:text-4xl py-1 font-bold"
          style={{
            textAlign: "center",
            marginTop: "10px",
            fontFamily: "Rowdies",
            marginBottom: "-50px",
          }}
        >
          Sponsors
        </h1>
        <Box className="cards" style={{ width: "100%" }}>
          <SponsorCard sponsor={sponsorNew.sponsor1} />
          <SponsorCard sponsor={sponsorNew.sponsor2} />
        </Box> */}
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: "2rem",
              fontFamily: "Bebas Neue, sans-serif",
              justifyContent: "flex-start",
              mb: 2,
            }}
          >
            <span style={{color:"white"}}>{">>"}Academia meets Industry</span> <span style={{color:"#ff7000"}}>- Insights that matter</span>
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "1rem",
              lineHeight: "1.6",
              fontFamily: "Roboto",
              letterSpacing: "1px",
              textAlign: "justify",
              padding:"15px"
            }}
          >
            The Industrial Academia Meet in IMPETUS is designed to establish a collaborative platform
            for meaningful engagement between industry and academia. This initiative emphasizes the exchange
            of knowledge and innovative ideas, fostering thought-provoking discussions around best practices,
            employability trends across diverse engineering domains, and strategies to identify and
            nurture talent during campus recruitment. It also seeks to bridge the gap between academic learning
            and industrial expectations, ensuring students are equipped with real-world insights and skills.
            With a lineup of esteemed speakers from leading industries, this event promises to be a
            treasure trove of wisdom and inspiration. Get ready to meet the visionaries
            who will ignite your curiosity and redefine your perspective!
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h2"
            sx={{
              color: "rgb(24, 66, 255)",
              fontSize: "2rem",
              fontFamily: "Bebas Neue, sans-serif",
              mb: 2,
              textAlign: "left"
            }}
          >
            <span style={{color:"white"}}>{">>"}From Innovation to Interaction</span> <span style={{color:"#ff7000"}}> – Dive Deep with Industry Experts</span>

          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "1rem",
              lineHeight: "1.6",
              fontFamily: "Roboto, sans-serif",
              letterSpacing: "1px",
              textAlign: "left",
              textAlign: "justify",
              padding:"15px"
            }}
          >
            We are honored to host a distinguished panel of speakers at the Industry-Academia Meet,
            bringing together leading industry experts and renowned academicians to share their
            insights, experiences, and expertise.
          </Typography>
          <Typography sx={{
            color: "#fff",
            fontSize: "2.5rem",
            lineHeight: "1.5",
            textAlign: "center",
            fontFamily: "Rowdies",
            paddingTop: "15px",
            marginTop: "2em"
          }}>
            Speakers
          </Typography>
        </Box>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center" style={{ maxWidth: "850px", margin: "0 auto", gap: "100px", marginTop: "-60px" }}>
          {speakersNew.map((x) => {
            return (
              <div
                key={x.name}
                className="w-full max-w-sm  rounded-lg shadow "
              >
                <div className="flex justify-end px-4 pt-4"></div>
                <div className="flex flex-col items-center ">
                  <Image
                    className="rounded-full "
                    src={"/images/" + x.img}
                    alt="speaker1"
                    width="250"
                    height="250"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white" style={{ marginTop: "16px" }}>
                    {x.name}
                  </h5>
                  <span className="text-md  text-center text-gray-400" style={{ width: "80%" }}>
                    {x.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <Box sx={{
          display: "flex",

          flexDirection: "column",
          gap: "50px"
        }}>
          <Typography sx={{
            fontSize: "2rem",
            fontFamily: "Bebas Neue, sans-serif",
            mb: 2,
            textAlign: "left",
            color:"white"
          }}>
            {">>"}Our Aim at <span style={{color:"#02A5EE"}}>IMPETUS 8.0</span>
          </Typography>
          <Box
            sx={{
              maxWidth: "900px",
              margin: "0 auto",
              marginTop: "-40px",
              display: "flex",
              flexDirection:{
                xs:"column",
                sm:"row"
              },
              gap: "20px",
              padding: "20px",
            }}
          >
            {aim.map((x, index) => (
              <Box
                key={index}
                sx={{
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "10px",
                  boxShadow: "0 2px 6px rgba(255, 255, 255, 0.2)",
                  padding: "15px",
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  height: "200px",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 6px 12px rgba(255, 255, 255, 0.3)",
                    height: "auto", // Expands card on hover
                  },
                  "&:hover .description": {
                    opacity: 1,
                    maxHeight: "200px",
                    transition: "opacity 0.3s ease, max-height 0.3s ease",
                  },
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center",filter:"grayscale(1)",width:"55px" }}>
                  <Image
                    src={"/images/" + x.img}
                    alt="Icons"
                    width="80"
                    height="80"
                    
                    style={{ borderRadius: "6px" }}
                  />
                </Box>

                <Typography
                  sx={{
                    marginTop: "12px",
                    fontFamily: "Nunito",
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  {x.head}
                </Typography>

                {/* Description hidden by default, appears on hover */}
                <Typography
                  className="description"
                  sx={{
                    marginTop: "8px",
                    color: "#ddd",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                    fontFamily: "Roboto, sans-serif",
                    letterSpacing: "0.5px",
                    opacity: 0,
                    maxHeight: 0,
                    overflow: "hidden",
                  }}
                >
                  {x.des}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{
          display: "flex", flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "center",
          gap: "175px"
        }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h2"
              sx={{
                fontSize: "2rem",
                fontFamily: "Bebas Neue, sans-serif",
                mb: 2,
                textAlign: "left"
              }}>
              {">>"} <span style={{color:"#02A5EE"}}>Takeaways </span><span style={{color: "white",}}>for the corporate</span> 
            </Typography>
            <TakeawayTimeline />
          </div>
          <Box sx={{ display: "flex", flexDirection: "column", marginTop: { xs: "-100px", md: "0px" } }}>
            <Typography variant="h2"
              sx={{
                
                fontSize: "2rem",
                fontFamily: "Bebas Neue, sans-serif",
                mb: 2,
                textAlign: "right"
              }}>
              <span style={{color:"#02A5EE"}}>Benifits</span> <span style={{color: "white",}}>for the institution {"<<"}</span> 
            </Typography>
            <BenifitsTimeline />
          </Box>
        </Box>
        
        <h1
          className="text-3xl md:text-4xl py-1 font-bold"
          style={{
            textAlign: "center",
            marginTop: "10px",
            fontFamily: "Rowdies",
            marginBottom: "-50px",
          }}
        >
          Past Sponsors
        </h1>
        <Box className="cards" style={{ width: "100%" }}>
          <SponsorCard sponsor={sponsor.sponsor1} />
          <SponsorCard sponsor={sponsor.sponsor2} />
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: {
            sm: "column",
            xs: "column",
            gap: "75px"
          },
        }}>
          <Typography sx={{
            color: "#fff",
            fontSize: "2.5rem",
            lineHeight: "1.5",
            textAlign: "center",
            fontFamily: "Rowdies",
            paddingTop: "15px",
          }}>
            Past Speakers
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center" style={{ maxWidth: "850px", margin: "0 auto", gap: "100px", marginTop: "-60px",marginBottom:"150px" }}>
            {speakers.map((x) => {
              return (
                <div
                  key={x.name}
                  className="w-full max-w-sm  rounded-lg shadow "
                >
                  <div className="flex justify-end px-4 pt-4"></div>
                  <div className="flex flex-col items-center ">
                    <Image
                      className="rounded-full "
                      src={"/images/" + x.img}
                      alt="speaker1"
                      width="250"
                      height="250"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white" style={{ marginTop: "16px" }}>
                      {x.name}
                    </h5>
                    <span className="text-md  text-center text-gray-400" style={{ width: "100%" }}>
                      {x.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Box>
      </Box>
      {/* <section className="bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-.svg')]">

      

        <div className="py-6 px-4 mx-auto max-w-screen-xl">

        <h1 className="md:text-4xl py-1 font-bold " style={{textAlign:"center",marginTop:"30px",fontFamily: "Rowdies" }}>Event Sponsor</h1>
        <Box className="cards" style={{width:"100%"}}>
          <SponsorCard sponsor={sponsor.sponsor1} />
          <SponsorCard sponsor={sponsor.sponsor2} />
        </Box>
          <div
            data-aos="zoom-in-up"
            className="   rounded-lg md:p-8 md:p-12 mb-8"
          >
            <p className="text-lg font-normal text-gray-300  ">
              The industrial meet in IMPETUS is to foster a productive dialogue
              between industry and academia, provide exposure to students and
              academics about current and future industrial trends, and equip
              them with the skills to be future-proof and industry-ready. It
              seeks to establish interactive communication between industry
              leaders, academicians, and students, bridging the gap between the
              company and institute and offering a comprehensive understanding
              of their needs. The expert-led discussion panels and interactive
              sessions will enhance the learning experience for participants.
              This event aims to create a common ground for the collaboration of
              industry and academia, prioritize knowledge sharing, and
              facilitate thought-provoking discussions on best practices,
              employability, and talent identification in campus recruitment.
            </p>
          </div>
          <div className="text-center" style={{ marginBottom:"64px" }}>
            <h1
              className="md:text-4xl text-white font-bold"
              style={{ fontFamily: "Rowdies" }}
            >
              Speakers
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center" style={{ maxWidth:"850px",margin:"0 auto",gap:"50px" }}>
              {speakers.map((x) => {
                return (
                  <div
                    key={x.name}
                    className="w-full max-w-sm  rounded-lg shadow "
                  >
                    <div className="flex justify-end px-4 pt-4"></div>
                    <div className="flex flex-col items-center ">
                      <Image
                        className="rounded-full "
                        src={"/images/" + x.img}
                        alt="speaker1"
                        width="250"
                        height="250"
                      />
                      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white" style={{ marginTop:"16px"}}>
                        {x.name}
                      </h5>
                      <span className="text-md  text-center text-gray-400" style={{ width:"80%"}}>
                        {x.description}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div
              data-aos="zoom-in-right"
              className=" bg-gray-800 border   border-gray-700 rounded-lg p-3 md:p-6"
            >
              <a
                href="#"
                className="bg-green-100 text-green-800 text-md font-medium inline-flex items-center px-2.5 py-0.5 rounded-md  bg-gray-700  text-green-400 mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                </svg>
                Aim
              </a>
              <p className="text-lg font-normal  text-gray-300 mb-4">
                IMPETUS aims to create strong interactive communication between
                leading officials from multiple indus- tries, academicians and
                prospective students. The meet will cushion the process of
                campus engagement be- tween the companies and the insti- tute
                and provide a holistic perspective to their respective needs. It
                induces innovative practices, insights, scenar- ios. the
                interactive nature of the ses- sions and expert-led discussion
                panels will transcend the participants to an enhanced learning
                experience
              </p>
            </div>
            <div
              data-aos="zoom-in-left"
              className=" border border-gray-700 rounded-lg p-3 bg-gray-800"
            >
              <a
                href="#"
                className="text-purple-400 bg-purple-100 text-md font-medium text-center inline-flex items-center px-2.5 py-0.5 rounded-md  bg-gray-700  text-green-400 mb-2"
              >
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  ariahidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                </svg>
                Takeaways for the corporate
              </a>
              <div
                className="p-3 mb-2 text-sm  md:px-10  rounded-lg bg-gray-700  text-gray-200"
                role="alert"
              >
                <ArrowRightIcon />
                Resolving technical issues through projects and consultancy
              </div>
              <div
                className="p-3 mb-2 text-sm md:px-10  rounded-lg bg-gray-700 text-gray-200"
                role="alert"
              >
                <ArrowRightIcon />
                Presentation of viable solutions through sound studies and
                research publications by the top-notch aca- demicians of the
                institute
              </div>
              <div
                className="p-3 mb-2 text-sm md:px-10 rounded-lg bg-gray-700 text-gray-200"
                role="alert"
              >
                <ArrowRightIcon />
                Understand the insights and rate the institute
              </div>
              <div
                className="p-3 mb-2 text-sm md:px-10 rounded-lg bg-gray-700 text-gray-200"
                role="alert"
              >
                <ArrowRightIcon />
                Understand the insights and rate the institute Innovative and
                time-effective strategies to ease the hiring process Active
                interaction of the industries with the scholars of the institute
                and to brainstorm issues and challenges faced by the respective
                members
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 ">
          <div className="flex justify-center flex-col items-center gap-y-2">
            <h1
              className="md:text-3xl text-white font-bold"
              style={{ fontFamily: "Rowdies" }}
            >
              Benefits for the Institute
            </h1>

            <div>
              <h2 id="accordion-arrow-icon-heading-2">
                <button className="flex rounded-t-lg items-center justify-between w-full p-5 font-medium rtl:text-right border border-b-0 focus:ring-4 focus:ring-gray-800 border-gray-700 text-gray-400  hover:bg-gray-800 gap-3">
                  <span>
                    A chance to meet and interact with elite officials,
                    technical and HR heads from multiple sectors
                  </span>
                </button>
              </h2>
              <h2 id="accordion-arrow-icon-heading-3">
                <button class="flex items-center justify-between w-full p-5 font-medium rtl:text-right  border focus:ring-gray-200 focus:ring-gray-800 border-gray-700 text-gray-400 hover:bg-gray-800 gap-3">
                  <span className=" text-left">
                    Learn the basic fundamentals and the newest trends in campus
                    hiring
                  </span>
                </button>
              </h2>
              <h2 id="accordion-arrow-icon-heading-3">
                <button class="flex items-center justify-between w-full p-5 font-medium rtl:text-right  border focus:ring-gray-800 border-gray-700 text-gray-400  hover:bg-gray-800 gap-3">
                  <span className=" text-left">
                    To showcase the technical prowess of the institute and their
                    success stories to the recruiters
                  </span>
                </button>
              </h2>
              <h2 id="accordion-arrow-icon-heading-3">
                <button class="flex  justify-between w-full p-5 font-medium border focus:ring-gray-800 border-gray-700 text-gray-400 hover:bg-gray-800 gap-3">
                  <span className=" text-left">
                    An effort to change the landscape of campus recruitment in
                    the pool of campus talent and remodel training and
                    skill-building exercises to sculpt out the industry - ready
                    young engineers to persuade recruiters
                  </span>
                </button>
              </h2>
              <h2 id="accordion-arrow-icon-heading-3">
                <button class="flex items-center justify-between w-full p-5 font-medium rtl:text-right  border focus:ring-gray-800 border-gray-700 text-gray-400 hover:bg-gray-800 gap-3">
                  <span className=" text-left">
                    Way to enable students to choose the most relevant job
                  </span>
                </button>
              </h2>
              <h2 id="accordion-arrow-icon-heading-3">
                <button class="flex items-center rounded-b-lg justify-between w-full p-5 font-medium rtl:text-right  border  focus:ring-gray-800 border-gray-700 text-gray-400 hover:bg-gray-800 gap-3">
                  <span className=" text-left">
                    Develop a better employment ecosystem which is a win-win for
                    the students, institute and corporate.
                  </span>
                </button>
              </h2>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <Image
              className="patimg md:ml-32  ml-0"
              src="/images/Networking.png"
              alt="card"
              width="400"
              height="400"
            />
          </div>
          <div className=" flex flex-col justify-center  lg:items-start items-center text-lg font-normal text-gray-300 mb-4 ">
            <h2 className="text-blue-400 md:text-3xl text-2xl md:text-left text-center md-font-extrabold mb-2">
              Industry-Academia Interaction
            </h2>
            <p className="text-left px-3 md:w-2/3  md:px-0 ">
              Active interaction between the industries and scholars of the
              institute and brainstorming prevalent issues and challenges -
              paving the way for future collaboration.It facilitates
              interactions between academia and industrialists by providing a
              forum for dialogue, identifying common interests, and exploring
              potential collaborative opportunities.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-8 gap-1">
          <div className=" flex flex-col justify-center  lg:items-end items-center text-lg font-normal text-gray-300 mb-4 md:order-1 order-2">
            <h2 className="text-blue-400 md:text-3xl text-2xl md:text-left self-center  text-center md-font-extrabold mb-2">
              Strategy Planning
            </h2>
            <p className="text-left px-3 md:w-2/3  md:px-0 ">
              Innovative and time-effective strategies to ease the hiring
              process. It can provide a platform for knowledge exchange,
              collaboration, and networking, which can inform and shape
              strategic planning. Insights gained from academia can inform
              industry decision-making and help drive innovation.
            </p>
          </div>
          <div className="flex items-center justify-start md:order-2 order-1">
            <Image
              className="patimg md:ml-20 ml-0"
              src="/images/Solution.png"
              alt="card"
              width="400"
              height="400"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <Image
              className="patimg"
              src="/images/Networking.png"
              alt="card"
              width="400"
              height="400"
            />
          </div>
          <div className=" flex flex-col justify-center  lg:items-start items-center text-lg font-normal text-gray-300 mb-4 ">
            <h2 className="text-blue-400 md:text-3xl text-2xl md:text-left text-center md-font-extrabold mb-2">
              Building Industry to Industry Connection
            </h2>
            <p className="text-left px-3 md:w-2/3  md:px-0 ">
              An opportunity to interact with prominent delegates from other
              industries and research institutes during IMPETUS 2023.It can help
              build connections with industries by providing opportunities for
              networking, knowledge exchange, and collaboration, leading to
              potential partnerships and business opportunities..
            </p>
          </div>
        </div>
      </section> */}


      <Contact />
    </section>
  );
}
