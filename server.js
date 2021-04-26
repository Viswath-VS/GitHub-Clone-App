const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const viswath = {
    name: "Ko",
    relation: "mom",
  };
  res.json(viswath);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
