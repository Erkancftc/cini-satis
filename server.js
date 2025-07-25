const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// JSON gövde verilerini parse et
app.use(express.json());

// 📦 Route'ları ekle
const productRoutes = require('./server/back-end/dist/routes/productRoutes');
app.use('/api/products', productRoutes);

// 🌐 Public klasörü sun
app.use(express.static(path.join(__dirname, 'client', 'public')));

// 🔁 SPA fallback route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
});

// 🚀 Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`🚀 Sunucu ${PORT} portunda çalışıyor`);
});
