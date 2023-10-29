class UsersMiddleware {
  async index(request, response, next) {
    let user_id = "O identificador do usuário deve ser especificado!",
      email = "O email do usuário deve ser especificado!",
      password = "A senha do usuário deve ser especificado!";

    if (!request.body) {
      return response.status(400).json({
        user_id,
        email,
        password,
      });
    }

    if (
      (request.body && !request.body.user_id) ||
      !request.body.email ||
      !request.body.password
    ) {
      if (!request.body.user_id) {
        user_id = "O identificador do usuário deve ser especificado!";
      } else {
        user_id = "O identificador do usuário foi especificado!";
      }

      if (!request.body.email) {
        email = "O email do usuário deve ser especificado!";
      } else {
        email = "O email do usuário foi especificado!";
      }

      if (!request.body.password) {
        password = "A senha do usuário deve ser especificada!";
      } else {
        password = "A senha do usuário foi especificada!";
      }

      return response.status(400).json({
        user_id,
        email,
        password,
      });
    }

    if (
      request.body &&
      request.body.user_id &&
      request.body.email &&
      request.body.password
    ) {
      next();
    }
  }

  async show(request, response, next) {
    let user_id = "O identificador do usuário deve ser especificado!",
      email = "O email do usuário deve ser especificado!",
      password = "A senha do usuário deve ser especificado!";

    if (!request.body) {
      return response.status(400).json({
        user_id,
        email,
        password,
      });
    }

    if (
      (request.body && !request.body.user_id) ||
      !request.body.email ||
      !request.body.password
    ) {
      if (!request.body.user_id) {
        user_id = "O identificador do usuário deve ser especificado!";
      } else {
        user_id = "O identificador do usuário foi especificado!";
      }

      if (!request.body.email) {
        email = "O email do usuário deve ser especificado!";
      } else {
        email = "O email do usuário foi especificado!";
      }

      if (!request.body.password) {
        password = "A senha do usuário deve ser especificada!";
      } else {
        password = "A senha do usuário foi especificada!";
      }

      return response.status(400).json({
        user_id,
        email,
        password,
      });
    }

    if (
      request.body &&
      request.body.user_id &&
      request.body.email &&
      request.body.password
    ) {
      next();
    }
  }

  async create(request, response, next) {
    let name = "O identificador do usuário deve ser especificado!",
      email = "O email do usuário deve ser especificado!",
      password = "A senha do usuário deve ser especificado!",
      avatar = "A imagem de avatar do usuário pode ser opcional!";

    if (!request.body) {
      return response.status(400).json({
        name,
        email,
        password,
        avatar,
      });
    }

    if (
      (request.body && !request.body.name) ||
      !request.body.email ||
      !request.body.password ||
      !request.body.avatar
    ) {
      if (!request.body.name) {
        name = "O identificador do usuário deve ser especificado!";
      } else {
        name = "O identificador do usuário foi especificado!";
      }

      if (!request.body.email) {
        email = "O email do usuário deve ser especificado!";
      } else {
        email = "O email do usuário foi especificado!";
      }

      if (!request.body.password) {
        password = "A senha do usuário deve ser especificada!";
      } else {
        password = "A senha do usuário foi especificada!";
      }

      if (!request.body.avatar) {
        avatar = "A imagem de avatar do usuário é opcional!";
      } else {
        avatar = "A imagem de avatar do usuário foi especificada!";
      }

      return response.status(400).json({
        name,
        email,
        password,
        avatar,
      });
    }

    if (
      (request.body &&
        request.body.name &&
        request.body.email &&
        request.body.password &&
        request.body.avatar) ||
      !request.body.avatar
    ) {
      next();
    }
  }

  async update(request, response, next) {
    let newName = "O identificador do usuário deve ser especificado!",
      newEmail = "O email do usuário deve ser especificado!",
      newPassword = "A senha do usuário deve ser especificado!";
    newAvatar = "A imagem de avatar do usuário é opcional!";
    oldEmail = "O antigo email do usuário deve ser especificado!";
    oldPassword = "A senha antiga do usuário deve ser especificado!";

    if (!request.body) {
      return response.status(400).json({
        newName,
        newEmail,
        newPassword,
        newAvatar,
        oldEmail,
        oldPassword,
      });
    }

    if (
      (request.body && !request.body.newName) ||
      !request.body.newEmail ||
      !request.body.newPassword ||
      !request.body.newAvatar ||
      request.body.newAvatar ||
      !request.body.oldEmail ||
      !request.body.oldPassword
    ) {
      if (!request.body.newName) {
        newName = "O identificador do usuário deve ser especificado!";
      } else {
        newName = "O identificador do usuário foi especificado!";
      }

      if (!request.body.newEmail) {
        newEmail = "O email do usuário deve ser especificado!";
      } else {
        newEmail = "O email do usuário foi especificado!";
      }

      if (!request.body.newPassword) {
        newPassword = "A senha do usuário deve ser especificada!";
      } else {
        newPassword = "A senha do usuário foi especificada!";
      }

      if (!request.body.newAvatar) {
        newAvatar = "A imagem de avatar do usuário é opcional!";
      } else {
        newAvatar = "A imagem de avatar do usuário foi especificada!";
      }

      if (!request.body.oldEmail) {
        oldEmail = "O antigo email do usuário deve ser especificado!";
      } else {
        oldEmail = "O antigo email do usuário foi especificado!";
      }

      if (!request.body.oldPassword) {
        oldPassword = "A senha antiga do usuário deve ser especificado!";
      } else {
        oldPassword = "A senha antiga do usuário foi especificada!";
      }

      return response.status(400).json({
        newName,
        newEmail,
        newPassword,
        newAvatar,
        oldEmail,
        oldPassword,
      });
    }

    if (
      request.body &&
      request.body.user_id &&
      request.body.email &&
      request.body.password
    ) {
      next();
    }
  }

  async delete(request, response, next) {
    let user_id = "O identificador do usuário deve ser especificado!",
      email = "O email do usuário deve ser especificado!",
      password = "A senha do usuário deve ser especificado!";

    if (!request.body) {
      return response.status(400).json({
        user_id,
        email,
        password,
      });
    }

    if (
      (request.body && !request.body.user_id) ||
      !request.body.email ||
      !request.body.password
    ) {
      if (!request.body.user_id) {
        user_id = "O identificador do usuário deve ser especificado!";
      } else {
        user_id = "O identificador do usuário foi especificado!";
      }

      if (!request.body.email) {
        email = "O email do usuário deve ser especificado!";
      } else {
        email = "O email do usuário foi especificado!";
      }

      if (!request.body.password) {
        password = "A senha do usuário deve ser especificada!";
      } else {
        password = "A senha do usuário foi especificada!";
      }

      return response.status(400).json({
        user_id,
        email,
        password,
      });
    }

    if (
      request.body &&
      request.body.user_id &&
      request.body.email &&
      request.body.password
    ) {
      next();
    }
  }
}

module.exports = UsersMiddleware;
