/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TIPODOMINIO', {
    IDTIPODOMINIO: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    STRDESCRIPCION: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TIPODOMINIO'
  });
};
