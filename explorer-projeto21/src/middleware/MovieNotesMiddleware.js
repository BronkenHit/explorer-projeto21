class MovieNotesMiddleware {
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
    let title = "O titulo da nota deve ser especificado!",
      description = "A descrição da nota deve ser especificada!",
      rating = "A nota do filme deve ser especificada!";
    user_id = "O identificador do usuário deve ser especificado!";

    if (!request.body) {
      return response.status(400).json({
        title,
        description,
        rating,
        user_id,
      });
    }

    if (
      (request.body && !request.body.title) ||
      !request.body.description ||
      !request.body.rating ||
      !request.body.user_id
    ) {
      if (!request.body.title) {
        title = "O titulo da nota deve ser especificado!";
      } else {
        title = "O titulo da nota foi especificado!";
      }

      if (!request.body.description) {
        description = "A descrição da nota deve ser especificada!";
      } else {
        description = "A descrição da nota foi especificada!";
      }

      if (!request.body.rating) {
        rating = "A nota do filme deve ser especificada!";
      } else {
        rating = "A nota do filme foi especificada!";
      }

      if (!request.body.user_id) {
        user_id = "O identificador do usuário deve ser especificado!";
      } else {
        user_id = "O identificador do usuário foi especificado!";
      }

      return response.status(400).json({
        title,
        description,
        rating,
        user_id,
      });
    }

    if (
      request.body &&
      request.body.user_id &&
      request.body.title &&
      request.body.description &&
      request.body.rating
    ) {
      next();
    }
  }

  async update(request, response, next) {
    let title = "O titulo da nota deve ser especificado!",
      description = "A descrição da nota deve ser especificada!",
      rating = "A nota do filme deve ser especificada!";
    user_id = "O identificador do usuário deve ser especificado!";
    email = "O email do usuário deve ser especificado!";
    password = "A senha do usuário deve ser especificada!";

    if (!request.body) {
      return response.status(400).json({
        title,
        description,
        rating,
        user_id,
        email,
        password,
      });
    }

    if (
      (request.body && !request.body.title) ||
      !request.body.description ||
      !request.body.rating ||
      !request.body.user_id ||
      !request.body.email ||
      !request.body.password
    ) {
      if (!request.body.title) {
        title = "O titulo da nota deve ser especificado!";
      } else {
        title = "O titulo da nota foi especificado!";
      }

      if (!request.body.description) {
        description = "A descrição da nota deve ser especificada!";
      } else {
        description = "A descrição da nota foi especificada!";
      }

      if (!request.body.rating) {
        rating = "A nota do filme deve ser especificada!";
      } else {
        rating = "A nota do filme foi especificada!";
      }

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
        title,
        description,
        rating,
        user_id,
        email,
        password,
      });
    }

    if (
      request.body &&
      request.body.title &&
      request.body.description &&
      request.body.rating &&
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

module.exports = MovieNotesMiddleware;
