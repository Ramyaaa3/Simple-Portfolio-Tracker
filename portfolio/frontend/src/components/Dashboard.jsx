import React from "react";

const Dashboard = ({ stocks }) => {
  const totalValue = stocks.reduce((acc, stock) => acc + stock.quantity * stock.price, 0);

  return (
    <div>
      <h2>Portfolio Dashboard</h2>
      <p>Total Value: ${totalValue.toFixed(2)}</p>
    </div>
  );
};

export default Dashboard;
