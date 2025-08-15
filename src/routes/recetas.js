// import express from "express";
// import { Receta } from "../models/Receta.js";

// const router = express.Router();

// // Crear receta
// router.post("/", async (req, res) => {
//   try {
//     const { nombre, instrucciones, tiempoPreparacion, ingredientes } = req.body;

//     // Validación previa antes de guardar
//     if (!nombre || !instrucciones || !tiempoPreparacion || !ingredientes) {
//       return res.status(400).json({ error: "Todos los campos son obligatorios" });
//     }

//     const nuevaReceta = new Receta({
//       nombre,
//       instrucciones,
//       tiempoPreparacion,
//       ingredientes
//     });

//     const recetaGuardada = await nuevaReceta.save();
//     res.status(201).json(recetaGuardada);

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
// // 📌 Listar recetas
// router.get("/", async (req, res) => {
//   try {
//     const recetas = await Receta.find();
//     res.json(recetas);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // 📌 Obtener receta por ID
// router.get("/:id", async (req, res) => {
//   try {
//     const receta = await Receta.findById(req.params.id);
//     if (!receta) return res.status(404).json({ error: "Receta no encontrada" });
//     res.json(receta);
//   } catch (error) {
//     res.status(500).json({ error: "ID inválido o error en el servidor" });
//   }
// });

// // 📌 Actualizar receta
// router.put("/:id", async (req, res) => {
//   try {
//     const recetaActualizada = await Receta.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!recetaActualizada) return res.status(404).json({ error: "Receta no encontrada" });
//     res.json(recetaActualizada);
//   } catch (error) {
//     res.status(500).json({ error: "ID inválido o error en el servidor" });
//   }
// });

// // 📌 Eliminar receta
// router.delete("/:id", async (req, res) => {
//   try {
//     const recetaEliminada = await Receta.findByIdAndDelete(req.params.id);
//     if (!recetaEliminada) return res.status(404).json({ error: "Receta no encontrada" });
//     res.json({ mensaje: "Receta eliminada correctamente" });
//   } catch (error) {
//     res.status(500).json({ error: "ID inválido o error en el servidor" });
//   }
// });

// export default router;

import express from "express";
import {
  crearReceta,
  listarRecetas,
  obtenerRecetaPorId,
  actualizarReceta,
  eliminarReceta
} from "../controllers/receta.controller.js";

const router = express.Router();

router.post("/", crearReceta);
router.get("/", listarRecetas);
router.get("/:id", obtenerRecetaPorId);
router.put("/:id", actualizarReceta);
router.delete("/:id", eliminarReceta);

export default router;

