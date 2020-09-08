'use strict';
const {
  Model
} = require('sequelize');
const {hashPass} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Kanban, {foreignKey: 'userId'})
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'email is required'
        },
        notEmpty: {
          args: true,
          msg: 'email is required'
        },
        isEmail: {
          args: true,
          msg: 'invalid email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'password is required'
        },
        len: {
          args: [6,24],
          msg: 'password must in range 6 to 24 digits'
        }
      }
    },
    organization: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.addHook('beforeCreate', (user, opt) => {
    user.password = hashPass(user.password)
  })
  return User;
};