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
      backgroundSize: { xs: "150%", sm: "cover" }, // Zoom out for mobile view
      backgroundPosition: "center",
      zIndex: 0,
      opacity: 0.4,
    },
    glassOverlay: {
      position: "relative",
      zIndex: 1,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(10px)",
      padding: "20px",
      margin: "auto",
      maxWidth: "1200px",
      width: "90%",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
      borderRadius: "0",
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
      fontFamily: "'Rowdies'",
      fontWeight: 'bold', // Updated font
      lineHeight: 1.5, // Adjust line height to prevent clipping
      paddingBottom: "0px",
    },
    cardsContainer: {
      display: "grid",
      gridTemplateColumns: {
        xs: "repeat(2, 1fr)", // Two columns on mobile
        sm: "repeat(3, 1fr)", // Three columns on tablet
        md: "repeat(4, 1fr)", // Four columns on desktop
      },
      gap: { xs: 1, md: 2 },
      padding: { xs: 1, sm: 2, md: 3 }, // Padding adjustments for different viewports
    },
    sponsorCard: {
      padding: "10px", // Prevent logo cropping by adding padding
      boxSizing: "border-box",
    },
  };

  const sponsor = {
    /* sponsor1: { imgname: "Gainwell.png", link: "https://www.gainwellengineering.com/" },
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
    sponsor14: { imgname: "McPro.png", link: "" }, */
  };

  const pastSponsors = [
    { imgname: "Gainwell.png", link: "https://www.gainwellengineering.com/" },
    { imgname: "Mahr.jpg", link: "https://www.mahr.com/en-us/" },
    { imgname: "Purahsara.png", link: "https://www.linkedin.com/company/purahsara/about/" },
    { imgname: "Edugraph.jpg", link: "https://www.telegraphindia.com/edugraph" },
    { imgname: "IOCL.jpg", link: "https://iocl.com/" },
    { imgname: "ISHRAE.jpg", link: "https://ishrae.in/" },
    { imgname: "Cognitive.jpg", link: "#" },
    { imgname: "lal.jpeg", link: "https://lalbabagroup.com/" },
    { imgname: "IMechE.jpg", link: "https://www.imeche.org/" },
    { imgname: "BlackbirdRobotix_1.png", link: "https://blackbirdrobotix.in/" },
    { imgname: "StockEdge.jpg", link: "https://stockedge.com/" },
    { imgname: "GEMS.jpg", link: "https://www.linkedin.com/company/genex-engineering-management-solutions/about/" },
    { imgname: "Virel.jpg", link: "https://www.facebook.com/VIREL.Kolkata/about" }, 
    { imgname: "McPro.png", link: "#" },
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

  return (
    <Box sx={styles.pageContainer}>
      {/* Background Image */}
      <Box sx={styles.backgroundImage} />
      {/* Glass Overlay */}
      <Box sx={styles.glassOverlay}>
        {/* <Box className="center1" style={{ marginTop: "100px" }}>
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
        </Box> */}..............................COMING SOON!

        {/* Past Sponsors - Static Display */}
        <Box className="center1" style={{ marginTop: "100px" }}>
          <Typography variant="h1" sx={styles.h1}>Past Sponsors</Typography>
          <Box sx={styles.cardsContainer}>
            {pastSponsors.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} isPastSponsor />
            ))}
          </Box>
        </Box>
        <Box sx={{
          margin:"-20px",
        }}>
          <Contact />
        </Box>
      </Box>
    </Box>
  );
}
