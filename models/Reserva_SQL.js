const {mysql_database} = require('../config')
const { Routes } = require('./routes_SQL'); // Importa el modelo relacionado

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`${mysql_database.db}`, `${mysql_database.user}`, `${mysql_database.pass}`, {
  host: `${mysql_database.host}`,
  dialect: 'mysql',
});

const Reserva = sequelize.define('Reserva', {
  destino: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fecha_fin: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  numero_personas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tipo_tour: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  transporte: {
    type: DataTypes.STRING,
  },
  hospedaje: {
    type: DataTypes.BOOLEAN,
  },
  alimentacion: {
    type: DataTypes.BOOLEAN,
  },
  comentarios: {
    type: DataTypes.TEXT,
  },
  metodo_pago: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_ruta: {
    type: DataTypes.INTEGER, // Clave foránea hacia la tabla `ruta`
    allowNull: false,
  },
});

// Relación: Reserva pertenece a una Ruta
Reserva.belongsTo(Routes, { foreignKey: 'id_ruta', as: 'ruta' });

module.exports = { Reserva, sequelize };
