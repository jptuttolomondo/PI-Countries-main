const { Router } = require('express');
const countries = require('./countries');
//const activities = require('./activities');
const {addActivity,getAllActivities}= require('../controllers/ActivitiesControl')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.post('/activities', addActivity);
router.get('/',getAllActivities);
router.use('/countries', countries);
//router.use('/activities', activities);
module.exports = router;



