import { Typography, Box } from "@mui/material";
import { useInView } from "react-intersection-observer";

const phases = [
    { head: "Strategic Networking", des: "Engage with key industry officials and HR leaders, fostering connections that drive impactful collaborations." },
    { head: "Hiring Trends Insight", des: "Access cutting-edge knowledge on foundational principles and emerging trends in campus recruitment." },
     { head: "Technical Excellence", des: "Witness demonstrations of exceptional technical prowess and success stories that highlight institutional achievements." },
    { head: "Future-Ready Engineers", des: "Partner with institutions dedicated to shaping industry-ready engineers for seamless recruitment integration." },
     { head: "Synergistic Ecosystem", des: "Contribute to cultivating a collaborative ecosystem that benefits students, academic institutions, and corporate stakeholders alike." }
];

const BenefitsTimeline = () => {
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
          backgroundColor: "#c75700",
          zIndex: 0,
        }}
      />
      {/* Phases */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          //gap: "50px",
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

export default BenefitsTimeline
