import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUserPassword
} from "../controllers/users.mjs";

const router = express.Router();

router.route("/")
  .post(createUser)
  .get(getAllUsers)

router.route("/:id")
  .get(getUserById)
  .delete(deleteUser)

router.route("/:id/password")
  .put(updateUserPassword)

export default router;