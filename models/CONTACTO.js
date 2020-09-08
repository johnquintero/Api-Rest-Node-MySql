/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CONTACTO', {
    IDCONTACTO: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    IDEMPRESA: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'EMPRESA',
        },
        key: 'IDEMPRESA'
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
    STRNOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    STRAPELLIDO: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    STRDIRECCION: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    STRTELEFONO: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    STREMAIL: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DTMFECHANACIMIENTO: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'CONTACTO'
  });
};
