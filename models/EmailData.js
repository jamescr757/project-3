module.exports = function(sequelize, DataTypes) {

    const EmailData = sequelize.define("EmailData", {
      
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },

        category: {
            type: DataTypes.STRING,
            allowNull: false
        },

        identifier: {
            type: DataTypes.STRING,
            allowNull: false
        },

        frequency: {
            type: DataTypes.STRING,
            allowNull: false
        },

        completedTable: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },

        futureTable: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },

        

    }, {
        freezeTableName: true,
        timestamps: false
    });
    
    return EmailData;
};