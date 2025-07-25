const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Public klasöründen statik dosyaları sun
app.use(express.static(path.join(__dirname, 'client', 'public')));

// API örnek endpoint
app.get('/api/selam', (req, res) => {
  res.json({ mesaj: 'Sunucu çalışıyor 🚀' });
});

// Fallback - SPA için
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`🚀 Sunucu ${PORT} portunda çalışıyor`);
});
