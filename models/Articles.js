// Scraping from 'health.com/food'

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({

    headline: {
        type: String,
        // required: true
        unique: true
    },
    summary: {
        type: String,
        // required: true
        unique: true
    },
    link: {
        type: String,
        // required: true
        unique: true
    },
    image: {
        type: String,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Articles = mongoose.model("Articles", ArticleSchema);

module.exports = Articles;