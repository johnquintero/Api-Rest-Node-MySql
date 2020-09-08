/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MARCA', {
    IDMARCA: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    IDTIPOVEHICULO: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'TIPO_VEHICULO',
        },
        key: 'IDTIPOVEHICULO'
      }
    },
    STRDESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    BITACTIVO: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'MARCA'
  });
};
