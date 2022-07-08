'use strict';

var utils = require('../utils/writer.js');
var pharmacy = require('../services/PharmacyService');

module.exports.getAvailability = function getAvailability (req, res) {
    if(req.body && req.body.pharmacyId >= 0 && req.body.drugId >= 0 && req.body.quantity >= 0)
        pharmacy.getAvailability(req.body.pharmacyId, req.body.drugId, req.body.quantity)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (response) {
                utils.writeJson(res, response);
            });
    else
        utils.writeJson(res, 'Invalid request');
};

module.exports.getListOfPharmacies = function getListOfPharmacies (req, res) {
    pharmacy.getListOfPharmacies()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
}

module.exports.reserveDrugs = function reserveDrugs (req, res) {
    if(req.body && req.body.pharmacyId >= 0 && req.body.drugId >= 0 && req.body.quantity >= 0)
        pharmacy.reserveDrugs(req.body.pharmacyId, req.body.drugId, req.body.quantity)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (response) {
                utils.writeJson(res, response);
            });
    else
        utils.writeJson(res, 'Invalid request');
};

module.exports.orderDrugs = function orderDrugs (req, res) {
    if(req.body && req.body.pharmacyId >= 0 && req.body.drugId >= 0 && req.body.quantity >= 0)
        pharmacy.orderDrugs(req.body.pharmacyId, req.body.drugId, req.body.quantity)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (response) {
                utils.writeJson(res, response);
            });
    else
        utils.writeJson(res, 'Invalid request');
};

module.exports.getTimeAvailability = function getTimeAvailability (req, res) {
    if(req.body && req.body.pharmacyId >= 0 && req.body.drugId >= 0 )
        pharmacy.getTimeAvailability(req.body.pharmacyId, req.body.drugId, req.body.available)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (response) {
                utils.writeJson(res, response);
            });
    else
        utils.writeJson(res, 'Invalid request');
};