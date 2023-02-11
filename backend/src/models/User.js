const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: String,
    lastname: String,
    age: Number,
    phone: Number,
    email: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
