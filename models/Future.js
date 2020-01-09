module.exports = function(sequelize, DataTypes) {

    const Future = sequelize.define("Future", {
      
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },

        scoreline: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        awayTeam: {
            type: DataTypes.STRING,
            allowNull: false
        },

        awayTeamRecord: {
            type: DataTypes.STRING,
            allowNull: false
        },

        homeTeam: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        homeTeamRecord: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        awayTeamDivision: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        homeTeamDivision: {
            type: DataTypes.STRING,
            allowNull: false
        },

        awayTeamConference: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        homeTeamConference: {
            type: DataTypes.STRING,
            allowNull: false
        },

        ticketLink: {
            type: DataTypes.STRING
        },

        gameId: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },

    }, {
        // don't add s to table name
        freezeTableName: true,
        timestamps: false
    });
    
    return Future;
};