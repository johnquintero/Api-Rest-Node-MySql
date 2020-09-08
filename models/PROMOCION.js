/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PROMOCION', {
    IDPROMOCION: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    IDSUCURSALSERVICIO: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: {
          tableName: 'SUCURSAL_SERVICIO',
        },
        key: 'IDSUCURSALSERVICIO'
      }
    },
    DBLPORCENTAJEDESCUENTO: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    DTMFECHAINICIAL: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DTMFECHAFINAL: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    STRDESCRIPCION: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    BITACTIVO: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PROMOCION'
  });
};
