const axios = require("axios");
const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        axios.get("https://api.spoonacular.com/recipes/search?query=" + req.params.recipeName + "&instructionsRequired=true&apiKey=" + process.env.RECIPE_APP_API_KEY).then(function (response) {
            recipeIds = response.data.results.map(recipe => recipe.id);
            recipeIds = recipeIds.slice(0, 5);

            axios.get("https://api.spoonacular.com/recipes/informationBulk?ids=" + recipeIds.join(",") + "&apiKey=" + process.env.RECIPE_APP_API_KEY).then(function(bulkResponse){
              recipes = bulkResponse.data.map(recipe => {
                return {
                  title: recipe.title,
                  key: recipe.id,
                  image: recipe.image,
                  readyInMinutes: recipe.readyInMinutes,
                  servings: recipe.servings,
                  instructions: recipe.instructions
                }
              });
              res.json(recipes);

            }).catch(function(err) {
              console.log(err);
              res.send("Error");
            });
        }).catch(function(err){
            console.log(err);
            res.send("Error");
        });
    },
        findRecipeRandom: function(req, res) {
            axios.get("https://api.spoonacular.com/recipes/random?number=1&instructionsRequired=true&apiKey=" + process.env.RECIPE_APP_API_KEY).then(function (response) {
console.log(response.data.recipes[0].title);

    randomRecipe = response.data.recipes[0]


                // recipes = response.data.results.map(recipe => {
                //     return {
                //     recipe: recipe.title,
                //     imageUrls: recipe.imageUrls,
                //     key: recipe.id
                //     }
                // });
                res.json(randomRecipe);
            }).catch(function(err){
                console.log(err);
                res.send("Error");
            });
        // db.Recipes
        //     // .find(req.query)
        //     // .sort({ date: -1 })
        //     // .then(recipesModel => res.json(recipesModel))
        //     // .catch(err => res.status(422).json(err));
        //     axios.get("https://api.spoonacular.com/recipes/search?query=" + req.params.recipeName + "&apiKey=" + process.env.RECIPE_APP_API_KEY).then(function (response) {
        //         console.log(process.env.RECIPE_APP_API_KEY);
        //         console.log(response);
        //         recipes = response.data.recipes.map(recipe => {
        //           return {
        //             recipe: recipe.title,
        //             imageUrls: recipe.imageUrls,
        //             key: recipe.id
        //           }
        //         });
        //         res.send(articles.slice(0, 5));
        //       });
        },
    // randomizeRecipe: function(req, res) {
    //     axios.get("https://api.spoonacular.com/recipes/random" + "&apiKey=" + process.env.RECIPE_APP_API_KEY).then(function (response) {
    // }
    // },
    findRecipesDone: function(req, res) {
        db.Recipes
            .find({recipeIveDone: true})
            .then(recipesDone => res.json(recipesDone))
            .catch(err => res.status(422).json(err));
        },
    findRecipesTodo: function(req, res) {
        db.Recipes
        .find({recipeTodo: true})
        .then(recipesTodo => res.json(recipesTodo))
        .catch(err => res.status(422).json(err));
    },
    markRecipeTodo: function(req, res) {
        var query = {_id: req.params.id}
        
        db.Recipes
        .findOneAndUpdate(query, {recipeTodo: true})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    markRecipeDone: function(req, res) {
        var query = {_id: req.params.id}

        db.Recipes
        .findOneAndUpdate(query, {recipeTodo: false}, {recipeIveDone: true})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}