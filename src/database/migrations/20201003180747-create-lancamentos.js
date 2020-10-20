"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("lancamentos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      descricao: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      data: {
        allowNull: false,
        type: Sequelize.DATE,
        unique: false,
      },

      valor: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false,
      },

      status: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false,
      },

      tipo_lancamento: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false,
      },

      status_lancamento: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false,
      },

      usuario_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
            model: 'usuarios',
            key: 'id'
        }
      },

      created_at: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE,
      },

      updated_at: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("lancamentos");
  },
};
