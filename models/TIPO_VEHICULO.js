/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TIPO_VEHICULO', {
    IDTIPOVEHICULO: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    STRDESCRIPCION: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TIPO_VEHICULO'
  });
};
