"use strict"

import * as _template from "./templates.js";
import {Creature, Human, magician, Dog, Vampire, doHowl, Werewolf} from "./classes.js";

let obj;

function renderDoingBtns () {
  let doMagicBtn = document.createElement("button");
  let sayHelloBtn = document.createElement("button");
  let doTranformBtn = document.createElement("button");
  let doHowlBtn = document.createElement("button");
  let getParrentDiv = document.querySelector("#properties");

  getParrentDiv.innerHTML = "";
  doMagicBtn.setAttribute("id", "magic");
  sayHelloBtn.setAttribute("id", "hello");
  doTranformBtn.setAttribute("id", "transform");
  doHowlBtn.setAttribute("id", "howl");
  doMagicBtn.innerText = "DO MAGIC";
  sayHelloBtn.innerText = "SAY HELLO"
  doTranformBtn.innerText = "TRANSFORM";
  doHowlBtn.innerText = "HOWL";
  getParrentDiv.appendChild(doMagicBtn);
  getParrentDiv.appendChild(sayHelloBtn);
  getParrentDiv.appendChild(doTranformBtn);
  getParrentDiv.appendChild(doHowlBtn);
}

function changeBtnStyle (currentClick) {
  let activeBtn = document.querySelector(".active");
  if (currentClick != activeBtn) {
    currentClick.setAttribute("class", "protoBtn active");
    activeBtn.className = "protoBtn";
  }
}

function doHello (event) {
  obj['say hello']();
}

function doMagic (event) {
  magician["do magic"]();
}

function doFunc (obj) {
  document.getElementById("magic").removeEventListener("click", doMagic);
  document.getElementById("magic").addEventListener("click", doMagic);
  document.getElementById("hello").addEventListener("click", doHello);
}

function createProperty (key, value, parent) {
  let createSpanKey = document.createElement("span");
  let createSpanValue = document.createElement("span");
  let createBr = document.createElement("br");

  createSpanValue.setAttribute("class", "propValue");
  createSpanKey.innerText = key;
  createSpanValue.innerHTML = value;
  parent.append(createSpanKey);
  parent.append(createSpanValue);
  parent.append(createBr);
}

function renderProper (obj) {
  let parent = document.getElementById("properties");
  if (obj.name)
    createProperty("\nname: ", obj.name, parent);
  if(obj.age)
    createProperty("age: ", obj.age, parent);
  if (obj.species)
    createProperty("species: ", obj.species, parent);
  if (obj.job)
    createProperty("job: ", obj.job, parent);
  if (obj.title) {
    createProperty("title: ", obj.title, parent);
  }
  if (obj.color)
    createProperty("color: ", obj.color, parent);
}

window.changeStatus = (button) => {
  changeBtnStyle(button);
  switch (button.innerHTML) {
    case "human prototype":
      renderDoingBtns();
      document.getElementById("hello").style.visibility = "visible";
      document.getElementById("howl").style.visibility = "hidden";
      obj = new Human("Linda", 22, "human", "doctor");
      Object.setPrototypeOf(magician, obj);
      renderProper(obj);
      document.getElementById("transform").addEventListener("click", changePerson);
      break;
    case "vampire prototype":
      renderDoingBtns ();
      document.getElementById("transform").style.visibility = "hidden";
      document.getElementById("howl").style.visibility = "hidden";
      document.getElementById("hello").style.visibility = "visible";
      obj = new Vampire("Vlad", 915, "vampire", "unemployed", "count");
      Object.setPrototypeOf(magician, obj);
      renderProper(obj);
      break;
    case "dog prototype":
      renderDoingBtns ();
      document.getElementById("transform").style.visibility = "hidden";
      document.getElementById("howl").style.visibility = "hidden";
      document.getElementById("hello").style.visibility = "visible";
      obj = new Dog("Fluffy", 3, "dog", "brown");
      Object.setPrototypeOf(magician, obj);
      renderProper(obj);
      break;
    case "werewolf prototype":
      renderDoingBtns ();
      document.getElementById("hello").style.visibility = "visible";
      document.getElementById("transform").style.visibility = "visible";
      document.getElementById("howl").style.visibility = "hidden";
      obj = new Human("Linda", 22, "human", "doctor");
      Object.setPrototypeOf(magician, obj);
      renderProper(obj);
      document.getElementById("transform").addEventListener("click", changePerson);
      break;
    default:
      renderDoingBtns();
      document.getElementById("hello").style.visibility = "hidden";
      document.getElementById("transform").style.visibility = "hidden";
      document.getElementById("howl").style.visibility = "hidden";
      Object.setPrototypeOf(magician, Object.prototype);
  }
  document.getElementById("head").setAttribute("src", magician._getPortrait());
  doFunc(obj);
}

function changePerson (event) {
  console.log("test");
  if (magician._getPortrait() == "assets/images/human.png") {
    renderDoingBtns ();
    document.getElementById("hello").style.visibility = "visible";
    document.getElementById("transform").style.visibility = "visible";
    document.getElementById("howl").style.visibility = "visible";
    obj = new Werewolf("Linda", 22, "werewolf", "doctor");
    Object.setPrototypeOf(magician, obj);
    renderProper(obj);
    document.getElementById("head").setAttribute("src", magician._getPortrait());
  }
}

renderDoingBtns();
document.getElementById("magic").addEventListener("click", doMagic);
document.getElementById("hello").style.visibility = "hidden";
document.getElementById("transform").style.visibility = "hidden";
document.getElementById("howl").style.visibility = "hidden";