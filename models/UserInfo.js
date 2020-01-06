module.exports = function(sequelize, DataTypes) {

    const UserInfo = sequelize.define("UserInfo", {
      
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        },

    }, {
        freezeTableName: true,
        timestamps: false
    });
    
    return UserInfo;
};