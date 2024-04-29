const pool = require("../../db/postgres");

const buscarMarcas = async (req, res) => {
  try {
    // Consultar todas as marcas no banco de dados
    const marcas = await pool.query("SELECT * FROM Marcas");

    // Enviar as marcas como resposta
    res.json(marcas.rows);
  } catch (error) {
    res.status(500).send(`Erro ao obter as marcas: ${error.message}`);
  }
};

module.exports = buscarMarcas;
