const pool = require("../../db/postgres");

const AdicionarCategorias = async (nome) => {
  try {
    // Verificar se a categoria já existe no banco de dados
    const categoriaExistente = await pool.query(
      "SELECT * FROM Categoria WHERE nome = $1",
      [nome]
    );
    if (categoriaExistente.rows.length > 0) {
      throw new Error("A categoria já existe.");
    }

    // Adicionar a categoria ao banco de dados
    const novaCategoria = await pool.query(
      "INSERT INTO Categoria (nome) VALUES ($1) RETURNING *",
      [nome]
    );

    return novaCategoria.rows[0];
  } catch (error) {
    throw new Error(`Erro ao adicionar a categoria: ${error.message}`);
  }
};
module.exports = AdicionarCategorias;
