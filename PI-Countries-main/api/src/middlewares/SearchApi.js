const axios = require("axios");
require("dotenv").config; 
const { Country } = require("../db"); 
const { api_URL } = process.env;  

let gate = true; 

module.exports = async (req, res, next) => {
  if (gate) {
    const api = await axios.get(`${api_URL}all`); 
    const cleanApi = api.data.map((x) => {
      return {
        id: x.cca3,
        name: x.name.common,
        imagen: x.flags.png,
        continent: x.continents[0],
        capital: x.capital ? x.capital[0] : "No capital",
        subregion: x.subregion,
        area: x.area,
        population: x.population,
      };
    });
    await Country.bulkCreate(cleanApi); 
    gate = false; 
  }
  next(); 
};

