/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VEHICULO', {
    IDVEHICULO: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    IDTIPOVEHICULO: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'TIPO_VEHICULO',
        },
        key: 'IDTIPOVEHICULO'
      }
    },
    IDMODELO: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'MODELO',
        },
        key: 'IDMODELO'
      }
    },
    IDGARAJE: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'GARAJE',
        },
        key: 'IDGARAJE'
      }
    },
    INTANIO: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    STROBSERVACION: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    STRSERIAL: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    STRCOLOR: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    BITACTIVO: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    INTPUERTAS: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    STRMOTOR: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    STRTRANSMISION: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    STRPATHSOAT: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "NA"
    }
  }, {
    sequelize,
    tableName: 'VEHICULO'
  });
};
