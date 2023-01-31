const { Router } = require('express');
const ActivitiesRoutes = require('./ActivitiesRotes.js')
const CountryRoutes = require('./CountryRoutes')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries',CountryRoutes);
router.use('/activities', ActivitiesRoutes);

module.exports = router;
