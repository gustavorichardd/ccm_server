const { Router } = require('express');
const multer = require('multer');
const router = Router();
const multerConfig = require('./config/multer');
const verifyToken = require('./app/middleware/auth')

const ProductController = require('./app/controller/ProductController')
const AuthController = require('./app/controller/AuthController')
const OrderController = require('./app/controller/OrderController')

router.post('/login', AuthController.register)

router.post('/products', [verifyToken, multer(multerConfig).single('item')], ProductController.store);
router.get('/products', verifyToken, ProductController.index)

router.post('/orders', verifyToken, OrderController.store)

module.exports = router;
