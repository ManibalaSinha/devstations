import React, { useState, useEffect } from "react";
import { getBalance, transferMoney } from "./api";

function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    loadBalance();
  }, []);

  const loadBalance = async () => {
    const data = await getBalance();
    setBalance(data.balance);
  };

  const handleTransfer = async () => {
    const data = await transferMoney(to, amount);
    alert(data.message);
    loadBalance();
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Balance: ₹{balance}</h3>

      <h3>Transfer Money</h3>
      <input placeholder="Recipient Username" onChange={e => setTo(e.target.value)} />
      <input placeholder="Amount" type="number" onChange={e => setAmount(e.target.value)} />
      <button onClick={handleTransfer}>Send</button>

      <br /><br />
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;