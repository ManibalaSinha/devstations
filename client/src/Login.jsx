import React, { useState } from "react";
import { loginUser } from "./api";
import { useNavigate } from "react-router-dom";

function Login({ setLoggedIn }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = await loginUser(username, password);
    const navigate = useNavigate();

    if (data.access_token) {
      localStorage.setItem("token", data.access_token);
      navigate(useNavigate);
    } else {
      alert("Login failed");
    }
  };

  return (
 <p>
  Don't have an account? <a href="/register">Register</a>
  </p>
  );
}

export default Login;