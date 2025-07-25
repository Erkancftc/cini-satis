const express = require("express");
const controller = require("../controllers/productController");

const router = express.Router();

// Route tanımları
router.get("/", controller.getAll);   // Tüm ürünleri getir
router.post("/", controller.create); // Yeni ürün oluştur

module.exports = router; // ← burası düzeltilmeli
