import { Typography, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";

const phases = [
  {
    phase: "Event Announcement",
    date: "tbd",
    description: "Event details and rulebook announced",
  },
  {
    phase: "Registrations Open",
    date: "tbd",
    description: "Fill up the registration form and make yourself ready for the destruction",
  },
  {
    phase: "Event Day",
    date: "tbd",
    description: "..And the long awaited show begins",
  },
  {
    phase: "Results Announcement",
    date: "tbd",
    description: "The winners will be announced along the prizes",
  },
];

const Timeline = () => {
  // Use an array of refs and inView states
  const refsAndStates = phases.map(() => useInView({ threshold: 0.1 }));

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
        {phases.map((item, index) => {
          const { ref, inView } = refsAndStates[index];
          return (
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
                ref={ref}
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
                  transition: "all 0.8s ease",
                  transform: inView
                    ? "translate(0, 0)" // Final position when in view
                    : index % 2 === 0
                    ? "translate(-50px, -50px)" // Transition for left items
                    : "translate(50px, -50px)",
                  opacity: inView ? 1 : 0,
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
          );
        })}
      </Box>
    </Box>
  );
};

export default Timeline;
