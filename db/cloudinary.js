const cloudinary = require("cloudinary").v2;

// Configurar o Cloudinary com suas credenciais
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Adicionar um console.log para verificar se está conectando ao Cloudinary
console.log("Conexão estabelecida com o Cloudinary!");

module.exports = cloudinary;
