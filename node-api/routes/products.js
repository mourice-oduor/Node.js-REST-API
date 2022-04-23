const express               = require("express"),
      router                = express.Router(),
    //   Product               = require("../models/productModel"),
      products              = require('../controllers/productsController'),
      { validateProduct }   = require('../middleware/validations'),
      Schema                = require('../apiSchema/JoiSchemas');



router.post('/', validateProduct(Schema.ProductSchema), products.createProduct);


module.exports = router;