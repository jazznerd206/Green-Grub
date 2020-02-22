const db = require("../models");
var axios = require("axios");

module.exports = {
  findAll: function (req, res) {
    // db.Articles
    //     .find(req.query)
    //     .sort({ date: -1})
    //     .then(dbArticlesModel => res.json(dbArticlesModel))
    //     .catch(err => res.status(422).json(err));
    axios.get("https://newsapi.org/v2/everything?q=" + req.query.keyword + "&apiKey=" + process.env.NEWS_API_APP_KEY).then(function (response) {
      articles = response.data.articles.map(article => {
        return {
          author: article.author,
          title: article.title,
          description: article.description,
          url: article.url,
          urlToImage: article.urlToImage
        }
      });
      res.send(articles.slice(0, 6));
    });
  },
  saveArticle: function(req, res) {
    db.Articles
    .create(req.body)
    .then(dbArticlesModel => res.json(dbArticlesModel))
    .catch(err => res.status(422).json(err));
  },
  getMyArticles: function(req, res) {
    db.Articles
    .find({userId: req.query.userId})
    .then(dbArticles => res.json(dbArticles))
    .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Articles
      .findById(req.params.id)
      .then(dbArticlesModel => res.json(dbArticlesModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Articles
      .findById({ _id: req.params.id })
      .then(dbArticlesModel => dbArticlesModel.remove())
      .then(dbArticlesModel => res.json(dbArticlesModel))
      .catch(err => res.status(422).json(err));
  }
}