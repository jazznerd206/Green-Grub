const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Blogs
            .find(req.query)
            .sort({ date: -1})
            .then(dbBlogsModel => res.json(dbBlogsModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Blogs
          .findById(req.params.id)
          .then(dbBlogsModel => res.json(dbBlogsModel))
          .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Blogs
          .findById({ _id: req.params.id })
          .then(dbBlogsModel => dbBlogsModel.remove())
          .then(dbBlogsModel => res.json(dbBlogsModel))
          .catch(err => res.status(422).json(err));
    }
}