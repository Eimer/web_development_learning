"use strict"

import * as _template from "./templates.js";

const menuMap = new Map();
const saladsMap = new Map();
const mainDishesMap = new Map();
const desertsMap = new Map();
const drinksMap = new Map();

saladsMap.set("Greek salad", 5.99);
saladsMap.set("Caesar salad", 7.99);
mainDishesMap.set("Margharita Pizza", 12.50);
mainDishesMap.set("Tomato Soup", 6.99);
mainDishesMap.set("Burger", 10.00);
desertsMap.set("Cheesecake", 4.99);
desertsMap.set("Chocolate Ice-Cream", 2.50);
desertsMap.set("Fruit Salad", 3.99);
drinksMap.set("Lemonade", 3.20);
drinksMap.set("Green Tea", 1.50);
drinksMap.set("Coffee", 1.99);
menuMap.set(saladsMap).set(mainDishesMap).set(desertsMap).set(drinksMap);

console.log(menuMap);