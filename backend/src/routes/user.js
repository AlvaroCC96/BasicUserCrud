const { Router } = require("express");
const router = Router();

const {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} = require("../controller/UserController");

router.route("/").get(getUsers).post(createUser);

router.route("/:id").get(getUser).delete(deleteUser).put(updateUser);

module.exports = router;
