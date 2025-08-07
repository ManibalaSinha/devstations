import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Quiz from './pages/Quiz';
import Navbar from './components/Navbar';

function App() {
   return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;
