const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class User extends Model {}

User.init(
    {
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