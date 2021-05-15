const ProductController = require('../controllers/product.controller');

module.exports = function(app) {
    app.post('/api', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getProduct);

}