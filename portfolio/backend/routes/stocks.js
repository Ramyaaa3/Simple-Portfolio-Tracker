const express = require("express");
const router = express.Router();

let stocks = [];

// Get all stocks
router.get("/", (req, res) => {
  res.json(stocks);
});

// Add a new stock
router.post("/", (req, res) => {
  const stock = req.body;
  stocks.push(stock);
  res.status(201).json(stock);
});

// Update a stock
router.put("/:ticker", (req, res) => {
  const { ticker } = req.params;
  const updatedStock = req.body;
  stocks = stocks.map((stock) => (stock.ticker === ticker ? updatedStock : stock));
  res.json(updatedStock);
});

// Delete a stock
router.delete("/:ticker", (req, res) => {
  const { ticker } = req.params;
  stocks = stocks.filter((stock) => stock.ticker !== ticker);
  res.status(204).send();
});

module.exports = router;
