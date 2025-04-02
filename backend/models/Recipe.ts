// backend/models/Recipe.ts
import mongoose from 'mongoose';

const RecipeSchema = new mongoose.Schema({
  name: String,
  movie: String,
  type: String, // Breakfast, Dessert, etc.
  ingredients: [String],
  steps: [String],
  image: String
});

export default mongoose.model('Recipe', RecipeSchema);
