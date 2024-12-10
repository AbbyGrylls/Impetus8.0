import { Typography, useTheme, Button } from "@mui/material";
import { Box, display } from "@mui/system";
import { useInView } from "react-intersection-observer";

const Timeline = () => {
  
  const [timelineRef, timelineInView] = useInView({ threshold: 0.1 });
  return (
    <Box
      sx={{
        position: "relative",
        margin: "20px auto",
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}

    >
      {/* Main Red Timeline Line */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: "100%",
          width: "6px",
          backgroundColor: "red",
          zIndex: 0,
        }}
      />
      {/* Phases */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "50px", // Increased gap between phase boxes
          width: "100%",
          position: "relative",
        }}
      >
        {[
          { phase: "Event Announcement", date: "tbd", description: "Event details and rulebook announced" },
          { phase: "Registrations Open", date: "tbd", description: "Fill up the registration form and make yourself ready for the destruction" },
          { phase: "Event Day", date: "tbd", description: "..And the long awaited show begins" },
          { phase: "Results Announcement", date: "tbd", description: "The winners will be announced along the prizes" },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
              width: "100%",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Phase Box */}
            <Box
              ref={timelineRef}
              sx={{
                padding: "20px",
                width: {
                  xs: "40%", // Adjusted size for smaller screens
                  sm: "40%", // Equal size for left and right boxes
                  md: "40%", // Wider boxes for medium screens
                },
                maxWidth: "400px",
                textAlign: index % 2 === 0 ? "right" : "left",
                marginLeft: index % 2 === 0 ? "10px" : "0",
                marginRight: index % 2 === 0 ? "0" : "10px",
              }}
            >
              <Typography
                sx={{
                  color: "rgb(255, 67, 24)",
                  fontSize: "1rem",
                  textTransform: "uppercase",
                  fontFamily: "'Bebas Neue', sans-serif",
                  marginBottom: "10px",
                }}
              >
                {item.date}
              </Typography>
              <Typography
                sx={{
                  color: "rgb(255, 67, 24)",
                  fontSize: "1.25rem",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  fontFamily: "'Bebas Neue', sans-serif",
                  marginBottom: "10px",
                }}
              >
                {item.phase}
              </Typography>
              <Typography
                sx={{
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  color: "#fff",
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
 
export default Timeline;