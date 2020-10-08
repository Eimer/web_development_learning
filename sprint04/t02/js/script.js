"use strict"

import * as _template from "./templates.js";
import {Hero} from "./hero.js";
import {Human} from "./human.js";


let human = new Human("Isaac", "Runner", "Male", 100);
let hero = new Hero("Dead","Lost","Male",100);



function transformClick () {
  let checkCurrentPerson = true;
  $("#transform")[0].addEventListener("click", transform);
  function transform (event) {
    $(".left-content")[0].innerHTML = "";
    if (!checkCurrentPerson) {
      $("#first-skill").val("Sleep");
      $("#second-skill").val("Feed");
      $("#second-skill").css({'font-size' : '2em'});
      human.renderProperties();
      checkCurrentPerson = true;
      $(".to-hide").css({'display' : 'block'});
      $(".sleep-value").css({'display' : 'block'});

    }
    else {
      $("#first-skill").val("Fly");
      $("#second-skill").val("Fight with EVIL");
      $("#second-skill").css({'font-size' : '0.8em'});
      $(".to-hide").css({'display' : 'none'});
      $(".sleep-value").css({'display' : 'none'});
      hero.renderProperties();
      checkCurrentPerson = false;
    }
  }
}

human.renderProperties();
transformClick();

let firstInterval
function firstLose () {
  $(".current-status")[0].innerText = "I'm hungry and I`m dying...";
  clearInterval(firstInterval);
}

firstInterval = setInterval(firstLose, 5000);
setInterval(human.looseCalories, 1000);

$("#first-skill")[0].addEventListener("click", function () {
  if (this.value == "Sleep")
    human.sleepFor();
  else
    hero.fly();

})

$("#second-skill")[0].addEventListener("click", function () {
  if (this.value == "Feed")
    human.feedFor();
  else {
    $(".current-status")[0].innerText = " Evil is defeated!";
  }
})
