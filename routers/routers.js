import { Router } from "express";
const routers = new Router();

import {anatRouter} from "./anatRouter.js";
import {patRouter} from "./patRouter.js";

routers.use("/", anatRouter);
routers.use("/", patRouter);

export { routers };