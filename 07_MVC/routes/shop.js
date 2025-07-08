const path = require('path');

const express = require('express');

const productsControllers = require("../controllers/product")

const router = express.Router();

router.get('/', productsControllers.getProducts)

module.exports = router;
