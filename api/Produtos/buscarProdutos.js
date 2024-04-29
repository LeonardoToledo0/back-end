const pool = require("../../db/postgres");

const BuscarProdutos = async (req, res) => {
  try {
    // Consultar todos os produtos no banco de dados
    const query = "SELECT * FROM Produtos";
    const produtos = await pool.query(query);

    // Enviar os produtos como resposta
    res.json(produtos.rows);
  } catch (error) {
    console.error("Erro ao buscar os produtos:", error);
    res.status(500).send("Erro ao buscar os produtos.");
  }
};

module.exports = BuscarProdutos;
