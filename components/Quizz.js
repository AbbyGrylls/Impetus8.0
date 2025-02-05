import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { getDatabase, ref, set, get, push, query as rtdbQuery, orderByChild } from "firebase/database";
import { db } from "../scripts/FirebaseSetup";
import { TextField, Button, Typography, Box, List, Container } from "@mui/material";

const Quizz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showFinalScore, setShowFinalScore] = useState(false);
  const [userDetails, setUserDetails] = useState({ name: "", rollNumber: "" });
  const [showQuiz, setShowQuiz] = useState(false);
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(30);
  const [scoreSubmitted, setScoreSubmitted] = useState(false);

  const rtdb = getDatabase();

  // Function to shuffle and select 10 random questions
  const getRandomQuestions = (questionsArray) => {
    const shuffled = [...questionsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "questions"));
        let questionsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        questionsArray = getRandomQuestions(questionsArray); // Select 10 random questions
        setQuestions(questionsArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions: ", error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    if (timer === 0 && !scoreSubmitted) {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setTimer(30);
      } else {
        handleQuizCompletion();
      }
    }

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, currentQuestionIndex, questions.length, score, userDetails, scoreSubmitted]);

  const handleStartQuiz = async () => {
    if (!userDetails.name || !userDetails.rollNumber) {
      setError("Please enter both name and roll number.");
      return;
    }
    if (!/^[A-Za-z]{1,15}$/.test(userDetails.name)) {
      setError("Name should be less than 15 characters and consist of letters only.");
      return;
    }

    if (!/^\d{4}[A-Z]{3}\d{3}$/.test(userDetails.rollNumber)) {
      setError("Nice try! Roll number must be in the format YYYYXXXNNN (e.g., 2023MEB000) with capital letters for the department code.");
      return;
    }

    const lastThreeDigits = userDetails.rollNumber.slice(-3);
    if (lastThreeDigits.startsWith("00") && lastThreeDigits[2] === "0") {
      setError("Nice try! Invalid roll number: roll number 000 doesn't exist.");
      return;
    }

    try {
      const rollNumberRef = ref(rtdb, "leaderboard");
      const snapshot = await get(rtdbQuery(rollNumberRef, orderByChild("rollNumber")));
      const rollNumbers = snapshot.exists()
        ? Object.values(snapshot.val()).map((entry) => entry.rollNumber)
        : [];

      if (rollNumbers.includes(userDetails.rollNumber)) {
        setError("This roll number is already in use. Please use a unique roll number.");
      } else {
        setShowQuiz(true);
        setTimer(30);
      }
    } catch (error) {
      console.error("Error validating roll number: ", error);
      setError("An error occurred while validating the roll number. Please try again.");
    }
  };

  const handleOptionClick = (selectedOptionIndex) => {
    if (scoreSubmitted) return;
  
    let newScore = score;
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedOptionIndex === currentQuestion.correctAnswer) {
      newScore += 1;
      setScore(newScore);
    }
  
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimer(30);
    } else {
      handleQuizCompletion(newScore); 
    }
  };
  
  const handleQuizCompletion = (finalScore) => {
    if (!scoreSubmitted && userDetails.name && userDetails.rollNumber) {
      setShowFinalScore(true);
      setScoreSubmitted(true);
  
      const leaderboardRef = ref(rtdb, "leaderboard");
      const newEntry = push(leaderboardRef);
      set(newEntry, {
        name: userDetails.name,
        rollNumber: userDetails.rollNumber,
        score: finalScore, 
        timestamp: Date.now(),
      });
    }
  };
  

  if (loading) return <Typography variant="h5">Loading questions...</Typography>;

  if (!showQuiz) {
    return (
      <Container maxWidth="sm" sx={{ textAlign: "center", mt: 4 }}>
        <Box sx={{ padding: "100px", marginTop: "-20px" }}>
          <Typography variant="h4" gutterBottom>
            Enter Your Details
          </Typography>
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleStartQuiz();
            }}
          >
            <Box mb={2}>
              <TextField
                fullWidth
                label="Name"
                value={userDetails.name}
                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Roll Number"
                value={userDetails.rollNumber}
                onChange={(e) => setUserDetails({ ...userDetails, rollNumber: e.target.value })}
              />
            </Box>
            {error && (
              <Typography variant="body2" color="error">
                {error}
              </Typography>
            )}
            <Button type="submit" variant="contained" color="primary">
              Start Quiz
            </Button>
          </Box>
        </Box>
      </Container>
    );
  }

  if (showFinalScore) {
    return (
      <Container maxWidth="sm" sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Quiz Completed
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: "10px" }}>
          Your final score is: {score} / {questions.length}
        </Typography>
        <Typography variant="h5">Thank you, {userDetails.name}!</Typography>
      </Container>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 4 }}>
      <Typography gutterBottom sx={{ fontFamily: "Bebas Neue, sans-serif", color: "#00aaff", fontSize: "1.5rem" }}>
        {currentQuestion.question}
      </Typography>
      <Typography variant="h6" sx={{ color: "#999",marginTop:"-10px" }} gutterBottom>
        ⏲️ {timer}
      </Typography>
      <Box sx={{marginLeft:"20px",justifyItems:"center",marginTop:"-25px"}}>
      <List>
        {currentQuestion.options.map((option, index) => (
          <Button
          key={index}
          onClick={() => handleOptionClick(index)}
          sx={{
            margin:"20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "12px",
            backgroundColor: "#f5f5f5",
            color: "#333",
            fontWeight: "bold",
            fontSize: "1rem",
            textTransform: "none",
            transition: "0.3s ease-in-out",
            "&:hover": {
              backgroundColor: "#00aaff",
              color: "#fff",
              transform: "scale(1.05)",
            },
            "&:active": {
              transform: "scale(0.98)",
            },
          }}
        >
          {option}
        </Button>
        
        ))}
      </List>
      </Box>
    </Container>
  );
};

export default Quizz;
