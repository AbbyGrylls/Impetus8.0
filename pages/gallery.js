import { Box} from "@mui/material";

const imgStyle = {
  width: "100%",
  marginBottom: "1em",
};

export default function Gallery(){

  const images = Array.from({ length: 31 }, (_, i) => `/images/gallery/imag${i + 1}.webp`);
  return(
    <Box sx={{margin:"50px 50px", marginTop:"100px"}}>
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

        <div className="list" style={{columns:"300px",}}>
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Image ${index + 1}`} className="w-full h-auto rounded-lg shadow-md" style={imgStyle} />
          ))}
        </div>  

        
      </Box>
  )
}
