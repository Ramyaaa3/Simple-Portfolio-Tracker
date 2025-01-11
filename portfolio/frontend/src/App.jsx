import React, { useState, useEffect } from "react";
import StockForm from "./components/StockForm";
import StockList from "./components/StockList";
import Dashboard from "./components/Dashboard";
import "./styles.css";

const App = () => {
  const [stocks, setStocks] = useState([]);

  // Fetch stocks from backend
  const fetchStocks = async () => {
    const response = await fetch("http://localhost:5000/api/stocks");
    const data = await response.json();
    setStocks(data);
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <div className="app">
      <h1>Portfolio Tracker</h1>
      <Dashboard stocks={stocks} />
      <StockForm fetchStocks={fetchStocks} />
      <StockList stocks={stocks} fetchStocks={fetchStocks} />
    </div>
  );
};

export default App;
