"use strict"

function createAddElem (elemName, elemClass, elemText, parent) {
  if (elemName) {
    let elem
    if (!parent) {
      elem = $('<' + elemName + '>', {
        class: elemClass,
        text: elemText,
      })
    } else {
      $(parent).innerHTML = "";
      elem = $('<' + elemName + '>', {
        class: elemClass,
        text: elemText,
      })
      $(parent).append(elem);
    }
    return elem;
  }
}

google.charts.load('current', {'packages':['bar']});

let url = "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/101479288428234/search/";
let urlForRandom = "https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/101479288428234/";
let getSearchBtn = document.getElementById("search");
let getRandomBtn = document.getElementById("random");
let getCompareBtn = document.getElementById("compare");
let getInputEntry = document.getElementById("inputSearch");
let heroesBlock = document.getElementById("heroesBlock");
let propertiesBlock = document.getElementById("propertiesBlock");

class Hero {
  constructor(name, fullName, intelligence, power, speed) {
    this.name = name;
    this.fullName = fullName;
    this.intelligence = intelligence;
    this.power = power;
    this.speed = speed;
  }
}

let ifRandom = false;
let heroArr = [];
let compareHeroArr = [];
function getRandom (min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomID () {
  return getRandom(1, 731);
}

function renderHero (hero) {
  let singleHeroDiv = createAddElem("div", "singleHero", "", heroesBlock);
  createAddElem("span","heroValue",  hero.name, singleHeroDiv);
  createAddElem("br",undefined,"", singleHeroDiv);
  createAddElem("span","heroValue", hero.fullName, singleHeroDiv);
}

getRandomBtn.addEventListener("click", function () {
    ifRandom = true;
    let getRandomHero = Math.round(getRandomID()) + "";
    searchHero(urlForRandom, getRandomHero, ifRandom);
    ifRandom = false;
})

getSearchBtn.addEventListener("click", function () {
  let getInputName = getInputEntry.value;
  if (getInputName) {
    heroesBlock.innerHTML = "";
    searchHero(url, getInputName, ifRandom);
  }
})

function addToCompare (event) {
  let removedElem;
  if (event.target.getAttribute("class") === "singleHero") {
    removedElem = event.target;
  }
  else if (event.target.getAttribute("class") === "heroValue") {
    removedElem = event.target.parentElement;
  }
  for (let i = 0; heroesBlock.childNodes[i]; i++) {
    if (removedElem === heroesBlock.childNodes[i]) {
      heroArr.map(function (item) {
        if (item.fullName === removedElem.children[2].innerHTML)
          compareHeroArr.push(item);
      });
    }
  }
  if (removedElem)
    removedElem.remove();
  getCompareBtn.value = "COMPARE" + compareHeroArr.length;
}

function compare () {
  if (compareHeroArr.length > 0 && compareHeroArr.length < 20) {
    propertiesBlock.innerHTML = "";

    let displayStatsDiv = createAddElem("div", "displayStats", "", propertiesBlock);
    let displayStatsSpan = createAddElem("span", undefined, "Compare stats", displayStatsDiv);
    let displayStatsIntDiv = createAddElem("div", "property", "", propertiesBlock);
    let displayStatsIntSpan = createAddElem("span", undefined, "intelligence", displayStatsIntDiv);
    let displayStatsPowDiv = createAddElem("div", "property", "", propertiesBlock);
    let displayStatsPowSpan = createAddElem("span", undefined, "Power", displayStatsPowDiv);
    let displayStatsSpeedDiv = createAddElem("div", "property", "", propertiesBlock);
    let displayStatsSpeedSpan = createAddElem("span", undefined, "Speed", displayStatsSpeedDiv);

    google.charts.setOnLoadCallback(drawChart);
  }
  else {
    alert("Heroes to compare must be between 0 and 20");
  }
}

heroesBlock.addEventListener("click", addToCompare);
getCompareBtn.addEventListener("click", compare);

function searchHero (url, getInputName, ifRandom) {
  heroArr = [];
  $.getJSON(url + getInputName, function (superheroes) {
    let getRes;
    if (superheroes.response === "success") {
      if (!ifRandom) {
        getRes = superheroes.results;
        getRes.map(function (item) {
        heroArr.push(new Hero(item.name, item.biography["full-name"], item.powerstats.intelligence, item.powerstats.power, item.powerstats.speed));
      })
      }
      else {
        heroArr.push(new Hero(superheroes.name, superheroes.biography["full-name"], superheroes.powerstats.intelligence, superheroes.powerstats.power, superheroes.powerstats.speed));
      }
      heroArr.map(function (item) {
        renderHero(item);
      });
    }
    else {
      alert("character with given name not found");
    }
   })
}

function drawChart() {
  let graphArr = [];
  let subArr = [];
  let headersArr = ['Heroes', 'Intelligence', 'Power', 'Speed'];

  graphArr.push(headersArr);
  compareHeroArr.map(function (item) {
    subArr = [];
    subArr.push(item.name);
    subArr.push(+item.intelligence);
    subArr.push(+item.power);
    subArr.push(+item.speed);
    graphArr.push(subArr);
  })

  var data = google.visualization.arrayToDataTable(
    graphArr);
  var options = {
    chart: {
      title: 'Compare heroes',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('graphicBlock'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
