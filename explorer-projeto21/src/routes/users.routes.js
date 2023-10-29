const express = require("express");
const UsersController = require("../controller/UsersController");
const UsersMiddleware = require("../middleware/UsersMiddleware");

const usersRoutes = new express();
const usersController = new UsersController();
const usersMiddleware = new UsersMiddleware();

usersRoutes.get("/", usersMiddleware.index, usersController.index);
usersRoutes.get("/:id", usersMiddleware.show, usersController.show);
usersRoutes.post("/", usersMiddleware.create, usersController.create);
usersRoutes.patch("/:id", usersMiddleware.update, usersController.update);
usersRoutes.delete("/:id", usersMiddleware.delete, usersController.delete);

module.exports = usersRoutes;