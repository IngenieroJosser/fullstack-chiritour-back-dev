const {mysql_database} = require('../config')
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(`${mysql_database.db}`, `${mysql_database.user}`, `${mysql_database.pass}`, {
  host: `${mysql_database.host}`,
  dialect: 'mysql',
});

const Users = sequelize.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    rol: {
        type: DataTypes.ENUM('admin', 'cliente'),
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.TIME,
        allowNull: false,
    }
});

module.exports = { Users, sequelize };
