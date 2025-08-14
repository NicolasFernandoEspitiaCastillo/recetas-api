const Receta = require("../models/Receta");

// Obtener todas las recetas
const obtenerRecetas = async (req, res) => {
  try {
    const recetas = await Receta.find();
    res.json(recetas);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener recetas", error });
  }
};

// Obtener una receta por ID
const obtenerReceta = async (req, res) => {
  try {
    const receta = await Receta.findById(req.params.id);
    if (!receta) {
      return res.status(404).json({ mensaje: "Receta no encontrada" });
    }
    res.json(receta);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener la receta", error });
  }
};

// Crear nueva receta
const crearReceta = async (req, res) => {
  try {
    const nuevaReceta = new Receta(req.body);
    const recetaGuardada = await nuevaReceta.save();
    res.status(201).json(recetaGuardada);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear la receta", error });
  }
};

// Actualizar receta
const actualizarReceta = async (req, res) => {
  try {
    const recetaActualizada = await Receta.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!recetaActualizada) {
      return res.status(404).json({ mensaje: "Receta no encontrada" });
    }
    res.json(recetaActualizada);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al actualizar la receta", error });
  }
};

// Eliminar receta
const eliminarReceta = async (req, res) => {
  try {
    const recetaEliminada = await Receta.findByIdAndDelete(req.params.id);
    if (!recetaEliminada) {
      return res.status(404).json({ mensaje: "Receta no encontrada" });
    }
    res.json({ mensaje: "Receta eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar la receta", error });
  }
};

module.exports = {
  obtenerRecetas,
  obtenerReceta,
  crearReceta,
  actualizarReceta,
  eliminarReceta
};
