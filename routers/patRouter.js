import { Router } from "express";
import {patController} from "../controllers/patController.js";
const patRouter = new Router();

import { PAT_URL, ID_URL } from "./../utils/consts.js";

patRouter.post(`${PAT_URL}`, patController.create);
patRouter.delete(`${PAT_URL}${ID_URL}`, patController.delete);
patRouter.put(`${PAT_URL}${ID_URL}`, patController.update);
patRouter.get(`${PAT_URL}`, patController.getAll);

export { patRouter };