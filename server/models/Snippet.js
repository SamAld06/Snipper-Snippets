const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Snippet extends Model {}

Snippet.init(
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
        description: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
            len: [10, 500],
          },
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [1, 1000000],
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
        },
        user: {
            type: DataTypes.STRING,

        }
    },
    {
        sequelize,
    }
);
    
module.exports = Item;