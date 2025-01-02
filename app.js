const express = require("express");
const app = express();
const port = 3000;
const userRoutes = require("./routes/users");
const cardRoutes = require("./routes/cards");

app.get("/", (req, res) => {
  res.status(500).send("A solicitação não foi encontrada");
});

app.use(userRoutes);
app.use(cardRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
