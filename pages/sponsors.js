import { Typography, Box, Button } from "@mui/material";
import Contact from "../components/Contact";
import SponsorCard from "../components/SponsorCard";

export default function SponsorsPage() {
  const styles = {
    pageContainer: {
      position: "relative",
      overflow: "hidden",
    },
    /* backgroundImage: {
     position: "fixed",
     top: 0,
     left: 0,
     width: "100%",
     height: "100%",
     backgroundImage: "url('/images/ImpetusBS7.jpeg')",
     backgroundSize: { xs: "150%", sm: "cover" },
     backgroundPosition: "center",
     zIndex: 0,
     opacity: 0.4, 
   }, */
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
      background: "linear-gradient(90deg, #ffd700, #ff6347)", 
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: 700,
      fontFamily: "'Rowdies'",
      fontWeight: 'bold', 
      lineHeight: 1.5, 
      paddingBottom: "0px",
    },
    cardsContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: { xs: 0.3, md: 0.5 },
    },
    paragraph: {
      textAlign: "center",
      fontSize: { xs: "16px", md: "18px" },
      lineHeight: 1.6,
      fontWeight: 500,
      color: "#E0E0E0",
      fontFamily: "'Roboto', sans-serif",
      maxWidth: "800px",
      mx: "auto", 
      mt: 2,
      mb: 3,
      marginTop: "-17px",
      p: { xs: 1, md: 2 },
    },
    button: {
      mt: 2,
      mb: 4,
      background: "linear-gradient(45deg, #FF8E53, #FF3CAC)",
      color: "#FFFFFF",
      fontWeight: "bold",
      textAlign: "center",
      marginTop:"-17px",
      marginBottom:"38px",
    },
    sectionTitle: {
      fontSize: { xs: "24px", md: "32px" },
      fontWeight: "bold",
      mt: 4,
      mb: 2,
      marginTop:"-5px",
      fontFamily: "'Rowdies'",
      textAlign: "center",
      background: "linear-gradient(90deg, #1E90FF, #00BFFF)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "1px 1px 3px rgba(0, 0, 139, 0.3)", // Soft shadow glow for depth
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
      <Box className="center1" style={{ marginTop: "100px" }}>
          <Typography sx={styles.sectionTitle}>Want to Sponsor Us?</Typography>
          <Typography sx={(styles.paragraph)}>
            Partnering with us at Impetus 8.0 lets you showcase your brand to future innovators in engineering and technology. Gain visibility, connect with engaged audiences, and make a memorable impact. Let’s build the future together.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              ...styles.button,
              mt: 0.1,
              mb: 2,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                background: "linear-gradient(45deg, #FF3CAC, #FF8E53)", // Reverse gradient colors on hover
              },
            }}
            href="/docs/sponsorBrochr.pdf"
            target="_blank"
          >
            Download Brochure
          </Button>
          <Typography sx={styles.sectionTitle}>About Our College</Typography>
          <Typography sx={styles.paragraph}>
            Founded in 1856, the Indian Institute of Engineering Science and Technology (IIEST), Shibpur, is India’s second oldest engineering college. Formerly Bengal Engineering College, it became a Deemed University in 1992, a full university in 2004, and is now an Institute of National Importance. Ranked among the top 10 NITs in the country (NIRF Engg. 2024), IIEST has a rich legacy in research, engineering, culture, and politics, with a global alumni network. For over a century, it has been a beacon of excellence in education and innovation.
          </Typography>
          <Typography sx={styles.sectionTitle}>About IMPETUS</Typography>
          <Typography sx={styles.paragraph}>
            IMPETUS is an annual technical event by the Society of Mechanical Engineers (SME) at IIEST, Shibpur, aimed at bridging industry and students. This event gathers experts from diverse sectors, offering students valuable exposure to practical knowledge and real-world engineering applications. IMPETUS provides unique opportunities for interaction with industry professionals, ensuring participants leave enriched and inspired.
          </Typography>
          <Typography sx={styles.sectionTitle}>Sponsor Categories</Typography>
          <Typography sx={styles.paragraph}>
            Discover a range of sponsorship opportunities tailored to maximize your brand’s visibility and engagement at our event...
          </Typography>
        </Box>
        <Box
          component="img"
          src="/docs/Group_22.png" 
          alt="Sponsor Categories"
          sx={{
            width: "100%", 
            maxWidth: "600px", 
            height: "auto", 
            margin: "20px auto", 
            display: "block", 
          }}
        />
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
        </Box> */}

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
          margin: "-20px",
        }}>
          <Contact />
        </Box>
      </Box>
    </Box>
  );
}