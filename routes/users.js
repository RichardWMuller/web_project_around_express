const { Router } = require("express");
const fs = require("fs");
const path = require("path");
const router = new Router();

const filePath = path.join(__dirname, "../data/users.json");

router.get("/users", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res
        .status(404)
        .json({ error: "Recurso requisitado não encontrado" });
    }

    try {
      const users = JSON.parse(data);
      res.json(users);
    } catch (parseError) {
      return res
        .status(500)
        .json({ error: "Erro ao processar dados do arquivo JSON" });
    }
  });
});

router.get("/users/:id", (req, res) => {
  const { id } = req.params;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res
        .status(404)
        .json({ error: "Recurso requisitado não encontrado" });
    }

    try {
      const users = JSON.parse(data);
      const user = users.find((user) => user._id === id);

      if (!user) {
        return res.status(404).json({ error: "ID do usuário não encontrado" });
      }

      res.json(user);
    } catch (parseError) {
      return res
        .status(500)
        .json({ error: "Erro ao processar dados do arquivo JSON" });
    }
  });
});

module.exports = router;
