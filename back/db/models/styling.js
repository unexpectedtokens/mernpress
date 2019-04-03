const mongoose = require("mongoose");
const date = new Date();
const day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();
const createdAt = day + "-" + month + "-" + year;
//mongoose schema for posts
const postSchema = new mongoose.Schema({
  styling: { type: Object }
});

module.exports = Post = mongoose.model("posts", postSchema);
