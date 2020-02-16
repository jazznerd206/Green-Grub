import axios from "axios";

export default {
  searchRecipes: function(searchTerm){
    return axios.get("/api/recipes/" + searchTerm);
  },
  randomRecipe: function() {
    return axios.get("api/recipes/random");
  },
  // Gets all recipes
  getRecipes: function() {
    return axios.get("/api/recipes");
  },
  // Gets the recipe with the given id
  getRecipe: function(id) {
    return axios.get("/api/recipes/" + id);
  },
  // Deletes the recipe with the given id
  deleteRecipe: function(id) {
    return axios.delete("/api/recipes/" + id);
  },
  // Saves a recipe to the database
  saveRecipe: function(recipeData) {
    return axios.post("/api/recipes", recipeData);
  },
  getArticle: function(keyword){
    return axios.get('/api/articles/?keyword=' + keyword)
  },
  saveArticle: function(article){
    return axios.post('/api/articles', article);
  }
};
