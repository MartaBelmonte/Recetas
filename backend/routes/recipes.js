const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');
const multer = require('multer');
const path = require('path');

// Configuración de Multer para manejar la subida de archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// Middleware para manejar multipart/form-data
router.post('/recipes', upload.array('images', 10), async (req, res) => {
  console.log('Body recibido:', req.body);
  console.log('Archivos recibidos:', req.files);

  const { title, ingredients, instructions } = req.body;

  if (!title || !instructions || !ingredients) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  try {
    const imageUrl = req.files.length > 0 ? `/uploads/${req.files[0].originalname}` : '';

    const recipe = new Recipe({
      title,
      ingredients: ingredients.split(','),
      instructions,
      imageUrl,
    });

    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    console.error('Error al guardar la receta:', err);
    res.status(400).json({ message: err.message });
  }
});

router.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
