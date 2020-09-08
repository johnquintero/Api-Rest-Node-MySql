/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SERVICIO', {
    IDSERVICIO: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    IDDOMINIO: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'DOMINIO',
        },
        key: 'IDDOMINIO'
      }
    },
    STRNOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    DBLVALOR: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    IDSUCURSAL: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'SUCURSAL',
        },
        key: 'IDSUCURSAL'
      }
    },
    BITACTIVO: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SERVICIO'
  });
};
