const mongoose = require('mongoose');

const conectarDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/recetasdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('✅ MongoDB conectado');
  } catch (error) {
    console.error('❌ Error al conectar con MongoDB:', error);
    process.exit(1); // Sale si no se conecta
  }
};

module.exports = conectarDB;
