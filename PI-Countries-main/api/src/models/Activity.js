const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define('activity',{
        id : {
            type : DataTypes.UUID,
            defaultValue : DataTypes.UUIDV4,
            primaryKey : true,
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : false,
        },
        difficulty : {
            type : DataTypes.INTEGER,
            validate : {
                min : 1,
                max : 5,
            },
            allowNull : false,
        },
        duration : {
            type : DataTypes.INTEGER,
            allowNull : false,
            get(){
                return this.getDataValue('duration') + 'hrs,'
            }
        },
        season : {
                type : DataTypes.ENUM('Winter','Summer','Autumn','Spring'),
                allowNull : false,
        }
    },{timestamps:false,})
}