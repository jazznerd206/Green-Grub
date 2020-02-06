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
    create: function(req, res) {
        db.Articles
          .create(req.body)
          .then(dbArticlesModel => res.json(dbArticlesModel))
          .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Articles
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbArticlesModel => res.json(dbArticlesModel))
          .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Articles
          .findById({ _id: req.params.id })
          .then(dbArticlesModel => dbArticlesModel.remove())
          .then(dbArticlesModel => res.json(dbArticlesModel))
          .catch(err => res.status(422).json(err));
    }
}