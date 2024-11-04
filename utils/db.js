import { Sequelize } from "sequelize";

const sequelize = new Sequelize(`med`, `postgres`, `12345`, {
  dialect: `postgres`,
  host: `localhost`,
  port: 5432,
});

export { sequelize };
