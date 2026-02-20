import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Quiz from './pages/Quiz';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';

function App() {
   return (
     <>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/courses" element={<Courses />} />
         <Route path="/quiz" element={<Quiz />} />
         <Route path="/profile/:username" element={<Profile />} />
       </Routes>
     </>
   );
}

export default App;
