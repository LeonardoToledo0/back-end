const pool = require("../../db/postgres");

const BuscarUsuario = async (req, res) => {
  try {
    const usuarios = await pool.query("SELECT * FROM Usuario");

    res.json(usuarios.rows);
  } catch (error) {
    console.error(`Erro ao buscar os usuários: ${error.message}`);
  }
};

module.exports = BuscarUsuario;
