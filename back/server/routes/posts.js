const express = require("express");
const router = express.Router();
const Post = require("../../db/models/Post");

//route to get all posts
router.use("/getposts", (req, res) => {
  Post.find().then(result => {
    res.status(200).send(result);
  });
});
//route to get a specific post
router.use("/article/:id", (req, res) => {
  const _id = req.params.id;
  Post.findOne({ _id })
    .then(post => {
      if (!post) return res.status(404).json({ eMsg: "Post not found" });
      res.status(200).json(post);
    })
    .catch(e => res.status(400).json({ eMsg: "Something went wrong" }));
});
//route to find a post (for the search function)
router.use("/search/:handle", (req, res) => {
  const title = req.params.handle;
  Post.find({ title })
    .then(doc => {
      if (!doc) {
        return res.status(404).json({ eMsg: "No articles found" });
      }
      res.status(200).json(doc);
    })
    .catch(e => res.status(400).json({ eMsg: "Something went wrong" }));
});

//route to add a new post, only if logged in
router.use("/addpost", (req, res) => {
  const reqBody = req.body;
  const title = reqBody.title;

  Post.findOne({ title })
    .then(article => {
      if (article) {
        return res.status(400).json({ eMsg: "Title already exists" });
      }
      const post = new Post();
      post.title = title;
      post.content = reqBody.content;
      const date = new Date();
      const month = date.getMonth();
      const year = date.getFullYear();
      const createdAt = month + "-" + year;
      post.createdAt = createdAt;
      post.imgLink = req.body.imgLink;
      if (post.title && post.content) {
        post
          .save()
          .then(article => {
            res.status(200).json(article);
          })
          .catch(e =>
            res.status(400).json({ eMsg: "Unable to save article", error: e })
          );
      }
    })
    .catch(e => {
      res.status(400).json({ eMsg: "Something went wrong" });
    });
});

module.exports = router;
