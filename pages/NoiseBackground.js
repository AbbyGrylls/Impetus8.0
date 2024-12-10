import { useEffect, useRef } from "react";

const NoiseBackground = ({ style = {} }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
     
      const stepSize = 1;  
      for (let i = 0; i < imageData.data.length; i += stepSize * 4) {
        const shade = Math.random() * 10 + 5; 
       
        imageData.data[i] = shade; 
        imageData.data[i + 1] = shade; 
        imageData.data[i + 2] = shade; 
        imageData.data[i + 3] = 250; 
      }
      ctx.putImageData(imageData, 0, 0);
    };

    generateNoise();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        ...style,
        pointerEvents: "none",
      }}
    />
  );
};

export default NoiseBackground
