import { Container, Box, Button, Typography} from "@mui/material";
import ImageListComp from "../components/ImageListComp";

export default function Gallery(){
  return(
    <Box sx={{marginTop:"100px"}}>
        {/* <Typography
          variant="h2"
          style={{
            fontFamily: "Rowdies",
            margin: "0 30px",
            textAlign: "center",
          }}
        >
          SOME MOMENTS OF PREVIOUS EDITIONS
        </Typography> */}
        <br></br>
        <ImageListComp />
        
      </Box>
  )
}
