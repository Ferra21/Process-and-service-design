'use strict';

var utils = require('../utils/writer.js');
var digitalPharma = require('../services/DigitalPharmaService');

module.exports.getListOfPharmacies = function getListOfPharmacies(req, res) {
    digitalPharma.getListOfPharmacies()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};