const { Pool } = require("pg");

// Configurar a conexão com o banco de dados PostgreSQL
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432, // Porta padrão do PostgreSQL
  ssl: {
    rejectUnauthorized: false, // Configuração necessária para conexões SSL
  },
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
