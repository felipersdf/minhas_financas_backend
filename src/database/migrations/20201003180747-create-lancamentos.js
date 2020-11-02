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

      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      date: {
        allowNull: false,
        type: Sequelize.DATE,
        unique: false,
      },

      value: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },

      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
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
