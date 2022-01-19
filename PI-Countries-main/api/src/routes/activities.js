const { addActivity } = require('../controllers/ActivitiesControl');
const { Router } = require('express');

const router = Router();


router.post('/', addActivity)





module.exports = router;

