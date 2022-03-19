const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL ||
    "postgres://localhost/dealers_choice_react_webpack",
  {
    //turns gibberish off
    logging: false,
  }
);

module.exports = { db, Sequelize };
