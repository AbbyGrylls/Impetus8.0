import React from "react";
import { Bar } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SponsorCats = () => {
  const data = {
    labels: ["Industry-Academia Meet Sponsor", "Robowar Arena Partner", "Co-Sponsor", "Title Sponsor"],
    datasets: [
      {
        label: "Sponsorship Cost (in INR)",
        data: [50000, 150000, 125000, 175000],
        backgroundColor: "rgba(63, 81, 181, 0.7)",
        borderColor: "rgba(63, 81, 181, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: (context) => `INR ${context.raw.toLocaleString()}` } },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: { callback: (value) => `INR ${value / 1000}k` },
        title: { display: true, text: "Sponsorship Cost (in Lakhs)", font: { size: 14 } },
      },
    },
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", my: 4, textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold", color: "#333" }}>
        Sponsorship Categories and Costs
      </Typography>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default SponsorCats;
