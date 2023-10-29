const express = require("express");
const MovieTagsController = require("../controller/MovieTagsController");
const MovieTagsMiddleware = require("../middleware/MovieTagsMiddleware");

const movieTagsRoutes = new express();
const movieTagsController = new MovieTagsController();
const movieTagsMiddleware = new MovieTagsMiddleware();

movieTagsRoutes.get("/", movieTagsMiddleware.index, movieTagsController.index);
movieTagsRoutes.get("/:id", movieTagsMiddleware.show, movieTagsController.show);
movieTagsRoutes.post("/", movieTagsMiddleware.create, movieTagsController.create);
movieTagsRoutes.patch("/:id", movieTagsMiddleware.update, movieTagsController.update);
movieTagsRoutes.delete("/:id", movieTagsMiddleware.delete, movieTagsController.delete);

module.exports = movieTagsRoutes;