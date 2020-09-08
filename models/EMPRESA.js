/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EMPRESA', {
    IDEMPRESA: {
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
    STRIDENTIFICACION: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    STRRAZONSOCIAL: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    DTMFECHAFUNDACION: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    IMGLOGO: {
      type: 'BLOB',
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EMPRESA'
  });
};
