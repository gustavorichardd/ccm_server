const multer = require('multer');
const parser = multer({ dest: 'public/uploads/' })


const ProductService = require('../service/product.service')

exports.store = async (request, response) => {
  const file = request.file
  let key = false;

  if (file) {
    key = file.key
  } else {
    return response.status(400).json({ message: 'Falha ao cadastrar produtos, todos os campos precisam ser preenchidos' })
  }

  const { description_product, val_product } = request.body;
  if (!description_product || !val_product || !key) {
    return response.status(400).json({ message: 'Falha ao cadastrar produtos, todos os campos precisam ser preenchidos' })
  }

  const newProduct = await ProductService.create({ description_product, val_product, image_product: '/assets/' + request.file.key });

  response.status(200).json({ message: 'Produto cadastrado com sucesso', data: newProduct })

}

exports.index = async (request, response) => {

  const allProducts = await ProductService.findAll()

  response.status(200).json({ message: 'Lista de produtos carregadas com sucesso.', data: allProducts })
}