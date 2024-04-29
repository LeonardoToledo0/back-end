const pool = require("../../db/postgres");

const AdicionarCategorias = async (req, res) => {
  const { nome, ativo } = req.body;
  try {
    const categoriaExistente = await pool.query(
      "SELECT * FROM Categorias WHERE nome = $1",
      [nome]
    );

    if (categoriaExistente.rows.length > 0) {
      throw new Error("A categoria já existe.");
    }

    // Adicionar a categoria ao banco de dados
    const novaCategoria = await pool.query(
      "INSERT INTO Categorias (nome, ativo) VALUES ($1, $2) RETURNING *",
      [nome, ativo]
    );

    return novaCategoria.rows[0];
  } catch (error) {
    throw new Error(`Erro ao adicionar a categoria: ${error.message}`);
  }
};

module.exports = AdicionarCategorias;
