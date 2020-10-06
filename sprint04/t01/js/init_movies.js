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
  addToFavorites = function (favoriteMovies) {
    this.isFavorite = true;
    favoriteMovies.add(this);
  }
  removeFromFavorites = function (favoriteMovies) {
    this.isFavorite = false;
    favoriteMovies.delete(this);
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
    let shortDescDiv = document.createElement("div");
    let filmNameSpan = document.createElement("span");
    let filmDateSpan = document.createElement("span");
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
    else {
      heartI.setAttribute("class", "fas fa-heart");
      heartI.style.color = "red";
    }
    heartI.setAttribute("id", "check-favorite");
    shortDescDiv.setAttribute("class", "short-desc");
    filmNameSpan.setAttribute("class", "mid-film-name");
    filmDateSpan.setAttribute("class", "film-date");
    actorsDiv.setAttribute("class", "actors");
    firstActor.setAttribute("class", "actor");
    secondActor.setAttribute("class", "actor");
    thirdActor.setAttribute("class", "actor");
    fourthActor.setAttribute("class", "actor");
    descriptionDiv.setAttribute("class", "description");
    imgDiv.setAttribute("src", this.poster);
    filmNameSpan.innerText = this.title;
    filmDateSpan.innerText = this.date;
    firstActor.insertAdjacentHTML("afterbegin", this.actors[0].split(' ').join("<br>"));
    secondActor.insertAdjacentHTML("afterbegin", this.actors[1].split(' ').join("<br>"));
    thirdActor.insertAdjacentHTML("afterbegin", this.actors[2].split(' ').join("<br>"));
    fourthActor.insertAdjacentHTML("afterbegin", this.actors[3].split(' ').join("<br>"));
    descriptionSpan.innerText = this.info;
    getParentDiv.append(heartDiv);
    getParentDiv.append(shortDescDiv);
    getParentDiv.append(actorsDiv);
    getParentDiv.append(descriptionDiv);
    heartDiv.append(heartI);
    shortDescDiv.append(filmNameSpan);
    shortDescDiv.append(filmDateSpan);
    actorsDiv.append(firstActor);
    actorsDiv.append(secondActor);
    actorsDiv.append(thirdActor);
    actorsDiv.append(fourthActor);
    descriptionDiv.append(descriptionSpan);
    getParentDivImg.append(imgDiv);
  }

}
