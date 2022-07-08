let getPharmacies = require ('../utils/db-pharmacies.js');
let pharmacies = getPharmacies.getPharmacies();
/**
 * Get list of pharmacies from mock db
 *
 * returns pharmacies
 **/
exports.getListOfPharmacies = function () {
    return new Promise(function (resolve, reject) {
        resolve(JSON.stringify(pharmacies));
    }).catch(e => {
        console.error(e);
    });
};

exports.getAvailability = function (idPharmacy, idDrug, quantity) {
    return new Promise(function (resolve, reject) {
        console.log(pharmacies)
        let quantityAvailable = (pharmacies[idPharmacy].drugs[idDrug].quantity)
        console.log(quantityAvailable)
        if( quantityAvailable >= quantity)
            resolve({ "res": true } )
        else
            resolve({ "res": false });
    }).catch(e => {
        resolve(e);
    });
}

exports.reserveDrugs = function (idPharmacy, idDrug, quantity) {
    return new Promise(function (resolve, reject) {
        let quantityAvailable = (pharmacies[idPharmacy].drugs[idDrug].quantity);
        if( quantityAvailable >= quantity){
            let cost = pharmacies[idPharmacy].drugs[idDrug].price * quantity;
            pharmacies[idPharmacy].drugs[idDrug].quantity -= quantity;
            resolve({ "res": "Drugs reserved correctly!", "price": cost });
        } else
            resolve({ "res": "Drugs not reserved.." });
    }).catch(e => {
        resolve(e);
    });
}

exports.orderDrugs = function (idPharmacy, idDrug, quantity) {
    return new Promise(function (resolve, reject) {
        let quantityAvailable = (pharmacies[idPharmacy].drugs[idDrug].quantity);
        if( quantityAvailable >= quantity){
            let cost = pharmacies[idPharmacy].drugs[idDrug].price * quantity;
            pharmacies[idPharmacy].drugs[idDrug].dayForRestock = Math.floor(Math.random() * 4 + 1 );
            resolve({ "res": "Drugs reserved correctly!", "price": cost });
        } else
            resolve({ "res": "Drugs not reserved.." });
    }).catch(e => {
        resolve(e);
    });
}

exports.getTimeAvailability = function (idPharmacy, idDrug, available) {
    return new Promise(function (resolve, reject) {
        let openingHours = pharmacies[idPharmacy].openingHours;
        if( available === false ){
            let daysForRestock = pharmacies[idPharmacy].drugs[idDrug].dayForRestock;
            resolve({ "openingHours": openingHours, "daysForRestock": daysForRestock });
        } else
            resolve({ "openingHours": openingHours });
    }).catch(e => {
        resolve(e);
    });
}




