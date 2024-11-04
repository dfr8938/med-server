import { Router } from "express";
const routers = new Router();

import {patRouter} from "./patRouter.js";

routers.use("/", patRouter);

export { routers };