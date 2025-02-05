import { Typography, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";

const phases = [
    { head : "Innovative Solutions", des:"Addressing technical challenges through collaborative projects and expert consultancy services."},
    {head:"Research Excellence", des:"Showcasing practical solutions with in-depth studies and research publications by esteemed academicians."},
    {head:"Streamlined Hiring", des:"Implementing innovative and time-efficient strategies to optimize the hiring process."},
    {head:"Collaborative Engagement",des:"Fostering active interactions between industries and scholars to collectively tackle challenges."},
    {head:"Networking Opportunities",des:"Building valuable connections with distinguished delegates from various industries and research institutes."}
];

const TakeawayTimeline = () => {
  // Explicitly declare refs and inView states for each phase
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.1 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.1 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.1 });
  const {ref: ref5, inView: inView5} = useInView({threshold: 0.1 });

  const refs = [ref1, ref2, ref3, ref4, ref5];
  const inViews = [inView1, inView2, inView3, inView4, inView5];

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
          height: {
            xs: "100%",
            //md: "60%",
          },
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
          //gap: "20px",
          width: "100%",
          position: "relative",
        }}
      >
        {phases.map((item, index) => {
          const ref = refs[index];
          const inView = inViews[index];

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
              //  backgroundColor:"#999"
              }}
            >
              <Box
                ref={ref}
                sx={{
                  padding: "20px",
                  width: {
                    xs: "40%",
                    sm: "40%",
                    md: "40%",
                  },
                  maxWidth: "400px",
                  textAlign: index % 2 === 0 ? "right" : "left",
                  marginLeft: index % 2 === 0 ? "10px" : "0",
                  marginRight: index % 2 === 0 ? "0" : "10px",
                  transition: "all 0.8s ease",
                  transform: inView
                    ? "translate(0, 0)"
                    : index % 2 === 0
                    ? "translate(-50px, -50px)"
                    : "translate(50px, -50px)",
                  opacity: inView ? 1 : 0,
                  
                //backgroundColor:"#666"
                }}
              >
                <Typography
                  sx={{
                    color: "#FF7000",
                    fontSize: "1.25rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    fontFamily: "'Bebas Neue', sans-serif",
                    marginBottom: "10px",
                    lineHeight:"20px"
                  }}
                >
                  {item.head}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "1rem",
                    lineHeight: 1.1,
                    color: "#fff",
                    fontFamily: "'Bebas Neue', sans-serif",
                  }}
                >
                  {item.des}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default TakeawayTimeline
