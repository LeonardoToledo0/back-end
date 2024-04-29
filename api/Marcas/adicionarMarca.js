const pool = require("../../db/postgres");

const AdicionarMarca = async (nome) => {
  try {
    // Verificar se a marca já existe no banco de dados
    const marcaExistente = await pool.query(
      "SELECT * FROM Marcas WHERE nome = $1",
      [nome]
    );
    if (marcaExistente.rows.length > 0) {
      throw new Error("A marca já existe.");
    }

    // Adicionar a marca ao banco de dados
    const novaMarca = await pool.query(
      "INSERT INTO Marcas (nome) VALUES ($1) RETURNING *",
      [nome]
    );

    return novaMarca.rows[0];
  } catch (error) {
    throw new Error(`Erro ao adicionar a marca: ${error.message}`);
  }
};

module.exports = AdicionarMarca;
