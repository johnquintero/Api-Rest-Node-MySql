/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SUCURSAL_SERVICIO', {
    IDSUCURSALSERVICIO: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
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
    IDSERVICIO: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'SERVICIO',
        },
        key: 'IDSERVICIO'
      }
    },
    DBLVALOR: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SUCURSAL_SERVICIO'
  });
};
