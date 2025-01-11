import React from "react";

const StockList = ({ stocks, fetchStocks }) => {
  const handleDelete = async (ticker) => {
    await fetch(`http://localhost:5000/api/stocks/${ticker}`, { method: "DELETE" });
    fetchStocks();
  };

  return (
    <div>
      <h2>Stock Holdings</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.ticker}>
            {stock.name} ({stock.ticker}) - {stock.quantity} shares @ ${stock.price}
            <button onClick={() => handleDelete(stock.ticker)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
