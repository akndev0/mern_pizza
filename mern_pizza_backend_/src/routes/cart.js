const express = require("express");
const {
  addItemToCart,
  getCartItems,
  removeCartItems,
} = require("../controller/cart");
const { requireSignin, userMiddleware } = require("../middleware");
const router = express.Router();

router.post("/cart/addtocart",addItemToCart);

router.post("/cart/getCartItems", getCartItems);

router.post("/cart/removeItem",requireSignin,userMiddleware,removeCartItems);

module.exports = router;