const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Statik dosyaları sun (public klasörünü kullanıyorsan)
app.use(express.static(path.join(__dirname, 'public')));

// Basit API route
app.get('/api/selam', (req, res) => {
  res.json({ mesaj: 'Sunucu çalışıyor 🚀' });
});

// Fallback route (SPA için index.html sunar)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`✅ Sunucu ${PORT} portunda çalışıyor`);
});
