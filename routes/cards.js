const { Router } = require("express");
const fs = require("fs");
const path = require("path");
const router = new Router();

router.get("/card", (req, res) => {
  const filePath = path.join(__dirname, "../data/card.json");
  fs.readFile(filePath, "utf8", (err, cards) => {
    if (err) {
      return res.status(400).send("Recurso requisitado não encontrado");
    }
    res.json(cards);
  });
});

module.exports = router;
