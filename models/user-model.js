const Sequelize = require('sequelize');
const sequelizeConnection = require("./db");

const User = sequelizeConnection.define('user', {
  username: {
    type: Sequelize.STRING,
    validate: {
      len: [1, 20],
    }
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true;
    }
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      len: [1, 15],
    }
  }
})

User.sync();

module.exports = User;
