const express = require("express");
const cors = require("cors");
require("dotenv").config();
const rotasProdutos = require("./routes/routesProdutos");
const rotasCategorias = require("./routes/routesCategorias");
const rotasMarcas = require("./routes/routesMarcas");
const rotasUsuarios = require("./routes/routesUsuario");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Rota para a raiz do servidor
app.get("/", (req, res) => {
  res.send("Estou funcionando");
});

// Use as rotas de produtos
app.use("/produtos", rotasProdutos);

// Use as rotas de categorias
app.use("/categorias", rotasCategorias);

// Use as rotas de marcas
app.use("/marcas", rotasMarcas);

// Use as rotas de usuario
app.use("/usuario", rotasUsuarios);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
