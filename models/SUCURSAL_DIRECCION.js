/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SUCURSAL_DIRECCION', {
    IDSUCURSALDIRECCION: {
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
    IDDIRECCION: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'DIRECCION',
        },
        key: 'IDDIRECCION'
      }
    }
  }, {
    sequelize,
    tableName: 'SUCURSAL_DIRECCION'
  });
};
