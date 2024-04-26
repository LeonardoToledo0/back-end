const express = require("express");
const router = express.Router();

//  Função de adicionar produtos
const adicionarProdutos = require("../api/Produtos/adicionarProdutos");

// Função de buscar produtos
const buscarProdutos = require("../api/Produtos/buscarProdutos");

// Rota para Adicionar Produto
router.post("/adicionar", adicionarProdutos);

// Rota para Obter Produtos
router.get("/buscar", buscarProdutos);

module.exports = router;
