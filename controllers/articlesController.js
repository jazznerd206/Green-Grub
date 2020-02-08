const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Articles
            .find(req.query)
            .sort({ date: -1})
            .then(dbArticlesModel => res.json(dbArticlesModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Articles
          .findById(req.params.id)
          .then(dbArticlesModel => res.json(dbArticlesModel))
          .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Articles
          .findById({ _id: req.params.id })
          .then(dbArticlesModel => dbArticlesModel.remove())
          .then(dbArticlesModel => res.json(dbArticlesModel))
          .catch(err => res.status(422).json(err));
    },
    saveArticle: function (req, res) {
        db.Articles
        .create(req.body)
        .catch(function(err) {
        res.json(err);
        })
    }
}