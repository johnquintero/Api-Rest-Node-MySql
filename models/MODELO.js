/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MODELO', {
    IDMODELO: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    IDMARCA: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'MARCA',
        },
        key: 'IDMARCA'
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
    tableName: 'MODELO'
  });
};
