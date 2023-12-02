const express=  require('express')
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const {isLoggedIn} = require('../middleware/checkAuth')

router.get('/api/v1/dashboard', isLoggedIn, dashboardController.dashboard);
router.get('/api/v1/dashboard/item/:id', isLoggedIn, dashboardController.dashboardViewNote);
router.put('/api/v1/dashboard/item/:id', isLoggedIn, dashboardController.dashboardUpdateNote);
router.delete('/api/v1/dashboard/item-delete/:id', isLoggedIn, dashboardController.dashboardDeleteNote);

router.post('/api/v1/dashboard/add', isLoggedIn, dashboardController.dashboardAddNote);
router.get('/api/v1/dashboard/search/:searchTerm', isLoggedIn, dashboardController.dashboardSearch);
module.exports = router