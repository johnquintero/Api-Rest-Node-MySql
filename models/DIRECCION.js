/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DIRECCION', {
    IDDIRECCION: {
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
    STRDIRECCION: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    STRDESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    BITPRINCIPAL: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'DIRECCION'
  });
};
