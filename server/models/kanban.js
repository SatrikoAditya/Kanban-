'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kanban extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Kanban.belongsTo(models.User, {foreignKey: 'userId'})
    }
  };
  Kanban.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'title is required'
        },
        notEmpty: {
          args: true,
          msg: 'title is required'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'description is required'
        },
        notEmpty: {
          args: true,
          msg: 'description is required'
        }
      } 
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'category is required'
        },
        notEmpty: {
          args: true,
          msg: 'category is required'
        }
      }
    } 
  }, {
    sequelize,
    modelName: 'Kanban',
  });
  return Kanban;
};