const axios = require("axios");
require("dotenv").config; // con esto configuro el archivo .env que  cree es solo configurar
const { Country } = require("../db"); //recordar taer siemopre de la base de datos las planillas y no de los models
const { api_URL } = process.env; // de esta manera me traigo las cosas del archivo .env que  cree

let gate = true; // seteo la puerta en true para que me entre el condicional mas abajo

module.exports = async (req, res, next) => {
  if (gate) {
    const api = await axios.get(`${api_URL}all`); //llamado a la api
    const cleanApi = api.data.map((x) => {
      // mapeo la api para dejarla limpia con las cosas que quiero
      return {
        id: x.cca3,
        name: x.name.common,
        imagen: x.flags.svg,
        continent: x.continents[0],
        capital: x.capital ? x.capital[0] : "No capital",
        subregion: x.subregion,
        area: x.area,
        population: x.population,
      };
    });
    await Country.bulkCreate(cleanApi); //el bulkCreate me crea lo que acabo de mapear de la api
    // When you need to insert multiple rows to your SQL database table, you can use the Sequelize bulkCreate() method. The bulkCreate() method allows you to insert multiple records to your database table with a single function call.
    gate = false; // seteo ahora la puerta en false paraque no me este corriendo constante mente la busqueda a la api
  }
  next(); //le digo que vaya a la siguiente funcion
};

// este middleware lo usamos para poder hacer solamente un llamado a la api y asi guardarnos todo en la BD y no estar buscando siemprte en la api hace que sea mas fluida la busqueda
