const API_URL = "http://localhost:5000";

export const registerUser = async (username, password) => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  return res.json();
};

export const loginUser = async (username, password) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  return res.json();
};

export const getBalance = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/api/balance`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.json();
};

export const getPosts = async () => {
  const res = await fetch(`${API_URL}/api/posts`);
  return res.json();
};

export const transferMoney = async (to, amount) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/api/transfer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ to, amount })
  });
  return res.json();
};