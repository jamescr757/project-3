module.exports = function(sequelize, DataTypes) {

    const Standings = sequelize.define("Standings", {
        
        team: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        record: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "10-0-0"
        },

        division: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        conference: {
            type: DataTypes.STRING,
            allowNull: false
        },

        gamesPlayed: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        
        wins: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        
        losses: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        
        ot: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        
        points: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        }

    }, {
        // don't add s to table name
        freezeTableName: true,
        timestamps: false
    });

    return Standings;
  };