import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import Contact from "../components/Contact";
import SponsorCard from "../components/SponsorCard";

export default function SponsorsPage() {
  const styles = {
    pageContainer: {
      position: "relative",
      overflow: "hidden",
    },
    backgroundImage: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: "url('/images/ImpetusBS7.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 0,
      opacity: 0.4, // Adjusted for better readability
    },
    gradientBackground: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -2,
      background: "linear-gradient(120deg, #ff7e5f, #feb47b, #ff6a88, #d7644e, #fc6767)",
      backgroundSize: "400% 400%",
      animation: "gradientAnimation 15s ease infinite",
      opacity: 0.9, // Adjust opacity for gradient overlay
    },
    glassOverlay: {
      position: "relative",
      zIndex: 1,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
      borderRadius: "15px",
      padding: "20px",
      margin: "auto",
      maxWidth: "1200px",
      width: "90%",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    },
    h1: {
      mt: { lg: "100px", xs: "60px" },
      mb: { lg: "50px", xs: "20px" },
      fontSize: {
        lg: "54px",
        sm: "50px",
        xs: "32px",
      },
      height: "auto",
      background: "linear-gradient(90deg, #ffd700, #ff6347)", // Gold to red gradient
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: 700,
      fontFamily: "'Roboto Slab', serif",
    },
    cardsContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: { xs: 2, md: 4 },
    },
  };

  const sponsor = {
    sponsor1: { imgname: "Gainwell.png", link: "https://www.gainwellengineering.com/" },
    sponsor2: { imgname: "Mahr.jpg", link: "https://www.mahr.com/en-us/" },
    sponsor3: { imgname: "Purahsara.png", link: "https://www.linkedin.com/company/purahsara/about/" },
    sponsor4: { imgname: "Edugraph.jpg", link: "https://www.telegraphindia.com/edugraph" },
    sponsor5: { imgname: "IOCL.jpg", link: "https://iocl.com/" },
    sponsor6: { imgname: "ISHRAE.jpg", link: "https://ishrae.in/" },
    sponsor7: { imgname: "Cognitive.jpg", link: "#" },
    sponsor8: { imgname: "lal.jpeg", link: "https://lalbabagroup.com/" },
    sponsor9: { imgname: "IMechE.jpg", link: "https://www.imeche.org/" },
    sponsor10: { imgname: "BlackbirdRobotix_1.png", link: "https://blackbirdrobotix.in/" },
    sponsor11: { imgname: "StockEdge.jpg", link: "https://stockedge.com/" },
    sponsor12: { imgname: "GEMS.jpg", link: "https://www.linkedin.com/company/genex-engineering-management-solutions/about/" },
    sponsor13: { imgname: "Virel.jpg", link: "https://www.facebook.com/VIREL.Kolkata/about" },
    sponsor14: { imgname: "McPro.png", link: "" },
  };

  const sponsorData = [
    { imgname: "Logiczap.png", link: "#" },
    { imgname: "elearnmarkets.jpg", link: "#" },
    { imgname: "idp.jpg", link: "#" },
    { imgname: "iic.jpg", link: "#" },
    { imgname: "moople.jpg", link: "#" },
    { imgname: "ThinkAgainLab.jpg", link: "#" },
    { imgname: "Alo bus.png", link: "#" },
    { imgname: "Asawa insulation.png", link: "#" },
    { imgname: "Dyna Temp.png", link: "#" },
    { imgname: "Roasted.png", link: "#" },
    { imgname: "7Spices.png", link: "#" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsorData.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [sponsorData.length]);

  const displayedSponsors = [
    sponsorData[currentIndex],
    sponsorData[(currentIndex + 1) % sponsorData.length],
    sponsorData[(currentIndex + 2) % sponsorData.length],
  ];

  return (
    <Box sx={styles.pageContainer}>
      {/* Background Image */}
      <Box sx={styles.backgroundImage} />

      {/* Gradient Background */}
      <Box sx={styles.gradientBackground} />

      {/* Glass Overlay */}
      <Box sx={styles.glassOverlay}>
        <Box className="center1" style={{ marginTop: "100px" }}>
          <Typography variant="h1" sx={styles.h1}>Title Sponsor</Typography>
          <Box sx={styles.cardsContainer}>
            <SponsorCard sponsor={sponsor.sponsor1} />
          </Box>
          <Typography variant="h1" sx={styles.h1}>Co-Sponsor</Typography>
          <Box sx={styles.cardsContainer}>
            <SponsorCard sponsor={sponsor.sponsor2} />
            <SponsorCard sponsor={sponsor.sponsor3} />
          </Box>
          <Typography variant="h1" sx={styles.h1}>Media Partner</Typography>
          <Box sx={styles.cardsContainer}>
            <SponsorCard sponsor={sponsor.sponsor4} />
          </Box>
          <Typography variant="h1" sx={styles.h1}>Event Partner</Typography>
          <Box sx={styles.cardsContainer}>
            <SponsorCard sponsor={sponsor.sponsor5} />
            <SponsorCard sponsor={sponsor.sponsor6} />
            <SponsorCard sponsor={sponsor.sponsor7} />
            <SponsorCard sponsor={sponsor.sponsor8} />
            <SponsorCard sponsor={sponsor.sponsor9} />
            <SponsorCard sponsor={sponsor.sponsor14} />
          </Box>
          <Typography variant="h1" sx={styles.h1}>Technology Partner</Typography>
          <Box sx={styles.cardsContainer}>
            <SponsorCard sponsor={sponsor.sponsor10} />
          </Box>
          <Typography variant="h1" sx={styles.h1}>Gaming Partner</Typography>
          <Box sx={styles.cardsContainer}>
            <SponsorCard sponsor={sponsor.sponsor13} />
          </Box>
          <Typography variant="h1" sx={styles.h1}>Learning Partner</Typography>
          <Box sx={styles.cardsContainer}>
            <SponsorCard sponsor={sponsor.sponsor11} />
            <SponsorCard sponsor={sponsor.sponsor12} />
          </Box>
        </Box>

        <Box className="center1" style={{ marginTop: "100px" }}>
          <Typography variant="h1" sx={styles.h1}>Past Sponsors</Typography>
          <Box
            className="slideshow-container"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              overflow: "hidden",
            }}
          >
            {displayedSponsors.map((sponsor, index) => (
              <SponsorCard
                key={index}
                sponsor={sponsor}
                isPastSponsor
                isDimmed={index !== 1}
              />
            ))}
          </Box>
        </Box>

        <Contact />
      </Box>

      <style jsx global>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Import the Roboto Slab font from Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap');

        /* Apply the font globally for headings */
        h1 {
          font-family: 'Roboto Slab', serif;
        }
      `}</style>
    </Box>
  );
}

