const express = require("express");
const router = express.Router();

// Função para adicionar marca
const adicionarMarcas = require("../api/Marcas/adicionarMarca");

// Função para buscar marcas
const buscarMarcas = require("../api/Marcas/buscarMarca");

// Rota para adicionar marca
router.post("/adicionar", adicionarMarcas);

// Rota para obter marcas
router.get("/buscar", buscarMarcas);

module.exports = router;
