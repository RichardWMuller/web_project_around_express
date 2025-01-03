const { Router } = require("express");
const fs = require("fs");
const path = require("path");
const router = new Router();

const filePath = path.join(__dirname, "../data/card.json");

router.get("/card", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res
        .status(400)
        .json({ error: "Recurso requisitado não encontrado" });
    }

    try {
      const cards = JSON.parse(data);
      res.json(cards);
    } catch (parseError) {
      return res
        .status(500)
        .json({ error: "Erro ao processar dados do arquivo JSON" });
    }
  });
});

module.exports = router;
