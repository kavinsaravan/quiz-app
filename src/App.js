import logo from './logo.svg';
import './App.css';
import Flashcard from './Flashcard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react";
import { fetchQuestions } from './QuestionList';
import { Box, Typography, Container } from '@mui/material';


function App() {
  console.log("testing")
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions().then(setQuestions);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    > 
     {/* Header */}
     <Box sx={{ padding: 2, backgroundColor: '#1976d2', color: '#fff' }}>
        <Typography variant="h4">Flashcard App</Typography>
      </Box>
      {/* Main Content */}
       <Box sx={{ flex: 1, padding: 2 }}>
        <Container maxWidth="sm">
        <Swiper
            slidesPerView={1}   // Number of slides visible at once
            pagination={{ clickable: true }} // Enable pagination bullets
          >
            {questions.map((content, index) => (
              <SwiperSlide key={index}>
                <Flashcard content={content} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>
      {/* Footer */}
      <Box
        sx={{
          padding: 2,
          backgroundColor: '#1976d2',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Typography variant="body1">© 2024 Flashcard App</Typography>
      </Box>
    </Box>
  );
}

export default App;
