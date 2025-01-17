const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const Cities = require("./cities.model");

const User = sequelize.define(
    "User",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            },
        },
        phone: {
            type: DataTypes.BIGINT,
            allowNull: false,
            validate: {
                isNumeric: true,
                len: [10, 15],
            },
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profilePicture: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        role: {
            type: DataTypes.ENUM(
                "Admin",
                "Client",
                "Head Carpenter",
                "Partner",
                "Designer",
                "Worker",
            ),
            allowNull: true,
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    },
    {
        timestamps: true,
        indexes: [
            { unique: true, fields: ["email"] },
            { unique: true, fields: ["phone"] },
        ],
    },
);

User.belongsTo(Cities);

module.exports = User;
