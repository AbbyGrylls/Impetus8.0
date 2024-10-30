import { Box } from "@mui/system";
import Image from "next/image";

const styles = (hoverEffect, dimmed) => ({
  height: { xs: "180px", md: "250px" },
  width: { xs: "280px", md: "400px" },
  margin: "auto",
  padding: "0", // Remove padding to reduce gap
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
    <Box sx={styles(!isPastSponsor, isDimmed)} className="card" onClick={handleClick}>
      <Image
        src={`/images/${sponsor.imgname}`}
        alt={sponsor.altText || "Sponsor logo"}
        width={280} // Adjust width if necessary to fine-tune spacing
        height={180} // Adjust height if necessary to fine-tune spacing
        style={{ objectFit: "contain" }} // Ensures the image fits within the box
      />
    </Box>
  );
};

export default SponsorCard;


