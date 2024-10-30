import { Box } from "@mui/system";
import Image from "next/image";

const styles = (hoverEffect, dimmed) => ({
  height: { xs: "150px", md: "180px" }, // Adjusted box height
  width: { xs: "220px", md: "270px" }, // Adjusted box width
  margin: "8px", // Reduced margin to bring boxes closer
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: dimmed ? "rgba(30, 30, 30, 0.85)" : "rgba(40, 40, 40, 0.9)",
  borderRadius: "10px", // Decreased box border radius
  padding: "5px", // Reduced padding
  cursor: hoverEffect ? "pointer" : "default",
  transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease",
  opacity: dimmed ? 0.5 : 1,
  "&:hover": hoverEffect
    ? {
        transform: "scale(1.05)",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
      }
    : {},
});

const SponsorCard = ({ sponsor, isPastSponsor, isDimmed }) => {
  const handleClick = () => {
    if (sponsor.link) {
      window.open(sponsor.link, "_blank");
    }
  };

  return (
    <Box sx={styles(!isPastSponsor, isDimmed)} onClick={handleClick}>
      <Image
        src={`/images/${sponsor.imgname}`}
        alt={sponsor.altText || "Sponsor logo"}
        width={210} // Adjusted logo width to fit box
        height={140} // Adjusted logo height to fit box
        style={{ objectFit: "contain", borderRadius: "10px" }} // Added logo border radius
      />
    </Box>
  );
};

export default SponsorCard;


