import express from "express";
import { Receta } from "../models/Receta.js";

const router = express.Router();

// 📌 Crear receta
// router.post("/", async (req, res) => {
//   try {
//     const nuevaReceta = new Receta(req.body);
//     await nuevaReceta.save();
//     res.status(201).json(nuevaReceta);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// Crear receta
router.post("/", async (req, res) => {
  try {
    const { nombre, instrucciones, tiempoPreparacion, ingredientes } = req.body;

    // Validación previa antes de guardar
    if (!nombre || !instrucciones || !tiempoPreparacion || !ingredientes) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const nuevaReceta = new Receta({
      nombre,
      instrucciones,
      tiempoPreparacion,
      ingredientes
    });

    const recetaGuardada = await nuevaReceta.save();
    res.status(201).json(recetaGuardada);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// 📌 Listar recetas
router.get("/", async (req, res) => {
  try {
    const recetas = await Receta.find();
    res.json(recetas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📌 Obtener receta por ID
router.get("/:id", async (req, res) => {
  try {
    const receta = await Receta.findById(req.params.id);
    if (!receta) return res.status(404).json({ error: "Receta no encontrada" });
    res.json(receta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📌 Actualizar receta
router.put("/:id", async (req, res) => {
  try {
    const recetaActualizada = await Receta.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!recetaActualizada) return res.status(404).json({ error: "Receta no encontrada" });
    res.json(recetaActualizada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 📌 Eliminar receta
router.delete("/:id", async (req, res) => {
  try {
    const recetaEliminada = await Receta.findByIdAndDelete(req.params.id);
    if (!recetaEliminada) return res.status(404).json({ error: "Receta no encontrada" });
    res.json({ mensaje: "Receta eliminada" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;


