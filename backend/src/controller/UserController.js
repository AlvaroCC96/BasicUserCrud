const User = require("../models/User");

const userController = {};

userController.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userController.createUser = async (req, res) => {
  const { name, lastname, email, phone, age } = req.body;
  const newUser = new User({
    name,
    lastname,
    email,
    phone,
    age,
  });
  
  await newUser.save();
  res.json({ message: "User created" });
};

userController.getUser = async (req, res) => {
  if (req.params.id !== undefined) {
    const user = await User.findById(req.params.id);
    return res.json(user);
  } 
  
  res.json({ message: "id is null" });
  
};

userController.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

userController.updateUser = async (req, res) => {
  if (req.params.id !== undefined) {
  const { name, lastname, age, email, phone } = req.body;
  const user = await User.findByIdAndUpdate(req.params.id, {
    name,
    lastname,
    age,
    email,
    phone,
  });

  res.json({ message: "User updated" });
} 
res.json({ message: "id is null" });
};

module.exports = userController;
