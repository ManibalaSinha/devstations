import { useState, useEffect } from "react";
import { getBalance, transferMoney } from "./api";
import LoadingSpinner from "./components/LoadingSpinner";

function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(true);
  const [transferring, setTransferring] = useState(false);

  useEffect(() => {
    loadBalance();
  }, []);

  const loadBalance = async () => {
    setLoading(true);
    const data = await getBalance();
    setBalance(data.balance);
    setLoading(false);
  };

  const handleTransfer = async () => {
    setTransferring(true);
    const data = await transferMoney(to, amount);
    alert(data.message);
    await loadBalance();
    setTransferring(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div>
      <h2>Dashboard</h2>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <h3>Balance: ₹{balance}</h3>
      )}

      <h3>Transfer Money</h3>
      <input
        placeholder="Recipient Username"
        onChange={e => setTo(e.target.value)}
      />
      <input
        placeholder="Amount"
        type="number"
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={handleTransfer} disabled={transferring}>
        {transferring ? 'Sending…' : 'Send'}
      </button>

      <br /><br />
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
