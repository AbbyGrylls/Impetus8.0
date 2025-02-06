
export default function Gallery(){
  return(
    <Box>
        <Typography
          variant="h2"
          style={{
            fontFamily: "Rowdies",
            margin: "0 30px",
            textAlign: "center",
          }}
        >
          SOME MOMENTS OF PREVIOUS EDITIONS
        </Typography>
        <br></br>
        <ImageListComp />
        
      </Box>
  )
}
