/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SUCURSAL_TELEFONO', {
    IDSUCURSALTELEFONO: {
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
    IDTELEFONO: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'TELEFONO',
        },
        key: 'IDTELEFONO'
      }
    }
  }, {
    sequelize,
    tableName: 'SUCURSAL_TELEFONO'
  });
};
