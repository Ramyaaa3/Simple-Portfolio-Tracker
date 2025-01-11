import React, { useState } from "react";

const StockForm = ({ fetchStocks }) => {
  const [formData, setFormData] = useState({
    name: "",
    ticker: "",
    quantity: 1,
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/stocks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    fetchStocks();
    setFormData({ name: "", ticker: "", quantity: 1, price: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Stock Name" value={formData.name} onChange={handleChange} />
      <input name="ticker" placeholder="Ticker" value={formData.ticker} onChange={handleChange} />
      <input name="quantity" placeholder="Quantity" type="number" value={formData.quantity} onChange={handleChange} />
      <input name="price" placeholder="Buy Price" type="number" value={formData.price} onChange={handleChange} />
      <button type="submit">Add Stock</button>
    </form>
  );
};

export default StockForm;
