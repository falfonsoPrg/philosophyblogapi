const { DataTypes } = require('sequelize');

module.exports = (sequelize)  => {
    return sequelize.define("Audiovisual",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true
        },
    })
}
