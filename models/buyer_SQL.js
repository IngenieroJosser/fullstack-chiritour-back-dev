const { mysql_database } = require('../config');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(`${mysql_database.db}`, `${mysql_database.user}`, `${mysql_database.pass}`, {
  host: `${mysql_database.host}`,
  dialect: 'mysql',
});

const Buyers = sequelize.define('comprador', {
  id_comprador: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_reserva: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,  // El nombre es obligatorio
  },
  telefono: {
    type: DataTypes.STRING(15),
    allowNull: true,  // El teléfono puede ser nulo
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true,  // El email puede ser nulo
  }
}, {
  tableName: 'comprador',  // Especifica el nombre de la tabla en la base de datos
  timestamps: false,  // Desactivar los campos 'createdAt' y 'updatedAt' si no existen en la tabla
});

module.exports = { Buyers, sequelize };
