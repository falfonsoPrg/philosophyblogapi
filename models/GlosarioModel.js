const { DataTypes } = require('sequelize');

module.exports = (sequelize)  => {
    return sequelize.define("Glosario",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        word: {
            type: DataTypes.STRING,
            allowNull: true
        },
        definition:{
            type: DataTypes.TEXT,
            allowNull: true
        }
    })
}
