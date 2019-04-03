const mongoose = require("mongoose");
//mongoose schema for posts
const postSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  imgLink: {
    type: String
    // default:
    //   "http://www.jlntransport.nl/wp-content/uploads/2017/07/default-placeholder.jpg",
    // required: true
  },
  vidLink: {
    type: String
  },
  content: {
    required: true,
    type: String
  },
  createdAt: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  }
});

module.exports = Post = mongoose.model("posts", postSchema);
