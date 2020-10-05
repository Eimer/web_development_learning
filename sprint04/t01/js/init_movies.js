"use strict"

export class Movie {
  constructor(title, poster, date, info, actors) {
    this.title = title;
    this.poster = poster;
    this.date = date;
    this.info = info;
    this.actors = actors;
    this.isFavorite = false;
  }
  addToFavorites = function (allMovies) {

  }
  removeFromFavorites = function (getSet) {

  }
  renderMovie = function () {
    let getParentDiv = document.getElementsByClassName("left-content")[0];
    let filmNodeDiv = document.createElement("div");
    let filmMarkSpan = document.createElement("span");
    let filmNameSpan = document.createElement("span");

    filmNodeDiv.setAttribute("class", "film-node");
    filmMarkSpan.setAttribute("class", "mark");
    filmNameSpan.setAttribute("class", "film-name");
    filmNameSpan.innerText = this.title;
    filmNodeDiv.append(filmMarkSpan);
    filmNodeDiv.append(filmNameSpan);
    getParentDiv.append(filmNodeDiv);
  }
  renderContentMovie = function () {
    let getParentDiv = document.getElementsByClassName("mid-content")[0];
    let getParentDivImg = document.getElementsByClassName("right-content")[0];
    let heartDiv = document.createElement("div");
    let heartI =  document.createElement("i");
    let sortDescDiv = document.createElement("div");
    let actorsDiv = document.createElement("div");
    let firstActor = document.createElement("div");
    let secondActor = document.createElement("div");
    let thirdActor = document.createElement("div");
    let fourthActor = document.createElement("div");
    let descriptionDiv = document.createElement("div");
    let descriptionSpan = document.createElement("span");
    let imgDiv = document.createElement("img");

    heartDiv.setAttribute("class", "heart");
    if (!this.isFavorite)
      heartI.setAttribute("class", "far fa-heart");
    else
      heartI.setAttribute("class", "fas fa-heart");
    console.log(heartI);
  }

}
