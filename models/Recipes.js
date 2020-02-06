const mongoose = require("mongorose");
const Schema = mongoose.Schema;

// Create Schema
const RecipeSchema = new Schema({
  recipeName: {
    type: String,
    required: true
  },
  ingredients: [{
    type: String,
    required: true
  }],
  directions: {
    type: String,
    required: true
  }
});

const RecipeSchema = mongoose.model("Recipes", RecipeSchema);

module.exports = RecipeSchema;