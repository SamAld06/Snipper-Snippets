const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Snippet extends Model {}

Snippet.init(
    {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
            len: [3, 100], 
          },
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
            len: [10, 500],
          },
        },
        category: {
          type: DataTypes.ENUM,
          values: ["Java, JavaScript, Python, HTML, CSS, C, C++, C#, Ruby, Kotlin, Typescript"],
          allowNull: false,
          validate: {
            notEmpty: true,
            len: [3, 50],
          },
        }
    },
    {
        sequelize,
    }
);
    
module.exports = Item;