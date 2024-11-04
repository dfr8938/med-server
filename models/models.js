import { sequelize } from "../utils/db.js";
import { DataTypes } from "sequelize";

const Pat = sequelize.define("pat", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING(500), allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
});

export { Pat };
