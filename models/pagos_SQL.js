const { mysql_database } = require('../config');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(`${mysql_database.db}`, `${mysql_database.user}`, `${mysql_database.pass}`, {
  host: `${mysql_database.host}`,
  dialect: 'mysql',
});

const Pagos = sequelize.define('pagos', {
  id_pago: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_reserva: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  monto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  fecha_pago: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  respuesta_payu: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
}, {
  tableName: 'pagos',  // Especifica el nombre de la tabla en la base de datos
  timestamps: false,  // Desactivar los campos 'createdAt' y 'updatedAt' si no existen en la tabla
});

module.exports = { Pagos, sequelize };
