/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Usuairo', {
    IDUSUARIO: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    STRUSUARIO: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    STRPASSWORD: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    INTNUMINTENTOS: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BITACTIVO: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    INTTIPOUSUARIO: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'USUARIO',
    timestamps: false
  });
};
