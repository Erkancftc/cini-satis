const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware (JSON post istekleri için)
app.use(express.json());

// Statik dosyaları "public" klasöründen sun
app.use(express.static(path.join(__dirname, 'public')));

// Basit backend testi
app.get('/api/selam', (req, res) => {
  res.json({ mesaj: 'Sunucu çalışıyor 🚀' });
});

// Product route'u ekle (doğru path'e göre güncelledik)
const productRoutes = require('./server/back-end/dist/routes/productRoutes');
app.use('/products', productRoutes);

// Tüm diğer istekleri frontend'e yönlendir (SPA için)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`✅ Sunucu ${PORT} portunda çalışıyor`);
});
