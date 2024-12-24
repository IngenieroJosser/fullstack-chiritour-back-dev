const { mysql_database } = require('../config');
const { Sequelize, DataTypes } = require('sequelize');
const { Locations } = require('./location_SQL'); // Importa el modelo relacionado

const sequelize = new Sequelize(`${mysql_database.db}`, `${mysql_database.user}`, `${mysql_database.pass}`, {
  host: `${mysql_database.host}`,
  dialect: 'mysql',
});

const Routes = sequelize.define('ruta', {
  id_ruta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  id_ubicacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  duracion: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  precio_base: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  imagen_cabecera: {
    type: DataTypes.STRING(255),
    allowNull: true,
  }
}, {
  tableName: 'ruta',  // Especifica el nombre de la tabla en la base de datos
  timestamps: false,  // Desactivar los campos 'createdAt' y 'updatedAt' si no existen en la tabla
});

// Relación: Ruta pertenece a una Ubicación
Routes.belongsTo(Locations, { foreignKey: 'id_ubicacion', as: 'ubicacion' });

module.exports = { Routes, sequelize };