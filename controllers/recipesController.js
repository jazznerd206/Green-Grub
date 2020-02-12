const axios = require("axios");
const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      let url = `https://api.spoonacular.com/recipes/search?query=`+req.query.recipeName+"&apiKey="+process.env.REACT_APP_API_KEY;
      axios
        .get(url)
        .then(response => {
          //console.log(res);
          res.send(response.data.results);
        })
        .catch(err => res.status(500).send(err));
    },
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