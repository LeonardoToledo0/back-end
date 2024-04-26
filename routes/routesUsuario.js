const express = require("express");
const router = express.Router();

// Função de buscar usuario
const buscarUsuario = require("../api/Usuario/buscarUsuario");

// Rota de obter usuario
router.get("/buscar", buscarUsuario);

module.exports = router;
