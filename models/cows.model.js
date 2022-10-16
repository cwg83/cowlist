const dbConfig = require("../db/db.config.js");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

const Cows = sequelize.define('cows', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  }
},
  { timestamps: false }
);

sequelize.sync().then(() => {
  console.log('Cows has been established successfully.');
}).catch((error) => {
  console.error('Unable to create table: ', error);
});

module.exports = {
  Cows: Cows
}
