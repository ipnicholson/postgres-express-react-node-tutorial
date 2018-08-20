"use strict";
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define(
    "TodoItem",
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false
      },
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {}
  );
  TodoItem.associate = (models) => {
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE', // if we delete a todo, all the todoItems associated with it are also deleted
    });
  };
  return TodoItem;
};
