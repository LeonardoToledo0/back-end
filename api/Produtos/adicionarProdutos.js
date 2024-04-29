const cloudinary = require("../../db/cloudinary");
const pool = require("../../db/postgres");

const AdicionarProdutos = async (req, res) => {
  try {
    const {
      sku,
      nome,
      marca_id,
      categoria_id,
      valor,
      valor_antigo,
      imagem_principal,
      imagem_miniatura_1,
      imagem_miniatura_2,
      imagem_miniatura_3,
      oferta,
      destaque,
      avaliacao,
      desconto,
      descricao,
      estoque,
      modelo,
      ativo,
    } = req.body;

    // Enviar imagens para o Cloudinary
    const imagemPrincipalResult = await cloudinary.uploader.upload(
      imagem_principal
    );
    const imagemMiniatura1Result = await cloudinary.uploader.upload(
      imagem_miniatura_1
    );
    const imagemMiniatura2Result = await cloudinary.uploader.upload(
      imagem_miniatura_2
    );
    const imagemMiniatura3Result = await cloudinary.uploader.upload(
      imagem_miniatura_3
    );

    // Inserir o produto no banco de dados
    const query = `
        INSERT INTO Produtos (
          sku, 
          nome, 
          marca_id, 
          categoria_id, 
          valor, 
          valor_antigo, 
          desconto,
          destaque, 
          oferta, 
          avaliacao,
          descricao,
          estoque,
          modelo,
          imagem_principal,
          imagem_miniatura_1,
          imagem_miniatura_2,
          imagem_miniatura_3,
          ativo
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)
      `;

    const values = [
      sku,
      nome,
      marca_id,
      categoria_id,
      valor,
      valor_antigo,
      desconto,
      destaque,
      oferta,
      avaliacao,
      descricao,
      estoque,
      modelo,
      ativo,
      imagemPrincipalResult.secure_url,
      imagemMiniatura1Result.secure_url,
      imagemMiniatura2Result.secure_url,
      imagemMiniatura3Result.secure_url,
    ];

    await pool.query(query, values);
    res.status(200).send("Produto adicionado com sucesso!");
  } catch (error) {
    console.error("Erro ao adicionar o produto:", error);
    res.status(500).send("Erro ao adicionar o produto.");
  }
};

module.exports = AdicionarProdutos;
