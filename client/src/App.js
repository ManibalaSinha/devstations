import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Quiz from './pages/Quiz';
import Navbar from './components/Navbar';

function App() {
   return (
    <Router basename="/devstations">{/*fix git hub pages*/}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/quiz" element={<Quiz />} />
        
      </Routes>
    </Router>
  );
}

export default App;
