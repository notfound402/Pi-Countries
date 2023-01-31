const { Router } = require("express");
const SearchApi = require("../middlewares/SearchApi");
const { Activity, Country } = require("../db");

const router = Router();

router.get('/', async(req,res)=>{
	try{
		const activities = await Activity.findAll({
			include :[
				{
					model : Country,
					attributes :['name'],
					through : {attributes :[]},
				}
			]
		})
		res.status(200).send(activities);
	}catch(error){
		res.status(400).send(error.message)
	}
});




router.post("/",SearchApi, async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  try {
	let requestCountries = await Country.findAll({
        where: {
          name: countries
        },
	});
	if (!requestCountries.length) {
		res.status(400).send(`No se encuentra el/los paises`);
		return;
	}

	let activity = await Activity.findOne({
		where: {
		  name: name,
		  difficulty: difficulty,
		  duration: duration,
		  season: season
		},
		include: Country,
	});
    if (activity) {
	  requestCountries = requestCountries.filter(country => !(activity.countries.map(reqCountry => reqCountry.name).includes(country.name)))
	  if (!requestCountries.length) {
		res.status(400).send(`Ya se encuentra creada esta actividad para estos paises`);
        return;
	  }
    } else {
		activity = await Activity.create({
			name: name,
			difficulty: difficulty,
			duration: duration,
			season: season
		})
	}   
	await activity.addCountries(requestCountries);
    res.status(200).send("Actividad creada con exito");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
