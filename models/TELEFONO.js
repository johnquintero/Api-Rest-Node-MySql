/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TELEFONO', {
    IDTELEFONO: {
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
    STRTELEFONO: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    BITPRINCIPAL: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TELEFONO'
  });
};
