const express = require("express");

const {
  requireSignin,
  
  
} = require("../middleware");
const {
  createProduct,
  getProductDetailsById,
  getProducts,
  getProductsFilterSorting,
} = require("../controller/product");

const router = express.Router();

router.get("/product/getProducts",getProducts);

router.post("/product/create",requireSignin, createProduct );

router.get("/product/:productId",getProductDetailsById);
router.get('/productsfilter',getProductsFilterSorting)

module.exports = router;