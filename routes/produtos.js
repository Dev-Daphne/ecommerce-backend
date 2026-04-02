const express = require("express");
const router = express.Router();

// "banco de dados" em memória
let produtos = [
  { id: 1, nome: "Sofá", preco: 1200 },
  { id: 2, nome: "Mesa", preco: 800 }
];

// 🔍 LISTAR produtos
router.get("/", (req, res) => {
  res.json(produtos);
});

// ➕ ADICIONAR produto
router.post("/", (req, res) => {
  const novoProduto = req.body;
  novoProduto.id = produtos.length + 1;

  produtos.push(novoProduto);

  res.status(201).json(novoProduto);
});

// ✏️ EDITAR produto
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const produto = produtos.find(p => p.id === id);

  if (!produto) {
    return res.status(404).json({ mensagem: "Produto não encontrado" });
  }

  produto.nome = req.body.nome;
  produto.preco = req.body.preco;

  res.json(produto);
});

// 🗑 DELETAR produto
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  produtos = produtos.filter(p => p.id !== id);

  res.json({ mensagem: "Produto deletado com sucesso" });
});

module.exports = router;
