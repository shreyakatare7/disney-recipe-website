"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/models/Recipe.ts
const mongoose_1 = __importDefault(require("mongoose"));
const RecipeSchema = new mongoose_1.default.Schema({
    name: String,
    movie: String,
    type: String, // Breakfast, Dessert, etc.
    ingredients: [String],
    steps: [String],
    image: String
});
exports.default = mongoose_1.default.model('Recipe', RecipeSchema);
