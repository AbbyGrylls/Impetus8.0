import { Box } from "@mui/system";
import Image from "next/image";

const styles = (hoverEffect, dimmed) => ({
  height: { xs: "180px", md: "250px" },
  width: { xs: "280px", md: "400px" },
  margin: "auto",
  cursor: hoverEffect ? "pointer" : "default", // Disable cursor for past sponsors
  transition: "transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease",
  opacity: dimmed ? 0.5 : 1, // Reduce opacity for dimmed effect
  "&:hover": hoverEffect
    ? {
        transform: "scale(1.05)", // Scale up the card on hover
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)", // Add a shadow on hover
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
        width={300}
        height={210}
      />
    </Box>
  );
};

export default SponsorCard;

