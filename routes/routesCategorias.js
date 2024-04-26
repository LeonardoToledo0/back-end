const express = require("express");
const router = express.Router();

// Função de adicionar categoria
const adicionarCategorias = require("../api/Categorias/adicionarCategorias");

// Função de buscar categoria
const buscarCategorias = require("../api/Categorias/buscarCategorias");

// Rota Adicionar Categoria
router.post("/adicionar", adicionarCategorias);

// Rota Obter Categorias
router.get("/buscar", buscarCategorias);

module.exports = router;
