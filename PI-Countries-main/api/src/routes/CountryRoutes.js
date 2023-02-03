const {Router} = require('express')
const SearchApi = require('../middlewares/SearchApi')
const {Country , Activity} = require('../db')
const {Op} = require('sequelize')

const router = Router();


router.get("/", SearchApi, async (req, res) => {
    try {
      const name = req.query.name; // hago la busqueda por query

      if (name) {
        const nameCountries = await Country.findAll({
          include: [
            {
              model: Activity,
              through: {
                attributes: [], // Me incluye la tabla actividad , y que dentro de esto me traiga los atributos
              },
            },
          ],
          where: {
            //le digo que donde se encuentre el nombre me lo pueda tomar tanto en mayusculas como en minusculas con el operador Op.iLike
            name: {
              [Op.iLike]: `%${name}%`,
            },
          },
        });
        if (!nameCountries.length) {
          //manejo el error si pone un nombre de un pais que no existe
          res.status(404).send(`No hay match disponible ningun pais con el nombre ${name}`);
        }
        res.status(200).send(nameCountries);
      }else{
        const allCountries = await Country.findAll({
          include: [
            //hago un includ de las activities que creo la persona asi las muestro en las busquedas que haga
            {
              model: Activity, //le especifico la tabla que quiero que me incluya
              through: {
                attributes: [], //y le digo donde quiero que me los guarde
              },
            },
          ],
        });
        res.status(200).send(allCountries);
      }
    } catch (error) {
      res.status(404).send(error.message);
    }
    
  });
  

  router.get("/:id", async (req, res) => {
    const { id } = req.params; 

    try {
      const idCountries = await Country.findByPk(id,{
        include: [//le digo que me incluya tambnien las activities en esta busqueda
          {
            model: Activity,
            through: {
              attributes: [],
            },
          },
        ],
      });
      if (!idCountries) {
        throw new Error("This ID is not available"); // manejo el error si puso un id que no es correcto
      }
      res.status(200).send(idCountries);
    } catch (error) {
      res.status(404).send(error.message);
    }
  });
  module.exports = router;
  