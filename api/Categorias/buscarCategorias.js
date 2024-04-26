const pool = require("../../db/postgres");

const buscarCategorias = async (req, res) => {
  try {
    // Consultar todas as categorias no banco de dados
    const categorias = await pool.query("SELECT * FROM Categoria");

    // Enviar as categorias como resposta
    res.json(categorias.rows);
  } catch (error) {
    res.status(500).send(`Erro ao obter as categorias: ${error.message}`);
  }
};

module.exports = buscarCategorias;
