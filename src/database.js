// dataset.js
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import Receta from "./models/receta.model.js";

dotenv.config();

const recetas = [
  {
    nombre: "Arroz con Pollo",
    descripcion: "Un plato tradicional con arroz, pollo y verduras.",
    ingredientes: ["Arroz", "Pollo", "Zanahoria", "Arveja", "Cebolla", "Aceite", "Sal"],
    pasos: [
      "Cocinar el arroz.",
      "Freír el pollo con verduras.",
      "Mezclar el arroz con el pollo y las verduras.",
    ],
  },
  {
    nombre: "Ensalada César",
    descripcion: "Clásica ensalada con aderezo César.",
    ingredientes: ["Lechuga romana", "Crutones", "Queso parmesano", "Aderezo César"],
    pasos: [
      "Lavar y cortar la lechuga.",
      "Agregar crutones y queso parmesano.",
      "Servir con aderezo César.",
    ],
  },
  {
    nombre: "Lasaña de Carne",
    descripcion: "Lasaña al horno con carne, salsa bechamel y queso.",
    ingredientes: ["Pasta para lasaña", "Carne molida", "Salsa bechamel", "Queso mozzarella", "Tomate"],
    pasos: [
      "Preparar la carne con salsa de tomate.",
      "Armar capas de pasta, carne y bechamel.",
      "Hornear a 180°C por 40 minutos.",
    ],
  },
];

const insertData = async () => {
  try {
    await connectDB();
    await Receta.deleteMany(); // Limpiar la colección antes de insertar
    await Receta.insertMany(recetas);
    console.log("✅ Datos insertados correctamente");
    process.exit();
  } catch (err) {
    console.error("❌ Error insertando datos:", err.message);
    process.exit(1);
  }
};

insertData();
