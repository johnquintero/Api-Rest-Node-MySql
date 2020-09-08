/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GARAJE', {
    IDGARAJE: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    IDUSUARIO: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'USUARIO',
        },
        key: 'IDUSUARIO'
      }
    },
    DTMFECHACREACION: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    BITACTIVO: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'GARAJE'
  });
};
