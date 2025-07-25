// server/back-end/dist/config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "your-mongo-url-here");
    console.log("MongoDB bağlantısı başarılı");
  } catch (error) {
    console.error("MongoDB bağlantı hatası:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
