const express = require("express");
const { addOrder, getOrder } = require("../controllers/order");
const router = express.Router();

router.post("/add-order", addOrder);
router.get("/get-order", getOrder);

module.exports = router;
