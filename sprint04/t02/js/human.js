"use strict"

import * as _template from "./templates.js";

export class Human {
  constructor(firstName, lastName, gender, calories) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.calories = calories;
    this.src = "assets/images/human.png";
  }
  renderProperties = function () {
    _template.createAddElem("div", "div-img", "", ".left-content");
    _template.createAddElem("div", "properties", "", ".left-content");
    _template.createAddElem("div", "status", "", ".left-content");
    _template.createAddElem("span", "current-status", "I'm Dying...", ".status");
    let humanImg = _template.createAddElem("img", "main-img", "", ".div-img");
    humanImg.attr("src", this.src);
    humanImg.attr("alt", "ERROR_IMG");
    _template.createAddElem("span", "proper", "First Name: ", ".properties");
    _template.createAddElem("span", "proper-value", this.firstName, ".properties");
    _template.createAddElem("br", "", "", ".properties");
    _template.createAddElem("span", "proper", "Last Name: ", ".properties");
    _template.createAddElem("span", "proper-value", this.lastName, ".properties");
    _template.createAddElem("br", "", "", ".properties");
    _template.createAddElem("span", "proper", "Gender: ", ".properties");
    _template.createAddElem("span", "proper-value", this.gender, ".properties");
    _template.createAddElem("br", "", "", ".properties");
    _template.createAddElem("span", "proper", "Calories: ", ".properties");
    _template.createAddElem("span", "proper-value", this.calories, ".properties");
    _template.createAddElem("br", "", "", ".properties");
  }
  sleepFor = function () {
    let getSecondsSleep = $(".sleep-value")[0].value;
    let sleepInterval;

    function sleep () {
      clearInterval(sleepInterval);
      $(".current-status")[0].innerText = "I`m awake and Dying...";
    }
    $(".current-status")[0].innerText = "I`m Sleeping...";
    sleepInterval = setInterval(sleep, +getSecondsSleep * 1000);
  }
  feedFor = function () {
    let calories;
    let feedInterval;
    function feed () {
      clearInterval(feedInterval);
      // $(".current-status")[0].innerText = "I`m Dying...";
      if (calories < 500)
        $(".current-status")[0].innerText = "I'm still hungry and I`m dying...";
      else {
        $(".current-status")[0].innerText = "I'm not hungry and I`m dying...";
      }
      $(".properties")[0].children[10].innerHTML = calories;
    }
    if (this.calories >= 500) {
      $(".current-status")[0].innerText = "I'm not hungry and I`m dying...";
    }
    else {
      $(".current-status")[0].innerText = "Oom nom nom...";
      this.calories += 200;
      calories = this.calories;
      feedInterval = setInterval(feed, 1000);
    }
  }
  looseCalories = () => {
    if (this.calories > 0) {
      this.calories -= 2;
      $(".properties")[0].children[10].innerHTML = this.calories;
    }
  }

}
