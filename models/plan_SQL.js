const { mysql_database } = require('../config');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(`${mysql_database.db}`, `${mysql_database.user}`, `${mysql_database.pass}`, {
  host: `${mysql_database.host}`,
  dialect: 'mysql',
});

const Plans = sequelize.define('plan', {
  id_plan: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_experiencia: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,  // Puede ser nulo si no se proporciona un valor
  },
  beneficios: {
    type: DataTypes.TEXT,
    allowNull: true,  // Puede ser nulo si no se proporciona
  },
  nombre :{
    type: DataTypes.TEXT,
    allowNull: true
  },
}, {
  tableName: 'plan',  // Especifica el nombre de la tabla en la base de datos
  timestamps: false,  // Desactivar los campos 'createdAt' y 'updatedAt' si no existen en la tabla
});

module.exports = { Plans, sequelize };
