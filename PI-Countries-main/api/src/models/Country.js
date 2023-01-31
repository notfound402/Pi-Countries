const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id : {
      type : DataTypes.STRING,
      primaryKey : true,
      allowNull: false,
      defaultValue : DataTypes.UUIDV4,
      validate : {
        is : /[A-Z]{0,3}/
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique : true,
    },
    imagen : {
      type : DataTypes.STRING,
      allowNull : false,
      
    },
    continent : {
      type : DataTypes.STRING,
      allowNull : false,

    },
    capital : {
      type : DataTypes.STRING,
      allowNull : false,
    },
    subregion : {
      type : DataTypes.STRING,
    },
    area : {
      type : DataTypes.INTEGER,
    },
    population : {
      type : DataTypes.INTEGER
    },
  },{timestamps : false,});
};
