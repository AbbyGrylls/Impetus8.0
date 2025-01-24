import { useTheme } from "@emotion/react";
import { Box, fontFamily } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";



export default function EventPage() {
    //----------------------------
  const prevBtn = useRef(null);
  const nextBtn = useRef(null);
  const carouselRef = useRef(null);

  const [active, setActive] = useState(0);

  const router = useRouter();

  const items = [
    {
      id: 1,
      image: "/images/events/Cadathon.jpg",
      title: "CADATHON",
      category: "Design-&-CAD",
      description: "This competition aims to develop the idea of assembly of 3D structures on a CAD software.This event will be organized by the Society of Automotive Engineers (SAE), IIEST Shibpur  under the banner of 'Impetus 8.0'.",
      regLink: "https://forms.gle/ZTjNRtyFgKXEV2Tv7",
    },
    {
      id: 2,
      image: "/images/events/Yantrasearch.jpg",
      title: "YANTRASEARCH",
      category: "Problem-Solving",
      description: "This event organized by ASME IIEST, aims to give you all the excitement of treasure hunt.You can look forward to having fun while solving mysteries together and hunting down simple machines in our college campus.",
      regLink: "https://forms.gle/zVVLVsUvVZgZEuG28",
    },
    {
      id: 3,
      image: "/images/events/heatovation.jpg",
      title: "HEATOVATION",
      category: "HVAC-&-Entrepreneurship",
      description: "'Heatovation', organized by Impetus 8.0 in association with ISHRAE-IIEST Kolkata chapter empowers social entrepreneurs to create a culture for entrepreneurship and to promote entrepreneurial education in the field of HVAC.",
      regLink: "https://docs.google.com/forms/d/e/1FAIpQLSf-wT50-fijiElPM7-JLE7p2UdDnmDUrYHzxPeohyTDCmLFLA/viewform",
    },
    {
      id: 4,
      image: "/images/events/scrapyard.jpg",
      title: "SCRAPYARD",
      category: "Innovation",
      description: "Innovation need not come from what everyone considers to be a resource; it can also come from making use of what others consider to be waste and producing something useful. With this thought in mind Impetus 8.0 presents to you 'Scrapyard'",
      regLink: "https://forms.gle/YW4dXrUNvUvQo7bu7",
    },
    {
      id: 5,
      image: "/images/events/iQIgnition.jpg",
      title: "IQ IGNITION",
      category: "Quizzing-&-Knowledge",
      description: "To instil the essence of quizzing, IMechE IIEST, Shibpur brings to you a Grand General Technical Quiz: ' Suspects' under the banner of Impetus 8.0 .The quiz tests and showcases students' technical knowledge and skills.",
      regLink: "https://forms.gle/b3SgxfnNhuWQ3bFc6",
    },
    {
      id: 6,
      image: "/images/events/Deathrace.jpg",
      title: "DEATH RACE",
      category: "Robotics",
      description: "The Death Race is a thrilling competition that brings together talented individuals to showcase their skills in building and maneuvering a robot through a challenging track filled with obstacles.",
      regLink: "https://forms.gle/W3f6VdQbcFyBvsaT8",
    },
    {
      id: 7,
      image: "/images/events/Dronepursuit.png",
      title: "DRONE PURSUIT",
      category: "Drones",
      description: "Through Drone Pursuit, IMPETUS and ROBODARSHAN give you the chance to showcase your skills. In Drone Pursuit, participants fly drones through hurdles and gates to win the race. Bring your models to life and make this competition a great success.",
      regLink: "https://forms.gle/e9SLGrNviaA6EASP9",
    },
    {
      id: 8,
      image: "/images/events/Valorant.jpg",
      title: "VALORANT",
      category: "Gaming-&-Esports",
      description: "The Valorant gaming event is a competition that brings together talented players to showcase their skills and compete for recognition. It is an exciting opportunity for Valorant fans to experience high-level gameplay and celebrate the top talent in the game.",
      regLink: "https://forms.gle/TDZPpbcoTQFE1UDB7",
    },    
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
  ];
  const lastPosition = items.length - 1;

    const setSlider = () => {
      const carousel = carouselRef.current;      
      const itemNodes = carousel.querySelectorAll(".events_list .events_item");
      itemNodes.forEach((item, index) => {
        if (index === active) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });

    
    const dotNodes = carousel.querySelectorAll(".events_indicators ul li");
    dotNodes.forEach((dot, index) => {
      if (index === active) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    
    const numberIndicator = carousel.querySelector(".events_number");
    if (numberIndicator) {
      numberIndicator.textContent = `0${active + 1}`;
    }
  };



  
  const handleNext = () => {
    setActive((prev) => (prev + 1 > lastPosition ? 0 : prev + 1));
    carouselRef.current.style.setProperty("--calculation", 1);
  };

  
   const handlePrev = () => {
    setActive((prev) => (prev - 1 < 0 ? lastPosition : prev - 1));
    carouselRef.current.style.setProperty("--calculation", -1);
  };

  
  const handleDotClick = (index) => {
    setActive(index);
  };

   
   useEffect(() => {
    setSlider();
  }, [active]);



  return(
    <Box className="events_body">
      <Box className="events_carousel" ref={carouselRef}>
        <div className="events_list">
          {items.map((item, index) => (
          <div 
          key={index}
          className={`events_item ${index === active ? "active" : ""}`} 
          >
            <figure>
              {/* <img src="/images/events/cadathon.jpg" alt="as" /> */}
              <img
                  src={item.image}
                  alt={`Event ${item.id}`}
              />
            </figure>
            <div className="events_content">
                    <p className="events_category">
                    {item.category} 
                    </p>
                    <h2>
                    {item.title}
                    </h2>
                    <p className="events_description">                        
                        {item.description}
                    </p>
                    <div className="events_more">
                        <button onClick={(event)=>(window.location.href = item.regLink)}>
                            Register
                        </button>
                        <button onClick={(event)=>(router.push(`/events/${link[index % 8]}`))}
                          style={{display:"flex", alignItems:"center", justifyContent:"center"}}
                          >
                            <i className="fa-solid fa-play"></i> See More
                        </button>
                        
                    </div>
                </div>
          </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <div className="events_arrows">
            <button onClick={handlePrev}><i className="fa-solid fa-chevron-left"></i></button>
            <button onClick={handleNext}><i className="fa-solid fa-chevron-right"></i></button>
        </div>

        {/* Indicators */}
        <div className="events_indicators" >
            <div className="events_number">01</div>
            <ul>
            {items.map((_, index) => (
              <li
                key={index}
                className={index === active ? "active" : ""}
                onClick={() => handleDotClick(index)}
              ></li>
            ))}
          </ul>
        </div>
      </Box>
      
    </Box>
  );
    
};

