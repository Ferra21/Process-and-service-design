"use strict";

let pharmacies = [
    {
        id: 0,
        name: 'Farmacia Argonne',
        address: 'Via Lomellina, 64, 20133 Milano MI',
        openingHours: '08:00 - 20:00',
        drugs:
            [
                {
                    id: 0,
                    code: "EM862KN",
                    name: 'Tachipirina',
                    quantity: 20,
                    dayForRestock: 1,
                    price: 4.50
                },
                {
                    id: 1,
                    code: "GH254HR",
                    name: 'Oki',
                    quantity: 15,
                    dayForRestock: 1,
                    price: 4.50
                },
                {
                    id: 2,
                    code: "FC001PS",
                    name: 'Xanax',
                    quantity: 4,
                    dayForRestock: 3,
                    price: 4.50
                },
                {
                    id: 3,
                    code: "CS935JD",
                    name: 'Augmentin',
                    quantity: 9,
                    dayForRestock: 2,
                    price: 4.50
                },
                {
                    id: 4,
                    code: "DP820HA",
                    name: 'Aspirina',
                    quantity: 34,
                    dayForRestock: 2,
                    price: 4.50
                },
            ]
    },
    {
        id: 1,
        name: 'Farmacia Cordusio',
        address: 'Via Santa Maria Segreta, 6, 20123 Milano MI',
        openingHours: '08:30 - 19:30',
        drugs: [
            {
                id: 0,
                code: "EM862KN",
                name: 'Tachipirina',
                quantity: 4,
                dayForRestock: 1,
                price: 4.50
            },
            {
                id: 1,
                code: "GH254HR",
                name: 'Oki',
                quantity: 0,
                dayForRestock: 1,
                price: 4.50
            },
            {
                id: 2,
                code: "FC001PS",
                name: 'Xanax',
                quantity: 9,
                dayForRestock: 3,
                price: 4.50
            },
            {
                id: 3,
                code: "CS935JD",
                name: 'Augmentin',
                quantity: 0,
                dayForRestock: 2,
                price: 4.50
            },
            {
                id: 4,
                code: "DP820HA",
                name: 'Aspirina',
                quantity: 0,
                dayForRestock: 2,
                price: 4.50
            },
        ]
    },
    {
        id: 2,
        name: 'Farmacia Duomo',
        address: 'Via Orefici, 2, 20123 Milano MI',
        openingHours: '08:00 - 20:00',
        drugs: [
            {
                id: 0,
                code: "EM862KN",
                name: 'Tachipirina',
                quantity: 20,
                dayForRestock: 1,
                price: 4.50
            },
            {
                id: 1,
                code: "GH254HR",
                name: 'Oki',
                quantity: 15,
                dayForRestock: 1,
                price: 4.50
            },
            {
                id: 2,
                code: "FC001PS",
                name: 'Xanax',
                quantity: 4,
                dayForRestock: 3,
                price: 4.50
            },
            {
                id: 3,
                code: "CS935JD",
                name: 'Augmentin',
                quantity: 9,
                dayForRestock: 2,
                price: 4.50
            },
            {
                id: 4,
                code: "DP820HA",
                name: 'Aspirina',
                quantity: 34,
                dayForRestock: 2,
                price: 4.50
            },
        ]
    },
    {
        id: 3,
        name: 'Farmacia Rondò',
        address: 'Piazza Martiri di Via Fani, 7, 20099 Sesto San Giovanni MI',
        openingHours: '08:00 - 20:00',
        drugs: [
            {
                id: 0,
                code: "EM862KN",
                name: 'Tachipirina',
                quantity: 20,
                dayForRestock: 1,
                price: 4.50
            },
            {
                id: 1,
                code: "GH254HR",
                name: 'Oki',
                quantity: 15,
                dayForRestock: 1,
                price: 4.50
            },
            {
                id: 2,
                code: "FC001PS",
                name: 'Xanax',
                quantity: 4,
                dayForRestock: 3,
                price: 4.50
            },
            {
                id: 3,
                code: "CS935JD",
                name: 'Augmentin',
                quantity: 9,
                dayForRestock: 2,
                price: 4.50
            },
            {
                id: 4,
                code: "DP820HA",
                name: 'Aspirina',
                quantity: 34,
                dayForRestock: 2,
                price: 4.50
            },
        ]
    },
    {
        id: 4,
        name: 'Farmacia Cadorna',
        address: 'Piazzale Luigi Cadorna, 11, 20123 Milano MI',
        openingHours: '08:00 - 20:00',
        drugs: [
            {
                id: 0,
                code: "EM862KN",
                name: 'Tachipirina',
                quantity: 20,
                dayForRestock: 1,
                price: 4.50
            },
            {
                id: 1,
                code: "GH254HR",
                name: 'Oki',
                quantity: 15,
                dayForRestock: 1,
                price: 4.50
            },
            {
                id: 2,
                code: "FC001PS",
                name: 'Xanax',
                quantity: 4,
                dayForRestock: 3,
                price: 4.50
            },
            {
                id: 3,
                code: "CS935JD",
                name: 'Augmentin',
                quantity: 9,
                dayForRestock: 2,
                price: 4.50
            },
            {
                id: 4,
                code: "DP820HA",
                name: 'Aspirina',
                quantity: 34,
                dayForRestock: 2,
                price: 4.50
            },
        ]
    },
];

function getPharmacies() {
    return pharmacies;
}

function getDrugID(pharmacyID, drugCode) {
    let id
    pharmacies.forEach((pharmacy, pharmacyIndex) => {
        if (pharmacy.id === pharmacyID) {
            pharmacy.drugs.forEach((drug, drugIndex) => {
                if (drug.code === drugCode) {
                    id = drug.id;
                }
            })
        }
    })
    return id;
}

function getDrugQuantity(pharmacyID, drugCode) {
    let drugQt = 0
    pharmacies.forEach((pharmacy, pharmacyIndex) => {
        if (pharmacy.id === pharmacyID) {
            pharmacy.drugs.forEach((drug, drugIndex) => {
                if (drug.code === drugCode) {
                    drugQt = drug.quantity;
                }
            })
        }
    })
    return drugQt;
}

module.exports.getPharmacies = getPharmacies;
module.exports.getDrugID = getDrugID;
module.exports.getDrugQuantity = getDrugQuantity;