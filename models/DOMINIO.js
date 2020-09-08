/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DOMINIO', {
    IDDOMINIO: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    IDDOMINIOPADRE: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: {
          tableName: 'DOMINIO',
        },
        key: 'IDDOMINIO'
      }
    },
    STRDESCRIPCION: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    BITACTIVO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'DOMINIO'
  });
};
