const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class User extends Model {}

User.init(
    {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
            len: [3, 100], 
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
            len: [10, 500],
          },
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isUrl: true,
            }
        }
    },
    {
        sequelize,
    }
);
    
module.exports = Item;