import { Router } from "express";
import {anatController} from "../controllers/anatController.js";
const anatRouter = new Router();

import { ANAT_URL, ID_URL } from "../utils/consts.js";

anatRouter.post(`${ANAT_URL}`, anatController.create);
anatRouter.delete(`${ANAT_URL}${ID_URL}`, anatController.delete);
anatRouter.put(`${ANAT_URL}${ID_URL}`, anatController.update);
anatRouter.get(`${ANAT_URL}`, anatController.getAll);

export { anatRouter };