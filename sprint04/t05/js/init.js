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
menuMap.set("salads", saladsMap).set("dishes", mainDishesMap).set("deserts", desertsMap).set("drinks", drinksMap);

menuMap.forEach(function (value, key) {
  let nodeDiv = _template.createAddElem("div", "node", "", ".menu");
  let categoryDiv = _template.createAddElem("span", "category", key, nodeDiv);
  _template.createAddElem("br", undefined, "", nodeDiv);
  _template.createAddElem("div", "line", "", nodeDiv);
  value.forEach(function (value, key) {
    // console.log(key);
    _template.createAddElem("span", "name", key, nodeDiv);
    _template.createAddElem("span", "price", '$' + value, nodeDiv);
    _template.createAddElem("br", undefined, "", nodeDiv);
  })
})