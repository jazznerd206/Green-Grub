const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({

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

const Blogs = mongoose.model("Blogs", BlogSchema);

module.exports = Blogs;