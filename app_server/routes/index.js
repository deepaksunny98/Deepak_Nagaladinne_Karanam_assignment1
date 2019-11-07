var express = require('express');
var router = express.Router();

var homeController = require('../controllers/home');
var aboutController = require('../controllers/about');
var deviceListController = require('../controllers/device');

/* GET home page. */
router.get('/', homeController.home);
router.get('/about', aboutController.about);
router.get('/list', deviceListController.device);

module.exports = router;
