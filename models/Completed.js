module.exports = function(sequelize, DataTypes) {

    const Completed = sequelize.define("Completed", {
        
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        scoreline: {
            type: DataTypes.STRING,
            allowNull: false
        },

        winner: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        loser: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        overtime: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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

        awayTeamScore: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
        homeTeamScore: {
            type: DataTypes.INTEGER,
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

    return Completed;
  };