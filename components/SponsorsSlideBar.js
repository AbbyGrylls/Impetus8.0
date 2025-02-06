import { Container, Box, Button, Typography} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import SponsorCard from "./SponsorCard";

export default function SponsorsSlideBar() {
  const events = [
    { imgname: "sponsors/Tega.png", link: "https://www.tegaindustries.com/" },
    { imgname: "sponsors/faradic.jpg", link: "https://www.linkedin.com/company/faradic/" },
    { imgname: "sponsors/epaG.png", link: "https://epaglobal.com/" },
    { imgname: "sponsors/imperial.jpg", link: "https://www.imperial-overseas.com/" },
    { imgname: "sponsors/ims.png", link: "https://www.imsindia.com/" },
    { imgname: "sponsors/valo.png", link: "https://playvalorant.com/en-gb/" },
    { imgname: "sponsors/gems.png", link: "http://www.genexsolutions.in/" },
    { imgname: "Edugraph.jpg", link: "https://www.telegraphindia.com/edugraph" },
    { imgname: "sponsors/evepaperLgt.png", link: "https://evepaper.com/" },
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
        > Our Sponsors</Typography>
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
                {/* <Box sx={styles.cardsContainer}> 
                <Image 
                    width="200"
                    height="100" sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "10px",
                    boxShadow: 2,
                    transition: "0.3s",
                }} src={"/images/"+event.imgname} /></Box> */}
                <SponsorCard sponsor={event} />
            </Button> 
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
