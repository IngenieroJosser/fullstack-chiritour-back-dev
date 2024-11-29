const { mysql_database } = require('../config');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(`${mysql_database.db}`, `${mysql_database.user}`, `${mysql_database.pass}`, {
  host: `${mysql_database.host}`,
  dialect: 'mysql',
});

const Locations = sequelize.define('ubicacion', {
  id_ubicacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  departamento: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  municipio: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  imagen_cabecera: {
    type: DataTypes.STRING(255),
    allowNull: true,
  }
}, {
  tableName: 'ubicacion', 
  timestamps: false,     
});

module.exports = { Locations, sequelize };