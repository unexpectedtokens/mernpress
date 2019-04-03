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
  res.send(title);
});

//route to add a new post, only if logged in
router.use("/addpost", (req, res) => {
  const reqBody = req.body;
  const title = reqBody.title;
  const content = reqBody.content;
  const imgLink = req.body.imgLink;
  const vidLink = req.body.vidLink;
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const createdAt = month + "-" + year;

  const post = new Post({
    title,
    content,
    imgLink,
    createdAt,
    vidLink
  });
  Post.findOne({ title })
    .then(result => {
      if (result) {
        res.status(400).json({ eMsg: "Post title already exists" });
      } else if (!result) {
        post
          .save()
          .then(doc => {
            res.json({ message: "success" });
          })
          .catch(e => {
            console.log(e);
          });
      }
    })
    .catch(e => {
      res.json(e);
    });
});

module.exports = router;
