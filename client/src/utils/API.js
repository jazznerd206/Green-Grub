import axios from "axios";

export default {
  randomRecipe: function() {
    return axios.get("/api/random");
  },
  searchRecipes: function(searchTerm){
    return axios.get("/api/recipes/" + searchTerm);
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
  saveRecipe: function(recipeID) {
    return axios.post("/api/recipes/" + recipeID);
  },
  myRecipes: function(userId) {
    return axios.get("/api/recipes/myrecipes/?userId=" + userId);

  },
  getArticle: function(keyword){
    return axios.get('/api/articles/?keyword=' + keyword)
  },
  saveArticle: function(article){
    return axios.post('/api/articles', article);
  },
  deleteArticle: function(article){
    return axios.delete('/api/articles/'+article);
  },
  getUser: function(userId){
    // console.log('get user api function' + userId)
    return axios.get("/api/users/users/" + userId);
  },
  updateUser: function(userId, dietType){
    // console.log('update user api call ' + userId);
    // console.log('update user api call ' + dietType);
    return axios.get("/api/users/update/" + userId + "/" + dietType)
  },
  updateUserRecipe: function(userId, recipe){
    console.log('update user api call ' + userId);
    console.log('update user api call ' + recipe);
    return axios.get("/api/users/updaterecipe/" + userId + "/" + recipe)
  },
  myArticles: function(userId) {
    return axios.get("/api/articles/myarticles?userId=" + userId);
  },
  getMeetups: function(zipCode) {
    console.log('meetups API call ' + zipCode)
    return axios.get('/api/meetups/' + zipCode)
  }
};
