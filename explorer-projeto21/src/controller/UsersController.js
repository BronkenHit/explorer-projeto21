const connection = require("../database/connection");
const knex = require("knex");
const AppError = require("../utils");
const { hash, compare } = require("bcryptjs");

class UsersController {
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
      .from("users")
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
      .from("users")
      .where({ id: Number(id) });

    return response.status(200).json(show);
  }

  async create(request, response) {
    const { name, email, password, avatar } = request.body;

    const create = await connection()
      .insert({
        name: String(name),
        email: String(await hash(email, 8)),
        password: String(await hash(password, 8)),
        avatar: String(await hash(avatar, 8)),
        created_at: String(knex().fn.now()),
        updated_at: String(knex().fn.now()),
      }).into("users");

    return response.status(201).json({
      status: "success",
      message: "🥳 Cadastrado com sucesso! 🥳",
    });
  }

  async update(request, response) {
    const { id } = request.params;
    const { newName, newEmail, newPassword, newAvatar, oldEmail, oldPassword } =
      request.body;
    let user,
      encryptedEmail,
      encryptedPassword,
      encryptedAvatar,
      verificationEmail,
      verificationPassword;

    try {
      user = await connection()
        .select("email", "password")
        .from("users")
        .where({
          id: Number(id),
        });

      if (!user) {
        throw new AppError(
          "Não foi possível encontrar o usuário especificado!"
        );
      }
    } catch (error) {
      console.error(error.message);
    }

    try {
      encryptedEmail = bcryptjs.hashSync(newEmail, 8);

      if (!encryptedEmail) {
        throw new AppError("Não foi possível criptografar o novo email!");
      }
    } catch (error) {
      console.error(error.message);
    }

    try {
      encryptedPassword = bcryptjs.hashSync(newPassword, 8);

      if (!encryptedPassword) {
        throw new AppError("Não foi possível criptografar a nova senha!");
      }
    } catch (error) {
      console.error(error.message);
    }

    try {
      encryptedAvatar = bcryptjs.hashSync(newAvatar, 8);

      if (!encryptedAvatar) {
        throw new AppError(
          "Não foi possível criptografar a nova url do avatar!"
        );
      }
    } catch (error) {
      console.error(error.message);
    }

    try {
      verificationEmail = bcryptjs.compareSync(oldEmail, user[0].email);

      if (!verificationEmail) {
        throw new AppError(
          "😢 O antigo email informado não é igual ao email cadastrado no sistema! 😢"
        );
      }
    } catch (error) {
      console.error(error.message);
    }

    try {
      verificationPassword = bcryptjs.compareSync(oldPassword, user[0].password);

      if (!verificationPassword) {
        throw new AppError(
          "😢 A antiga senha informada não é igual a senha cadatrada no sistema! 😢"
        );
      }
    } catch (error) {
      console.error(error.message);
    }

    const update = await connection()
      .from("users")
      .where("id", id)
      .update({
        name: String(newName),
        email: String(encryptedEmail),
        password: String(encryptedPassword),
        avatar: String(encryptedAvatar),
        updated_at: String(knex().fn.now()),
      });

    return response.status(200).json({
      status: "success",
      message: "🥳 Atualização realizada com sucesso! 🥳",
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

    const del = await connection().del().from("users").where("id", Number(id));

    return response.status(200).json({
      status: "success",
      message: "🥳 Usuário deletado com successo! 🥳",
    });
  }
}

module.exports = UsersController;
