const express = require("express");
const cors = require("cors");
const stockRoutes = require("./routes/stocks");

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/stocks", stockRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
