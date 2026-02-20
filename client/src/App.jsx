import { Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Courses from './pages/Courses';
import Quiz from './pages/Service';
import Navbar from './components/Navbar';
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";

function App() {
  const token = localStorage.getItem("token");

  return (
    <>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
     
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Route */}
      <Route
        path="/dashboard"
        element={
          token ? <Dashboard /> : <Navigate to="/login" />
        }
      />

      {/* Default Route */}
      <Route
        path="*"
        element={<Navigate to={token ? "/dashboard" : "/login"} />}
      />

    </Routes>
    </>
  );
}

export default App;