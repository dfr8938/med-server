import express from "express";
import cors from "cors";
import { sequelize } from "./utils/db.js";
import { errorHandlingMiddleware } from "./middlewares/errorHandlingMiddleware.js";

import { routers } from "./routers/routers.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routers);

// Подключение в конце, обработка ошибок
app.use(errorHandlingMiddleware);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(3001, () => {
      console.log(`Server up and listening on port 3001`);
    });
  } catch (e) {
    console.log(e.message);
  }
};

start();
