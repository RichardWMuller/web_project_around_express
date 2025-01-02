const { Router } = require("express");
const fs = require("fs");
const path = require("path");
const router = new Router();
const users = require("../data/users.json");

router.get("/users", (req, res) => {
  const filePath = path.join(__dirname, "../data/users.json");
  fs.readFile(filePath, "utf8", (err, users) => {
    if (err) {
      return res.status(404).send("Recurso requisitado não encontrado");
    }
    res.json(users);
  });
});
router.get("/users", (req, res) => {
  res.send(users);
});

router.get("/users/:id", (req, res) => {
  const { _id } = req.params;

  if (!users[_id]) {
    res.status(404).send({ error: "ID do usuário não encontrado" });
    return;
  }
  res.send(users[_id]);
});

module.exports = router;
