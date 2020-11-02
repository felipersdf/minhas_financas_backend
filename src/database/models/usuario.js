'use strict';

module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    }, {
        freezeTableName: true,
        tableName: 'usuarios'
    });

    Usuario.associate = function (models) {
        // Usuario.belongsTo(models.Lancamentos, { as: 'lancamentos', foreignKey: 'lancamentos_id' })
        Usuario.hasMany(models.Lancamentos, {as:'lancamentos', foreignKey:'id'})
    };

    return Usuario;
};