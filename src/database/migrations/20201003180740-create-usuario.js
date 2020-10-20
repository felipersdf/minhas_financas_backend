'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('usuarios', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            nome: {
                allowNull: false,
                type: Sequelize.STRING
            },

            usuario: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: false
            },

            senha: {
              allowNull: false,
              type: Sequelize.STRING,
              unique: false
          },

            // lancamentos_id: {
            //     allowNull: true,
            //     type: Sequelize.INTEGER,
            //     references: {
            //         model: 'lancamentos',
            //         key: 'id'
            //     }
            // },

            created_at: {
                allowNull: false,
                defaultValue: Sequelize.fn('NOW'),
                type: Sequelize.DATE
            },

            updated_at: {
                allowNull: false,
                defaultValue: Sequelize.fn('NOW'),
                type: Sequelize.DATE
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('usuarios');
    }
};