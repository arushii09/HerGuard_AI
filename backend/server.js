const express = require("express");
const app = express();

app.use(express.json());

const agentRoutes = require("./routes/agent");
app.use("/agent", agentRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "Cognivia backend running 🚀" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
