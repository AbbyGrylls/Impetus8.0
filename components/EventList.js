import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";

export default function EventList({ setCurrIdx, currIdx }) {
  const theme = useTheme();

  const styles = {
    position: "fixed",
    height: "100vh",
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    alignItems: "center",
    justifyContent: "center",
    "div h1": {
      fontSize: "48px",
      fontWeight: "400",
      margin: "20px 0",
    },
    "div h4": {},
  };

  const events = [
    "CADathon",
    "Yantra Search",
    "Heatovation",
    "Scrapyard",
    "IQ Ignition",
    "Death Race",
    "Drone Pursuit",
    "Valorant",
    "Fun Bunkers",
  ];

  return (
    <Box sx={styles}>
      <Box>
        <Typography variant="h1">Events</Typography>
        {events.map((eve, idx) => {
          return (
            <p
              className={`tracking-normal cursor-pointer text-xl font-normal py-1 ${
                currIdx === idx ? "text-slate-50 text-2xl" : "text-gray-400"
              }`}
              onClick={() => setCurrIdx(idx)}
              key={eve}
            >
              {eve}
            </p>
          );
        })}
      </Box>
    </Box>
  );
}
