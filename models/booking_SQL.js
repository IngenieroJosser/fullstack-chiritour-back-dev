const { mysql_database } = require('../config');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(`${mysql_database.db}`, `${mysql_database.user}`, `${mysql_database.pass}`, {
  host: `${mysql_database.host}`,
  dialect: 'mysql',
});

const Bookings = sequelize.define('reserva', {
  id_reserva: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_ruta: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_experiencia: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nombre : {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  fecha_reserva: {
    type: DataTypes.DATEONLY,  // Usamos DATEONLY para manejar solo la fecha (sin tiempo)
    allowNull: false,
  },
  codigo_descuento: {
    type: DataTypes.STRING(50),
    allowNull: true,  // Puede ser nulo si no se proporciona un código
  },
  descuento: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,  // Puede ser nulo si no se proporciona un descuento
    defaultValue: 0.00,  // Valor por defecto
  }
}, {
  tableName: 'reserva',  // Especifica el nombre de la tabla en la base de datos
  timestamps: false,  // Desactivar los campos 'createdAt' y 'updatedAt' si no existen en la tabla
});

module.exports = { Bookings, sequelize };
