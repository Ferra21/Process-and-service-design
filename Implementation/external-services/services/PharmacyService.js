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

exports.getAvailability = function (pharmacyID, drugCode, quantity) {
    return new Promise(function (resolve, reject) {
        let availableQuantity = pharmaciesDB.getDrugQuantity(pharmacyID, drugCode)
        if (availableQuantity >= quantity)
            resolve({ res: true })
        else
            resolve({ res: false });
    }).catch(e => {
        resolve(e);
    });
}

exports.reserveDrugs = function (pharmacyID, drugCode, quantity) {
    return new Promise(function (resolve, reject) {
        let drugID = pharmaciesDB.getDrugID(pharmacyID, drugCode)
        let availableQuantity = pharmaciesDB.getDrugQuantity(pharmacyID, drugCode)
        if (availableQuantity >= quantity) {
            let totPrice = pharmacies[pharmacyID].drugs[drugID].price * quantity;
            pharmacies[pharmacyID].drugs[drugID].quantity = availableQuantity - quantity;
            resolve({
                "res": "Drugs reserved correctly!",
                "drugName": pharmacies[pharmacyID].drugs[drugID].name,
                //"pharmacyName" : pharmacies[pharmacyID].name,
                //"pharmacyAddress" : pharmacies[pharmacyID].address,
                "price": totPrice
            });
        } else
            resolve({ "res": "Drugs not reserved.." });
    }).catch(e => {
        resolve(e);
    });
}

exports.orderDrugs = function (pharmacyID, drugCode, quantity) {
    return new Promise(function (resolve, reject) {
        let drugID = pharmaciesDB.getDrugID(pharmacyID, drugCode)
        let availableQuantity = pharmaciesDB.getDrugQuantity(pharmacyID, drugCode)
        
        console.log("-> Order medicine: " + drugCode + " Quantity: " + quantity + " Pharmacy: " + pharmacyID)
        console.log("-> Available quantity: " + availableQuantity)

        if (availableQuantity < quantity) {
            let totPrice = pharmacies[pharmacyID].drugs[drugID].price * quantity;
            // Generate a random number for the waiting days for restock
            pharmacies[pharmacyID].drugs[drugID].dayForRestock = Math.floor(Math.random() * 4 + 1);
            
            resolve({ 
                "res": "Drugs ordered correctly!",
                "drugName": pharmacies[pharmacyID].drugs[drugID].name,
                "price": totPrice
            });
        } else
            resolve({ "res": "Drugs not ordered.." });
    }).catch(e => {
        resolve(e);
    });
}

exports.getTimeAvailability = function (pharmacyID, drugCode, available) {
    return new Promise(function (resolve, reject) {
        let drugID = pharmaciesDB.getDrugID(pharmacyID, drugCode)
        let openingHours = pharmacies[pharmacyID].openingHours;
        if (available === false) {
            let daysForRestock = pharmacies[pharmacyID].drugs[drugID].dayForRestock;
            resolve({
                "pharmacyName" : pharmacies[pharmacyID].name,
                "pharmacyAddress" : pharmacies[pharmacyID].address,
                "openingHours": openingHours,
                "daysForRestock": daysForRestock
            });
        } else
            resolve({
                "pharmacyName" : pharmacies[pharmacyID].name,
                "pharmacyAddress" : pharmacies[pharmacyID].address,
                "openingHours": openingHours
            });
    }).catch(e => {
        resolve(e);
    });
}




