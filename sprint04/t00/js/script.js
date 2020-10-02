const magician = {
  _hat: './assets/images/hat.png',
  _getPortrait(){
    if (this._portrait) return this._portrait;
    else return 'assets/images/magician.png';
  },
  'do magic' () {
    console.log(`ABRACADABRA
        The prototype of ${this.name} is `);
    console.log(Object.getPrototypeOf(this));
  }
};

let obj;

function Creature (name, age, species) {
  this.name = name;
  this.age = age;
  this.species = species;
  this['say hello'] = function  () {
    console.log(`Hello, my name is ${this.name}`);
  }
}

function Human (name, age, species, job) {
  Creature.call(this, name, age, species);
  this._portrait = "assets/images/human.png";
  this.job = job;
}

function Dog (name, age, species, color) {
  Creature.call(this, name, age, species);
  this._portrait = "assets/images/dog.png";
  this.color = color;
}

function Vampire (name, age, species, job, title) {
  Human.call(this, name, age, species, job);
  this._portrait = "assets/images/vampire.png";
  this.title = title;
}

function renderDoingBtns () {
  let doMagicBtn = document.createElement("button");
  let sayHelloBtn = document.createElement("button");
  let getParrentDiv = document.querySelector("#properties");

  getParrentDiv.innerHTML = "";
  doMagicBtn.setAttribute("id", "magic");
  sayHelloBtn.setAttribute("id", "hello");
  doMagicBtn.innerText = "DO MAGIC";
  sayHelloBtn.innerText = "SAY HELLO"
  getParrentDiv.appendChild(doMagicBtn);
  getParrentDiv.appendChild(sayHelloBtn);
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
  renderDoingBtns ();
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

function changeStatus (button) {
  changeBtnStyle(button);
  switch (button.innerHTML) {
    case "human prototype":
      document.getElementById("hello").style.visibility = "visible";
      obj = new Human("Linda", 22, "human", "doctor");
      Object.setPrototypeOf(magician, obj);
      renderProper(obj);
      break;
    case "vampire prototype":
      document.getElementById("hello").style.visibility = "visible";
      obj = new Vampire("Vlad", 915, "vampire", "unemployed", "count");
      Object.setPrototypeOf(magician, obj);
      renderProper(obj);
      break;
    case "dog prototype":
      document.getElementById("hello").style.visibility = "visible";
      obj = new Dog("Fluffy", 3, "dog", "brown");
      Object.setPrototypeOf(magician, obj);
      renderProper(obj);
      break;
    default:
      renderDoingBtns ();
      document.getElementById("hello").style.visibility = "hidden";
      Object.setPrototypeOf(magician, Object.prototype);
  }
  document.getElementById("head").setAttribute("src", magician._getPortrait());
  doFunc(obj);

}

renderDoingBtns();
document.getElementById("magic").addEventListener("click", doMagic);
document.getElementById("hello").style.visibility = "hidden";
