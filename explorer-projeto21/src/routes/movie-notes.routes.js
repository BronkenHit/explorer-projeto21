const express = require("express");
const MovieNotesController = require("../controller/MovieNotesController");
const MovieNotesMiddleware = require("../middleware/MovieNotesMiddleware");

const movieNotes = new express();
const movieNotesController = new MovieNotesController();
const movieNotesMiddleware = new MovieNotesMiddleware();

movieNotes.get("/", movieNotesMiddleware.index, movieNotesController.index);
movieNotes.get("/:id", movieNotesMiddleware.show, movieNotesController.show);
movieNotes.post("/", movieNotesMiddleware.create, movieNotesController.create);
movieNotes.patch("/:id", movieNotesMiddleware.update, movieNotesController.update);
movieNotes.delete("/:id", movieNotesMiddleware.delete, movieNotesController.delete);

module.exports = movieNotes;