"use strict";

let pharmacies = [
    {
        id: 0,
        name: 'Farmacia argonne',
        address: 'Via Lomellina, 64, 20133 Milano MI',
        openingHours: '08:00 - 20:00',
        drugs:
            [
                {
                    id: 0,
                    name: 'Tachipirina',
                    quantity: 20,
                    dayForRestock: 1,
                    price: 4.50
                },
                {
                    id: 1,
                    name: 'Oki',
                    quantity: 15,
                    dayForRestock: 1,
                    price: 4.50
                },
                {
                    id: 2,
                    name: 'Xanax',
                    quantity: 4,
                    dayForRestock: 3,
                    price: 4.50
                },
                {
                    id: 3,
                    name: 'Augmentin',
                    quantity: 9,
                    dayForRestock: 2,
                    price: 4.50
                },
                {
                    id: 4,
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
                name: 'Tachipirina',
                quantity: 4,
                dayForRestock: 1,
                price: 4.50
            },
            {
                id: 1,
                name: 'Oki',
                quantity: 0,
                dayForRestock: 1,
                price: 4.50
            },
            {
                id: 2,
                name: 'Xanax',
                quantity: 9,
                dayForRestock: 3,
                price: 4.50
            },
            {
                id: 3,
                name: 'Augmentin',
                quantity: 0,
                dayForRestock: 2,
                price: 4.50
            },
            {
                id: 4,
                name: 'Aspirina',
                quantity: 0,
                dayForRestock: 2,
                price: 4.50
            },
        ]
    },
    {
        id: 2,
        name: 'Farmacia argonne',
        address: 'Via Lomellina, 64, 20133 Milano MI',
        openingHours: '08:00 - 20:00',
        drugs: [
            {
                id: 0,
                name: 'Tachipirina',
                quantity: 20,
                dayForRestock: 1,
                price: 4.50
            },
            {
                id: 1,
                name: 'Oki',
                quantity: 15,
                dayForRestock: 1,
                price: 4.50
            },
            {
                id: 2,
                name: 'Xanax',
                quantity: 4,
                dayForRestock: 3,
                price: 4.50
            },
            {
                id: 3,
                name: 'Augmentin',
                quantity: 9,
                dayForRestock: 2,
                price: 4.50
            },
            {
                id: 4,
                name: 'Aspirina',
                quantity: 34,
                dayForRestock: 2,
                price: 4.50
            },
        ]
    },
    {
        id: 3,
        name: 'Farmacia argonne',
        address: 'Via Lomellina, 64, 20133 Milano MI',
        openingHours: '08:00 - 20:00',
        drugs: [
            {
                id: 0,
                name: 'Tachipirina',
                quantity: 20,
                dayForRestock: 1,
                price: 4.50
            },
            {
                id: 1,
                name: 'Oki',
                quantity: 15,
                dayForRestock: 1,
                price: 4.50
            },
            {
                id: 2,
                name: 'Xanax',
                quantity: 4,
                dayForRestock: 3,
                price: 4.50
            },
            {
                id: 3,
                name: 'Augmentin',
                quantity: 9,
                dayForRestock: 2,
                price: 4.50
            },
            {
                id: 4,
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

module.exports.getPharmacies = getPharmacies;