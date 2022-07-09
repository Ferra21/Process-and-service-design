'use strict';

var utils = require('../utils/writer.js');
var pharmacy = require('../services/PharmacyService');

module.exports.getAvailability = function getAvailability(req, res) {
    // console.log("req.body: " + JSON.stringify(req.body));
    if (req.body && req.body.pharmacyId >= 0 && req.body.drugCode !== null && req.body.quantity >= 0) {
        console.log("-> req.body: " + JSON.stringify(req.body))
        pharmacy.getAvailability(req.body.pharmacyId, req.body.drugCode, req.body.quantity)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (response) {
                utils.writeJson(res, response);
            });
    }
    else {
        utils.writeJson(res, 'Invalid request');
    }

};

module.exports.getListOfPharmacies = function getListOfPharmacies(req, res) {
    pharmacy.getListOfPharmacies()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
}

module.exports.reserveDrugs = function reserveDrugs(req, res) {
    if (req.body && req.body.pharmacyId >= 0 && req.body.drugCode !== null && req.body.quantity >= 0)
        pharmacy.reserveDrugs(req.body.pharmacyId, req.body.drugCode, req.body.quantity)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (response) {
                utils.writeJson(res, response);
            });
    else
        utils.writeJson(res, 'Invalid request');
};

module.exports.orderDrugs = function orderDrugs(req, res) {
    if (req.body && req.body.pharmacyId >= 0 && req.body.drugCode !== null && req.body.quantity >= 0)
        pharmacy.orderDrugs(req.body.pharmacyId, req.body.drugCode, req.body.quantity)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (response) {
                utils.writeJson(res, response);
            });
    else
        utils.writeJson(res, 'Invalid request');
};

module.exports.getTimeAvailability = function getTimeAvailability(req, res) {
    if (req.body && req.body.pharmacyId >= 0 && req.body.drugCode !== null)
        pharmacy.getTimeAvailability(req.body.pharmacyId, req.body.drugCode, req.body.availability)
            .then(function (response) {
                utils.writeJson(res, response);
            })
            .catch(function (response) {
                utils.writeJson(res, response);
            });
    else
        utils.writeJson(res, 'Invalid request');
};