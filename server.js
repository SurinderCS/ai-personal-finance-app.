const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/health", (req, res) => {
  res.json({ ok: true, service: "ai-finance-backend" });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
});