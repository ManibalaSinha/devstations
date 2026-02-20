import React, { useState } from "react";
import { registerUser } from "./api";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const data = await registerUser(username, password);
    alert(data.message);
  };

  return (
    <p>
  Already have an account? <a href="/login">Login</a>
    </p>
  );
}

export default Register;