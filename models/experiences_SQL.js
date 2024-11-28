const { mysql_database } = require('../config');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(`${mysql_database.db}`, `${mysql_database.user}`, `${mysql_database.pass}`, {
  host: `${mysql_database.host}`,
  dialect: 'mysql',
});

const Experiences = sequelize.define('experiencia', {
  id_experiencia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_ruta: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_realizacion: {
    type: DataTypes.DATEONLY,  // Usamos DATEONLY para manejar solo la fecha (sin tiempo)
    allowNull: false,
  },
  capacidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('Disponible', 'No disponible'),
    allowNull: true,
    defaultValue: 'Disponible',  // Valor por defecto
  }
}, {
  tableName: 'experiencia',  // Especifica el nombre de la tabla en la base de datos
  timestamps: false,  // Desactivar los campos 'createdAt' y 'updatedAt' si no existen en la tabla
});

module.exports = { Experiences, sequelize };