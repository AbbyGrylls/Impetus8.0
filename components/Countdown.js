import { Box, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
export default function Countdown() {
  const [seconds, setSeconds] = useState(0);
  const [mins, setMins] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [dead, setDead] = useState(false);
  const [end, setEnd] = useState(false);
  const theme = useTheme();

  const deadline = "February, 7, 2025";
  const end_deadline = "February, 9, 2025";
  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    const endtime = Date.parse(end_deadline) - Date.now();
    if (time <= 0 && endtime >= 0) setDead(true);
    else if (endtime < 0) setEnd(true);
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMins(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  const styles = {
    display: "flex",
    flexDirection: "row",
    maxWidth: "90vw",
    div: {
      width: "80px",
      height: "80px",
      margin: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backdropFilter: "blur(5px)",
    },
  };

  if (dead)
    return (
      <Box>
        <Typography
          sx={{ margin: "50px", zIndex: "2", position: "relative" }}
          variant="h2"
        >
          IS LIVE NOW!
        </Typography>
      </Box>
    );
  else if (end)
    return (
      <Box>
        <Typography
          sx={{ margin: "50px", zIndex: "2", position: "relative" }}
          variant="h2"
        >
          HAS ENDED
        </Typography>
      </Box>
    );

  return (
    <Box sx={{ margin: "2% 0" }} className="center1">
      <Box sx={styles}>
        <Box>
          <Typography variant="h2">{("0" + days).slice(-2)}</Typography>
          <Typography variant="p">days</Typography>
        </Box>
        <Box>
          <Typography variant="h2">{("0" + hours).slice(-2)} </Typography>
          <Typography variant="p">hours</Typography>
        </Box>
        <Box>
          <Typography variant="h2">{("0" + mins).slice(-2)} </Typography>
          <Typography variant="p">min</Typography>
        </Box>
        <Box>
          <Typography variant="h2">{("0" + seconds).slice(-2)}</Typography>
          <Typography variant="p">sec</Typography>
        </Box>
      </Box>
      <Typography
       onClick={()=>{window.scrollTo({ top: window.innerHeight + 200, behavior: 'smooth' })}}
        sx={{ margin: "20px 0", fontSize: "22px !important", zIndex: "2" }}
        variant="h2"
        className="animate-bounce cursor-pointer"
      >
        TO START
      </Typography>
    </Box>
  );
}
