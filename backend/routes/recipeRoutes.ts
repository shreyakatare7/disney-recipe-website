// backend/routes/recipeRoutes.ts
import express from 'express';
import Recipe from '../models/Recipe';

const router = express.Router();

// Get all recipes
router.get('/', async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

// Add a recipe
router.post('/', async (req, res) => {
  const newRecipe = new Recipe(req.body);
  await newRecipe.save();
  res.json(newRecipe);
});

export default router;