/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sucursal', {
    IDSUCURSAL: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    IDEMPRESA: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'EMPRESA',
        },
        key: 'IDEMPRESA'
      }
    },
    STRNOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    BITPRINCIPAL: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    STRHORARIODESCRIPCION: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    INTHOARIOINI: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    INTHOARIOFIN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    STRDIRECCION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    STRCIUDAD: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    STRGEOREFERENCIA: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sucursal'
  });
};
