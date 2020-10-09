"use strict"

import * as _template from "./templates.js";

export const magician = {
  _hat: './assets/images/hat.png',
  _getPortrait(){
    if (this._portrait) return this._portrait;
    else return 'assets/images/magician.png';
  },
  'do magic' () {
    console.log(`ABRACADABRA
        The prototype of ${this.name} is `);
    console.log(Object.getPrototypeOf(this));
  },
};

export let doHowl = {
  howl () {
    console.log("ARH-WOOOOOOOOOOOOOOOOOOOO");
  }
}

export class Creature {
  constructor(name, age, species) {
    this.name = name;
    this.age = age;
    this.species = species;
  }
  sayHello () {
    console.log(`Hello, my name is ${this.name}`);
  }
}

export class Human extends Creature {
  constructor(name, age, species, job) {
    super(name, age, species);
    this.job = job;
    this._portrait = "assets/images/human.png";
  }
  transform () {

  }
}

export class Dog extends Creature {
  constructor(name, age, species, color) {
    super(name, age, species);
    this.color = color;
    this._portrait = "assets/images/dog.png";
  }
}

export class Vampire extends Human {
  constructor(name, age, species, title) {
    super(name, age, species);
    this.title = title;
    this._portrait = "assets/images/vampire.png";
  }
}

export class Werewolf extends Human {
  constructor(name, age, species, job) {
    super(name, age, species, job);
    this._portrait = "assets/images/werewolf.png";
  }
}
