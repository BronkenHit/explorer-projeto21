class MovieTagsMiddleware {
  async index(request, response, next) {
    next();
  }

  async show(request, response, next) {
    let user_id;

    if (!request.body) {
      return response.status(400).json({
        user_id: "O identificador do usuário deve ser especificado!",
      });
    }

    if (request.body && !request.body.user_id) {
      if (!request.body.user_id) {
        user_id = "O identificador do usuário deve ser especificado!";
      } else {
        user_id = "O identificador do usuário foi especificado!";
      }

      return response.status(400).json({
        user_id,
      });
    }

    if (request.body && request.body.user_id) {
      next();
    }
  }

  async create(request, response, next) {
    let user_id, note_id, name;

    if (!request.body) {
      return response.status(400).json({
        user_id: "O identificador do usuário deve ser especificado!",
        note_id: "O identificador da nota deve ser especificado!",
        name: "O nome da tag deve ser especificada!",
      });
    }

    if (
      (request.body && !request.body.user_id) ||
      !request.body.note_id ||
      !request.body.name
    ) {
      if (!request.body.user_id) {
        user_id = "O identificador do usuário deve ser especificado!";
      } else {
        user_id = "O identificador do usuário foi especificado!";
      }

      if (!request.body.note_id) {
        note_id = "O identificador da nota deve ser especificado!";
      } else {
        note_id = "O identificador da nota foi especificado!";
      }

      if (!request.body.name) {
        name = "O nome da tag deve ser especificado!";
      } else {
        name = "O nome da tag foi especificado!";
      }

      return response.status(400).json({
        user_id,
        note_id,
        name,
      });
    }

    if (
      request.body &&
      request.body.user_id &&
      request.body.note_id &&
      request.body.name
    ) {
      next();
    }
  }

  async update(request, response, next) {
    let user_id, note_id, name;

    if (!request.body) {
      return response.status(400).json({
        user_id: "O identificador do usuário deve ser especificado!",
        note_id: "O identificador da nota deve ser especificado!",
        name: "O nome da tag deve ser especificada!",
      });
    }

    if (
      (request.body && !request.body.user_id) ||
      !request.body.note_id ||
      !request.body.name
    ) {
      if (!request.body.user_id) {
        user_id = "O identificador do usuário deve ser especificado!";
      } else {
        user_id = "O identificador do usuário foi especificado!";
      }

      if (!request.body.note_id) {
        note_id = "O identificador da nota deve ser especificado!";
      } else {
        note_id = "O identificador da nota foi especificado!";
      }

      if (!request.body.name) {
        name = "O nome da tag deve ser especificado!";
      } else {
        name = "O nome da tag foi especificado!";
      }

      return response.status(400).json({
        user_id,
        note_id,
        name,
      });
    }

    if (
      request.body &&
      request.body.user_id &&
      request.body.note_id &&
      request.body.name
    ) {
      next();
    }
  }

  async delete(request, response, next) {
    let user_id, note_id, tag_id;

    if (request.body && !request.body.user_id ||
      !request.body.note_id ||
      !request.body.tag_id
    ) {
      if (!request.body.user_id) {
        user_id = "O identificador do usuário deve ser especificado!";
      } else {
        user_id = "O identificador do usuário foi especificado!";
      }

      if (!request.body.note_id) {
        note_id = "O identificador da nota deve ser especificado!";
      } else {
        note_id = "O identificador da nota foi especificado!";
      }

      if (!request.body.tag_id) {
        tag_id = "O identificador da tag deve ser especificado!";
      } else {
        tag_id = "O identificador da tag foi especificado!";
      }

      return response.status(400).json({
        user_id,
        note_id,
        tag_id,
      });
    }

    if (
        request.body &&
        request.body.user_id &&
        request.body.note_id &&
        request.body.tag_id
      ) {
        next();
      }
  }
}

module.exports = MovieTagsMiddleware;
