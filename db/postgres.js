const { Pool } = require("pg");

// Configurar a conexão com o banco de dados PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT, // Porta padrão do PostgreSQL
  ssl: false,
});

// Verificar se a conexão com o PostgreSQL foi estabelecida com sucesso
pool.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao PostgreSQL:", err);
  } else {
    console.log("Conexão estabelecida com o PostgreSQL!");
  }
});

module.exports = pool;
