import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

const containerStyles = {
  marginTop: "50px",
  margin: "9% auto",
  backgroundColor: "#ffffff26",
  padding: { xs: "0", sm: "50px" },
  maxWidth: "1500px",
  width: "85vw",
  borderRadius: "15px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const style = {
  display: "flex",
  alignItems: "center",
  maxWidth: "1280px",
  width: "70vw",
  gap: "35px",
  margin: "20px 0",
  flexDirection: { xs: "column-reverse", lg: "row" },
  ".content": {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    p: {
      overflowY: "hidden",
      lineHeight: "1.5",
      minHeight: "150px",
      color: "white",
      textAlign: "justify",
    },
  },
  ".ButtonBox": {
    display: "flex",
    justifyContent: "center",
    margin: "25px 0",
    ".Btn": {
      border: "solid #00A7E7 2px",
      borderRadius: "17px",
      padding: "10px 30px",
      color: "white",
      ":hover": {
        backgroundColor: "#00A7E7",
      },
    },
  },
  ".tShirt": {
    backgroundColor: "#c4c4c4",
    width: { lg: "40%", sm: "50%", xs: "90%" },
    borderRadius: "10px",
  },
};

export default function MerchandiseComp() {
  return (
    <Box sx={containerStyles}>
      <Typography variant="h1" sx={{ padding: "20px 0", textAlign: "center", fontSize: { lg: "48px", xs: "32px" } }}>
        T-Shirt Design Contest
      </Typography>
      <Box sx={style}>
        <Box className="content">
          <Typography component="p">
            Ignite your creativity and design the ultimate t-shirt for Impetus 8.0! 🌟 <br />
            Let your imagination run wild and create a design that captures the essence of innovation 💡, technology 🖥, and the spirit of our college 🎓.
            <br />
            <br />
            Submit your designs by <span style={{ fontWeight: "bold", color: "#00A7E7" }}>10th January 2025</span>.
            <br />
            The winning design will be featured on official Impetus 8.0 merchandise, and the winner will receive free Impetus 8.0 merchandise 🎁. Let&apos;s make this year&apos;s t-shirt a masterpiece.
          </Typography>
          <Box className="ButtonBox">
            <Button
              className="Btn"
              href="https://docs.google.com/forms/d/e/1FAIpQLSe9w0Pp528U1TvNGUddCDMD7gcfFfgvIfDEJMYACQ1LFCve4Q/viewform"
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Box className="tShirt">
          <img src="/images/home/Tshirt.jpg" alt="T-shirt with Impetus design" />
        </Box>
      </Box>
    </Box>
  );
}
