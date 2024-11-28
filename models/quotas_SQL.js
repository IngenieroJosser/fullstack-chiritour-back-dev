const { mysql_database } = require('../config');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(`${mysql_database.db}`, `${mysql_database.user}`, `${mysql_database.pass}`, {
  host: `${mysql_database.host}`,
  dialect: 'mysql',
});

const Quotas = sequelize.define('cupo', {
  id_cupo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_reserva: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nombre_persona: {
    type: DataTypes.STRING(100),
    allowNull: true,  // Puede ser nulo si no se proporciona un nombre
  },
  numero_asiento: {
    type: DataTypes.INTEGER,
    allowNull: true,  // Puede ser nulo si no se proporciona un número de asiento
  },
  turno: {
    type: DataTypes.ENUM('Mañana', 'Tarde', 'Noche'),
    defaultValue: 'Mañana',  // Valor por defecto
    allowNull: true,  // Puede ser nulo si no se proporciona un turno
  },
  rango_edad: {
    type: DataTypes.ENUM('Niño', 'Joven', 'Adulto', 'Mayor'),
    defaultValue: 'Adulto',  // Valor por defecto
    allowNull: true,  // Puede ser nulo si no se proporciona un rango de edad
  }
}, {
  tableName: 'cupo',  // Especifica el nombre de la tabla en la base de datos
  timestamps: false,  // Desactivar los campos 'createdAt' y 'updatedAt' si no existen en la tabla
});

module.exports = { Quotas, sequelize };
