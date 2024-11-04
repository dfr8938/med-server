import { ApiError } from "../errors/apiError.js";
import { Anat } from "../models/models.js";

class AnatController {
  async create(req, res, next) {
    try {
      const { title, description } = req.body;
      const question = await Anat.create({
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
      const questions = await Anat.findAll();
      return res.json(questions);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      const updateQuestion = await Anat.update(
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
      const questionDelete = await Anat.destroy({ where: { id } });
      return res.json(questionDelete);
    } catch (e) {
      next(ApiError.badRequest(e.method));
    }
  }
}

const anatController = new AnatController();

export { anatController };
