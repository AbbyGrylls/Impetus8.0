import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const containerStyles = {
  marginTop: "50px",
  margin: {
    xl: "9% auto",
    lg: "9%",
    sm: "9%",
    xs: "9%",
  },
  backgroundColor: "#ffffff26",
  padding: "50px",
  maxWidth: "1500px",
  width: "85vw",
  borderRadius: "15px",
  // backdropFilter:"blur(15px)",
  padding: {
    xs: "0",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  h1: {
    padding: "20px 0",
    textAlign: {
      lg: "left",
      sm: "center",
      xs: "center",
    },
    fontSize: {
      lg: "48px",
      sm: "32px",
      xs: "32px",
    },
  },
};

const style = {
  display: "flex",
  alignItems: "center",
  maxWidth: "1280px",
  width: "70vw",
  gap: "35px",
  margin: "20px",
  marginBottom: "10px",
  flexDirection: {
    xs: "column-reverse",
    sm: "column-reverse",
    lg: "row",
  },
  ".content": {
    flex: "1",
    display: "flex",
    p: {
      overflowY: "hidden",
      lineHeight: "1.5",
      height: "auto",
      minHeight: "150px",
      color: "white",
      textAlign: "justify",
    },
    flexDirection: "column",
  },
  ".ButtonBox": {
    display: "flex",
    justifyContent: "center",
    margin: "25px 0",
    ".Btn": {
      border: "2px",
      borderRadius: "17px",
      padding: "10px 30px",
      color: "white",
      backgroundColor: "#00A7E7",
      ":hover": {
        backgroundColor: "#0079A3",
        color: "white",
      },
    },
  },
  ".tShirt": {
    backgroundColor: "#c4c4c4",
    width: {
      lg: "40%",
      sm: "50%",
      xs: "90%",
    },
    borderRadius: "10px",
  },
};
const Dot = () => {
  return (
    <FiberManualRecordIcon
      sx={{
        fontSize: "1rem", // Adjust size
        color: "black", // Adjust color
      }}
    />
  );
};

export default function MerchandiseComp() {

  return (
    <Box sx={containerStyles}>
      <Typography className="flux" variant="h1">
        Merchandise
      </Typography>
      <Box sx={style}>
        <Box className="content">
          <Typography variant="p" sx={{fontSize: "1rem"}}>
            {/* Ignite your creativity and design the ultimate t-shirt for Impetus 8.0! 🌟 <br></br>
          Let your imagination run wild and create a design that captures the essence of innovation 💡, technology 🖥, and the spirit of our college 🎓.<br></br><br></br>
          Submit your designs by <span style={{fontWeight:"bold", color:"#00A7E7"}}>10th January 2025</span>.<br></br> The winning design will be featured on official Impetus 8.0 merchandise, and the winner will receive free Impetus 8.0 merchandise 🎁. Let&apos;s make this year&apos;s t-shirt a masterpiece. */}
            Get ready to gear up for IMPETUS 8.0, with our exclusive and stylish official merchandise!😎👕<br></br>
            {/* 🔥 T-shirt Details:<br></br> */}
            <Dot /> Color: Black 🖤<br></br>
            <Dot /> Type: Polo T-shirt (collar T-shirt)<br></br>
            <Dot /> Sizes Available: S, M, L, XL, XXL, XXXL (special orders available in the second lot) <br></br>
            <Dot /> Cost: <span style={{fontWeight:"bold", color:"#00A7E7"}}>₹325</span> only<br></br>
            {/* ⏳ Availability: <br></br> */}
            T-shirts from the first lot are available based on demand and size. Limited stock, so don’t miss out—HURRY!
            <br></br>Flaunt your participation in style, and let IMPETUS 8.0 be a part of your wardrobe!

          </Typography>
          <Box className="ButtonBox">
            {/* <Button className="Btn" onClick={handleClick}>Buy Now</Button> */}
            <Button className="Btn"
              href="https://forms.gle/vgSSmepqsyUaoiQA8"
            >Submit</Button>
          </Box>
        </Box>
        <Box className="tShirt" sx={{ marginBottom: { sm: 0, lg: "120px" } }}>
          <img src="/images/home/TshirtFinal.png" alt="tshirt" />
        </Box>
      </Box>
    </Box>
  );
}