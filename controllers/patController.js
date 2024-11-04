import { ApiError } from "../errors/apiError.js";
import { Pat } from "../models/models.js";

class PatController {
  async create(req, res, next) {
    try {
      const { title, description } = req.body;
      const question = await Pat.create({
        title,
        description,
      });
      return res.json(question);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res, next) {
    try {
      const questions = await Pat.findAll();
      return res.json(questions);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      const updateQuestion = await Pat.update(
        { title, description },
        { where: { id } }
      );
      return res.json(updateQuestion);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const questionDelete = await Pat.destroy({ where: { id } });
      return res.json(questionDelete);
    } catch (e) {
      next(ApiError.badRequest(e.method));
    }
  }
}

const patController = new PatController();

export { patController };
