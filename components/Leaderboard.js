import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const rtdb = getDatabase();
    const leaderboardRef = ref(rtdb, "leaderboard");

    const unsubscribe = onValue(
      leaderboardRef,
      (snapshot) => {
        if (snapshot.exists()) {
          const data = Object.values(snapshot.val());

          const sortedData = data.sort((a, b) => {
            if (b.score === a.score) {
              return a.timestamp - b.timestamp;
            }
            return b.score - a.score;
          });

          setLeaderboard(sortedData); // Load all entries
        } else {
          setLeaderboard([]);
        }
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching leaderboard in real-time: ", error);
        setError("An error occurred while fetching the leaderboard.");
        setLoading(false);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (loading) return <p>Loading leaderboard...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1e1e1e, #2c2c2c)",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        maxWidth: "400px",
        margin: "20px auto",
        color: "#f0f0f0",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "1.2rem",
          marginBottom: "10px",
          color: "#00aaff",
          fontFamily:"Bebas Neue, sans-serif "
        }}
      >
        Leaderboard🏆
      </h2>
      {leaderboard.length > 0 ? (
        <div
          style={{
            maxHeight: "250px", // Fixed height for the leaderboard
            overflowY: "auto", // Make it scrollable
            scrollbarWidth: "thin", // For Firefox
            scrollbarColor: "#00aaff #2c2c2c", // For Firefox scrollbar color (blue track with dark thumb)
          }}
          className="leaderboard-scroll" // Class for mobile style
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "0.8rem",
              textAlign: "center",
            }}
          >
            <thead>
              <tr>
                <th style={headerCellStyle}>#</th>
                <th style={headerCellStyle}>Name</th>
                <th style={headerCellStyle}>Roll</th>
                <th style={headerCellStyle}>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.slice(0, 5).map((entry, index) => ( // Show top 5 entries
                <tr
                  key={index}
                  style={{
                    background: index % 2 === 0 ? "#242424" : "#1e1e1e",
                  }}
                >
                  <td style={bodyCellStyle}>{index + 1}</td>
                  <td style={bodyCellStyle}>{entry.name}</td>
                  <td style={bodyCellStyle}>{entry.rollNumber}</td>
                  <td style={bodyCellStyle}>{entry.score}</td>
                </tr>
              ))}
              {leaderboard.slice(5).map((entry, index) => ( // Show remaining entries
                <tr
                  key={index + 5} // Start index at 5 for remaining entries
                  style={{
                    background: index % 2 === 0 ? "#242424" : "#1e1e1e",
                  }}
                >
                  <td style={bodyCellStyle}>{index + 6}</td> {/* Adjust rank for remaining rows */}
                  <td style={bodyCellStyle}>{entry.name}</td>
                  <td style={bodyCellStyle}>{entry.rollNumber}</td>
                  <td style={bodyCellStyle}>{entry.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p style={{ textAlign: "center", margin: "10px 0" }}>
          No data available on the leaderboard.
        </p>
      )}
    </div>
  );
};

const headerCellStyle = {
  padding: "8px",
  color: "#00aaff",
  borderBottom: "2px solid #444",
};

const bodyCellStyle = {
  padding: "6px",
  borderBottom: "1px solid #333",
  color: "#dcdcdc",
};

// Add this to your global CSS (in your CSS file or inside a styled-components block)
const globalStyle = `
  .leaderboard-scroll::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
  }

  .leaderboard-scroll::-webkit-scrollbar-thumb {
    background-color: #00aaff; /* Blue color for scrollbar thumb */
    border-radius: 4px; /* Round corners */
  }

  .leaderboard-scroll::-webkit-scrollbar-track {
    background-color: #2c2c2c; /* Dark color for the scrollbar track */
    border-radius: 4px;
  }

  /* For mobile */
  .leaderboard-scroll {
    -ms-overflow-style: scrollbar; /* Internet Explorer 10+ */
    scrollbar-width: thin;
    scrollbar-color: #00aaff #2c2c2c; /* Mobile scrollbar colors */
  }
`;

export default Leaderboard;
