let pharmaciesDB = require('../utils/db-pharmacies.js');
let pharmacies = pharmaciesDB.getPharmacies();
/**
 * Get list of pharmacies from mock db
 * returns pharmacies
 **/
exports.getListOfPharmacies = function () {
    return new Promise(function (resolve, reject) {
        resolve(JSON.stringify(pharmacies));
    }).catch(e => {
        console.error(e);
    });
};