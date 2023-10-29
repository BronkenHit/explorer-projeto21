const connection = require("../database/connection");

class MovieTagsController {
    async index (request, response) {
        const index = await connection().select("*").from("movie_tags").orderBy("id", "asc");

        return response.status(200).json(index);
    }

    async show (request, response) {
        const { id } = request.params;
        const { user_id } = request.body;

        const show = await connection().select("*").from("movie_tags").where("id", Number(id)).where("user_id", Number(user_id));

        return response.status(200).json(show);
    }

    async create (request, response) {
        const { note_id, user_id, name } = request.body;

        const create = await connection().insert({
            name: name,
            note_id: note_id,
            user_id: user_id,
        }).into("movie_tags");

        return response.status(201).json({
            "status": "success",
            "message": "Cadastro realizado com sucesso!"
        });
    }

    async update (request, response) {
        const { id } = request.params;
        const { name } = request.body;

        const update = await connection("movie_tags").update({
            name: name,
        }).where("id", id);

        return response.status(200).json({
            "status": "success",
            "message": "Tag atualizada com sucesso!"
        })
    }

    async delete (request, response) {
        const { id } = request.params;

        const del = await connection("movie_tags").del().where("id", id);

        return response.json({
            "status": "success",
            "message": "Tag deletada com sucesso!"
        })
    }
}

module.exports = MovieTagsController;