const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/users");
const cardRoutes = require("./routes/cards");

app.use(express.json());

app.get("/", (req, res) => {
  res.status(500).json({ message: "A solicitação não foi encontrada" });
});

app.use(userRoutes);
app.use(cardRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
