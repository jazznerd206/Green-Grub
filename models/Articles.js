// Scraping from 'health.com/food'

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({

  author: {
    type: String
  },
  title: {
    type: String,
    unique: true
  },
  description: {
    type: String
  },
  url: {
    type: String
  },
  urlToImage: {
    type: String
  },
  urlToImage: {
    type: String
  },
  userId: {
    type: String,
    required: true
  }
});

const Articles = mongoose.model("Articles", ArticleSchema);

module.exports = Articles;