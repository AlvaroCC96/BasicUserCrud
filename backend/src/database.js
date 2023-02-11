const mongoose = require("mongoose");

// Configuration chain
const URI = process.env.MONGOOB_URI
  ? process.env.MONGOOB_URI
  : "mongodb://127.0.0.1:27017/dbtest";

mongoose.set("strictQuery", false);
mongoose.connect(URI);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Successful Database Connection: ", URI);
});
