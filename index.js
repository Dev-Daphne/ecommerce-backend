const express = require("express");
const app = express();

app.use(express.json());

// importar rota
const produtosRoutes = require("./routes/produtos");

// rota inicial
app.get("/", (req, res) => {
  res.send("API E-commerce rodando 🚀");
});

// usar rota de produtos
app.use("/produtos", produtosRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});





