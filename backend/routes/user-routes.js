const express = require("express");
const router = express.Router();
const User = require("../model/User");

//const Book = require("../model/Book");
const usersController = require("../controllers/users-controller");

router.get("/", usersController.getAllUsers);
router.post("/", usersController.addUser);
router.get("/:id", usersController.getById);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);

module.exports = router;
