import React from "react";
import { Box, Typography } from "@mui/material";

const SponsorCats = () => {
  const sponsors = [
    { name: "Industry-Academia Meet Sponsor", cost: 50000 },
    { name: "Robowar Arena Partner", cost: 150000 },
    { name: "Co-Sponsor", cost: 125000 },
    { name: "Title Sponsor", cost: 175000 },
  ];

  // Calculate proportional left positions based on sponsorship cost
  const maxCost = Math.max(...sponsors.map((sponsor) => sponsor.cost));
  const minCost = Math.min(...sponsors.map((sponsor) => sponsor.cost));

  return (
    <Box sx={{ textAlign: "center", height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Line for sponsor visualization positioned lower */}
      <Box sx={{ position: "relative", width: "90vw", height: "60vh", borderBottom: "2px solid #aaa" }}>
        {sponsors.map((sponsor, index) => {
          // Calculate left position as a percentage based on the cost, with slight adjustment for "Industry-Academia Meet Sponsor"
          const leftPosition = sponsor.name === "Industry-Academia Meet Sponsor"
            ? "15%"  // Moves it within bounds for visibility
            : `${((sponsor.cost - minCost) / (maxCost - minCost)) * 80 + 10}%`; // Keep all elements within the view

          return (
            <Box
              key={index}
              sx={{
                position: "absolute",
                left: leftPosition,
                bottom: "20%", // Position elements above the line
                transform: "translateX(-50%)",
                textAlign: "center",
              }}
            >
              {/* Sponsor Category Name */}
              <Typography
                variant="h5"
                sx={{
                  fontFamily: sponsor.name === "Title Sponsor" ? "'Georgia', serif" : "'Brush Script MT', cursive",
                  fontWeight: "bold",
                  fontSize: "1.4em",
                  background: "linear-gradient(90deg, #FF5733, #FFC300)", // Reddish-yellow gradient
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 0.5,
                }}
              >
                {sponsor.name}
              </Typography>

              {/* Sponsorship Cost */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1.1em",
                  background: "linear-gradient(90deg, #4caf50, #81c784)", // Green gradient for cost
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: "bold",
                }}
              >
                ₹{(sponsor.cost / 100000).toFixed(2)} Lakh
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SponsorCats;



