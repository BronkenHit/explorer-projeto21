const connection = require("../database/connection/index");
const knex = require("knex");
const bcryptjs = require("bcryptjs");
const AppError = require("../utils");

class MovieNotesController {
  async index(request, response) {
    const { user_id, email, password } = request.body;
    const user = await connection()
      .select("email", "password")
      .from("users")
      .where("id", Number(user_id));

    let validationEmail, validationPassword;

    try {
      validationEmail = bcryptjs.compareSync(user[0].email, bcryptjs.hashSync(email, 8));

      if (!validationEmail) {
        throw new AppError(
          "😥 O email informado não é o email cadastrado no sistema! 😥"
        );
      }
    } catch (error) {
      console.error(error.message);
    }

    try {
      validationPassword = bcryptjs.compareSync(
        user[0].password,
        bcryptjs.hashSync(password, 8)
      );

      if (!validationPassword) {
        throw new AppError(
          "😥 A senha informada não é a senha cadastrada no sistema! 😥"
        );
      }
    } catch (error) {
      console.error(error.message);
    }

    const index = await connection()
      .select("*")
      .from("movie_notes")
      .where("user_id", Number(user_id))
      .orderBy("id", "asc");

    return response.status(200).json(index);
  }

  async show(request, response) {
    const { id } = request.params;
    const { user_id, email, password } = request.body;

    let validationEmail, validationPassword;
    const user = await connection()
      .select("email", "password")
      .from("users")
      .where("id", Number(user_id));

    try {
      validationEmail = bcryptjs.compareSync(user[0].email, bcryptjs.hashSync(email, 8));

      if (!validationEmail) {
        throw new AppError(
          "😥 O email informado não é o email cadastrado no sistema! 😥"
        );
      }
    } catch (error) {
      console.error(error.message);
    }

    try {
      validationPassword = bcryptjs.compareSync(
        user[0].password,
        bcryptjs.hashSync(password, 8)
      );

      if (!validationPassword) {
        throw new AppError(
          "😥 A Senha informada não é a senha informada no sistema! 😥"
        );
      }
    } catch (error) {
      console.error(error.message);
    }

    const show = await connection()
      .select("*")
      .from("movie_notes")
      .where("id", Number(id)).where("user_id", Number(user_id));

    return response.json(show);
  }

  async create(request, response) {
    const { title, description, rating, user_id } = request.body;

    const create = await connection()
      .insert({
        title: String(title),
        description: String(description),
        rating: String(rating),
        user_id: Number(user_id),
        created_at: String(knex().fn.now()),
        updated_at: String(knex().fn.now()),
      })
      .into("movie_notes");

    return response.status(201).json({
      status: "success",
      message: "🥳 Cadastrado com sucesso! 🥳",
    });
  }

  async update(request, response) {
    const { id } = request.params;
    const { title, description, rating, user_id, email, password } =
      request.body;

    const user = await connection()
      .select("email", "password")
      .from("users")
      .where("id", Number(user_id));

    let validationEmail, validationPassword;

    try {
      validationEmail = bcryptjs.compareSync(user[0].email, bcryptjs.hashSync(email, 8));

      if (!validationEmail) {
        throw new AppError(
          "😥 O email informado não é o email cadastrado no sistema! 😥"
        );
      }
    } catch (error) {
      console.error(error.message);
    }

    try {
      validationPassword = bcryptjs.compareSync(
        user[0].password,
        bcryptjs.hashSync(password, 8)
      );

      if (!validationPassword) {
        throw new AppError(
          "😥 A Senha informada não é a senha informada no sistema! 😥"
        );
      }
    } catch (error) {
      console.error(error.message);
    }

    const update = await connection()
      .where("id", Number(id))
      .update({
        title: String(title),
        description: String(description),
        rating: String(rating),
        user_id: Number(user_id),
        updated_at: String(knex().fn.now()),
      });

    return response.json({
      status: "success",
      message: "🥳 Nota do filme atualizada com sucesso! 🥳",
    });
  }

  async delete(request, response) {
    const { id } = request.params;
    const { user_id, email, password } = request.body;
    let validationEmail, validationPassword;

    const user = await connection()
      .select("email", "password")
      .from("users")
      .where("id", Number(user_id));

    try {
      validationEmail = bcryptjs.compareSync(user[0].email, bcryptjs.hashSync(email, 8));

      if (!validationEmail) {
        throw new AppError(
          "😥 O email informado não é o email cadastrado no sistema 😥"
        );
      }
    } catch (error) {
      console.error(error.message);
    }

    try {
      validationPassword = bcryptjs.compareSync(
        user[0].password,
        bcryptjs.hashSync(password, 8)
      );

      if (!validationPassword) {
        throw new AppError(
          "😥 A Senha informada não é a senha informada no sistema 😥"
        );
      }
    } catch (error) {
      console.error(error.message);
    }

    const del = await connection().from("movie_notes").del().where("id", Number(id)).where("user_id", Number(user_id));

    return response.json({
      status: "success",
      message: "🥳 Nota do filme deletada com sucesso! 🥳",
    });
  }
}

module.exports = MovieNotesController;
