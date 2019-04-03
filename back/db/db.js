const mongoose = require("mongoose");
const db = mongoose
  .connect("mongodb://localhost:27017/nodepress", { useNewUrlParser: true })
  .then(docs => {
    console.log("Connected to db");
  })
  .catch(e => {
    console.log(e);
  });
mongoose.Promise = global.Promise;

module.exports = { db };
