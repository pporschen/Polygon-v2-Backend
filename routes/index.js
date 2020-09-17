var express = require('express');
var router = express.Router();
const Feature = require('../database/models/featureModel');
const Centroid = require('../database/models/centroidModel');


/* GET home page. */
router.get('/', function(req, res, next) {

  void async function () {
    try {
        const search = await Centroid.find({ "properties.plz": "48599" });

        if (search.length) return res.json({ search });
        console.log(search)


    } catch (err) {
        return res.send({ status: 'error', errors: err });
    }
    }()
});


module.exports = router;
