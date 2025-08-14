import 'dotenv/config.js';
import express from 'express';
import { connectDB } from './config/db.js';
import recetasRoutes from './routes/recetas.js'; // ⬅️ Importar rutas

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

// 📌 Usar las rutas de recetas
app.use('/api/recetas', recetasRoutes); // Prefijo para todas las rutas de recetas

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
