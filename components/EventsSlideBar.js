import { Container, Box, Button, Typography} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import SponsorCard from "./SponsorCard";

export default function EventsSlideBar() {
  const events = [
    { imgname: "CADPoster.png", link: "events/cadathon" },
    { imgname: "DeathRace.png", link: "events/deathrace" },
    { imgname: "DronePursuit.png", link: "events/dronePursuit" },
    { imgname: "HEATOVATION.png", link: "events/heatovation" },
    { imgname: "iQigni.png", link: "events/iQignition" },
    { imgname: "Scrapyard.png", link: "events/scrapyard" },
    { imgname: "ValorantPoster.png", link: "events/valorant" },
    { imgname: "Yantrasearch.png", link: "events/yantrasearch" },
  ];
   const styles={
    cardsContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: { xs: 0.3, md: 0.5 },
      },
   }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000, 
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    beforeChange: (current, next) => {
      document.querySelectorAll(".slick-slide").forEach((slide) => {
        slide.style.transform = "scale(1)";
        slide.style.filter = "brightness(1)";
      });
    },
    afterChange: () => {
      document.querySelector(".slick-center")?.style.setProperty("transform", "scale(1)");
      document.querySelector(".slick-center")?.style.setProperty("filter", "brightness(1)");
    },
  };

  return (
    <Box sx={{marginBottom:"-10px",}}>
        <Typography variant="h1" sx={{
           textAlign:"center",
           marginBottom:"30px",
           fontSize:"3rem"
        }}
        > Our Events</Typography>
      <Slider {...settings}>
        {events.map((event, index) => (
          <Box
            key={index}
            sx={{
              textAlign: "center",
              padding: 2,
              transition: "0.3s",
            }}
          >
            <Button href={event.link} sx={{ textDecoration: "none", color: "inherit" }}>
                <Box sx={styles.cardsContainer}> 
                <Image 
                    width="300"
                    height="400" sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "10px",
                    boxShadow: 2,
                    transition: "0.3s",
                }} src={"/images/EventPosters/"+event.imgname} /></Box>
                
            </Button> 
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
