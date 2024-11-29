const { mysql_database } = require('../config');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(`${mysql_database.db}`, `${mysql_database.user}`, `${mysql_database.pass}`, {
  host: `${mysql_database.host}`,
  dialect: 'mysql',
});

const Multimedia = sequelize.define('multimedia', {
  id_multimedia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  related_type: {
    type: DataTypes.ENUM('location', 'route', 'booking', 'experience'),
    allowNull: false,
  },
  related_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING(255),
    allowNull: false,
  }
}, {
  tableName: 'multimedia', 
  timestamps: false, // Si no necesitas los campos de 'createdAt' y 'updatedAt'
});

module.exports = { Multimedia, sequelize };
