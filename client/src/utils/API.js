import axios from "axios";

export default {
  bookSearch: function(recipeName) {
    return axios.get('https://api.spoonacular.com/recipes/search?query=' + recipeName);
  },
  // Gets all recipes
  getBooks: function() {
    return axios.get("/api/recipes");
  },
  // Gets the recipe with the given id
  getBook: function(id) {
    return axios.get("/api/recipes/" + id);
  },
  // Deletes the recipe with the given id
  deleteBook: function(id) {
    return axios.delete("/api/recipes/" + id);
  },
  // Saves a recipe to the database
  saveBook: function(recipeData) {
    return axios.post("/api/recipes", recipeData);
  }
};
