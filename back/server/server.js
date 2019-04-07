const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Post = require("../db/models/Post");
const db = require("../db/db");
const postRoute = require("./routes/posts");
const userRoute = require("./routes/users");
const cors = require("cors");
const corsOptions = require("../config/cors");

//public path
const path = require("path");
const publicPath = path.join(__dirname + "/public");
app.use(express.static(publicPath));

//body-parser setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cors header setup
app.use(cors({ corsOptions }));
//passport config
const passport = require("passport");
require("../config/passport.js")(passport);

//passport middleware
app.use(passport.initialize());

//Routes
app.use("/posts", postRoute);
app.use("/users", userRoute);

//port definition
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
