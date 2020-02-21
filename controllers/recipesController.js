const axios = require("axios");
const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    axios
      .get(
        "https://api.spoonacular.com/recipes/search?query=" +
          req.params.recipeName +
          "&instructionsRequired=true&apiKey=" +
          process.env.RECIPE_APP_API_KEY
      )
      .then(function(response) {
        recipeIds = response.data.results.map(recipe => recipe.id);
        recipeIds = recipeIds.slice(0, 5);

        axios
          .get(
            "https://api.spoonacular.com/recipes/informationBulk?ids=" +
              recipeIds.join(",") +
              "&apiKey=" +
              process.env.RECIPE_APP_API_KEY
          )
          .then(function(bulkResponse) {
            recipes = bulkResponse.data.map(recipe => {
              return {
                title: recipe.title,
                key: recipe.id,
                image: recipe.image,
                readyInMinutes: recipe.readyInMinutes,
                servings: recipe.servings,
                instructions: recipe.instructions
              };
            });
            res.json(recipes);
          })
          .catch(function(err) {
            console.log(err);
            res.send("Error");
          });
      })
      .catch(function(err) {
        console.log(err);
        res.send("Error");
      });
  },
  findRecipeRandom: function(req, res) {
    axios
      .get(
        "https://api.spoonacular.com/recipes/random?number=1&instructionsRequired=true&apiKey=" +
          process.env.RECIPE_APP_API_KEY
      )
      .then(function(response) {
        randomRecipe = response.data.recipes[0];
        res.json(randomRecipe);
      })
      .catch(function(err) {
        console.log(err);
        res.send("Error");
      });
  },
  saveRecipe: function(req, res) {
    db.Recipes.create(req.body)
      .then(dbRecipesModel => res.json(dbRecipesModel))
      .catch(err => res.status(422).json(err));
  },
  getMyRecipes: function(req, res) {
    db.Recipes.find({ userId: req.query.userId })
      .then(dbRecipes => res.json(dbRecipes))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Recipes.findById(req.params.id)
      .then(dbRecipesModel => res.json(dbRecipesModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Recipes.findById({ _id: req.params.id })
      .then(dbRecipesModel => dbRecipesModel.remove())
      .then(dbRecipesModel => res.json(dbRecipesModel))
      .catch(err => res.status(422).json(err));
  }
};
