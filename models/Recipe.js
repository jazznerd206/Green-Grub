const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RecipeSchema = new Schema({
  recipeTitle: {
    type: String,
    required: true
  },
  recipeImage: {
    type: String,
    //required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Recipe = mongoose.model("recipes", RecipeSchema);