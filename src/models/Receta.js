

import mongoose from "mongoose";

const recetaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  instrucciones: { type: String, required: true },
  tiempoPreparacion: { type: Number, required: true },
  ingredientes: { type: [String], required: true }
}, { timestamps: true });

// export default mongoose.model("Receta", recetaSchema);
export const Receta = mongoose.model("Receta", recetaSchema);