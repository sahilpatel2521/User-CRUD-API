const express = require("express");
const router = express.Router();

const {
  getUsersList,
  createUser,
  getUserDetail,
  deleteUser,
  updateUserDetail,
} = require("../controller/Users");

router.route("/").get(getUsersList).post(createUser);
router
  .route("/:id")
  .get(getUserDetail)
  .delete(deleteUser)
  .put(updateUserDetail);

module.exports = router;
