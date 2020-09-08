/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USUARIO_DOMINIO', {
    IDUSUARIO: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'USUARIO',
        },
        key: 'IDUSUARIO'
      }
    },
    IDDOMINIO: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'DOMINIO',
        },
        key: 'IDDOMINIO'
      }
    }
  }, {
    sequelize,
    tableName: 'USUARIO_DOMINIO'
  });
};
