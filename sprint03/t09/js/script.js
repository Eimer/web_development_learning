let Mark = {
  value: "",
  elem: undefined,
  render: function(elem, value) {
    this.value = value;
    elem.innerHTML = this.value;
  }
}
let service = {
    turnsCount: 0,
    isPlayerOne: true,
    isPlayerTwo: false,
    getPlyerOne: function() {
        let playerOne = document.getElementById("player-one");
        return playerOne;
    },
    getPlyerTwo: function() {
        let playerTwo = document.getElementById("player-two");
        return playerTwo;
    },
    getTurns: function () {
        let Turns = document.getElementsByClassName("count-turns");
        return Turns[0];
    },
    changeTurn: function () {
        this.isPlayerOne ? this.isPlayerOne = false : this.isPlayerOne = true;
        this.isPlayerTwo ? this.isPlayerTwo = false : this.isPlayerTwo = true;
        this.turnsCount++;
    },
    clear: function () {
        this.isPlayerOne = true;
        this.isPlayerTwo = false;
        this.turnsCount = 0;
    },
    render: function() {
        let playerOne = this.getPlyerOne();
        let playerTwo = this.getPlyerTwo();
        let turns = this.getTurns();

        if (this.isPlayerOne) {
            playerOne.style.background = "rgb(0, 160, 0)";
            playerTwo.style.background = "grey";
        }
        else {
            playerOne.style.background = "grey";
            playerTwo.style.background = "rgb(0, 160, 0)";
        }
        turns.innerHTML = this.turnsCount;
    },
    restart: function(grids) {
        let btn = document.getElementsByClassName("restart-btn");

        btn[0].addEventListener('click', function () {

          let grids = document.getElementsByClassName("grids");
            for (let i = 0; i < 9; i ++) {
              grids[0].children[i].children[0].innerHTML = "";
              grids[0].children[i].children[0].style.color = "rgb(50, 50, 50)";
            }
            service.endOfgame("");
            service.clear();
            service.render();
        });
    },
    endOfgame: function (value) {
      let playerOne = this.getPlyerOne();
      let playerTwo = this.getPlyerTwo();
      let getElem = document.getElementsByClassName("winner");

      getElem[0].innerHTML = value;
      getElem[0].style.color = "rgb(0, 160, 0)";
      playerOne.style.background = "rgb(0, 160, 0)";
      playerTwo.style.background = "rgb(0, 160, 0)";
    },
    coloring: function (elem, pos1, pos2, pos3) {
      elem[pos1].children[0].style.color = "rgb(0, 160, 0)";
      elem[pos2].children[0].style.color = "rgb(0, 160, 0)";
      elem[pos3].children[0].style.color = "rgb(0, 160, 0)";
    }
}

function game() {
  let grids = document.getElementsByClassName("grids");
  let getWinner = document.getElementsByClassName("winner");
  function setMark (event) {
    if (event.target != grids[0] && event.target.innerHTML == "" 
      && getWinner[0].innerHTML == "") {
      if (service.isPlayerOne) {
        Mark.render(event.target, "X");
        service.changeTurn();
      }
      else if (service.isPlayerTwo) {
        Mark.render(event.target, "O");
        service.changeTurn();
      }
      service.render();
      let gridValue = document.getElementsByClassName("one-grid");
        for (let i = 0; i < 9; i++) {
          if (i < 7 && i % 3 == 0 && gridValue[i].children[0].innerHTML == "X"
            && gridValue[i + 1].children[0].innerHTML == "X"
            && gridValue[i + 2].children[0].innerHTML == "X") {
              service.endOfgame("Player 1 won!");
              service.coloring(gridValue, i, i + 1, i + 2);
            }
          else if (i < 7 && i % 3 == 0 && gridValue[i].children[0].innerHTML == "O"
            && gridValue[i + 1].children[0].innerHTML == "O"
            && gridValue[i + 2].children[0].innerHTML == "O") {
              service.endOfgame("Player 2 won!");
              service.coloring(gridValue, i, i + 1, i + 2);
            }
          else if (i < 3 && gridValue[i].children[0].innerHTML == "X"
            && gridValue[i + 3].children[0].innerHTML == "X"
            && gridValue[i + 6].children[0].innerHTML == "X") {
              service.endOfgame("Player 1 won!");
              service.coloring(gridValue, i, i + 3, i + 6);
            }
          else if (i < 3 && gridValue[i].children[0].innerHTML == "O"
            && gridValue[i + 3].children[0].innerHTML == "O"
            && gridValue[i + 6].children[0].innerHTML == "O") {
              service.endOfgame("Player 2 won!");
              service.coloring(gridValue, i, i + 3, i + 6);
            }
          else if (i == 0 && gridValue[i].children[0].innerHTML == "X"
            && gridValue[i + 4].children[0].innerHTML == "X"
            && gridValue[i + 8].children[0].innerHTML == "X") {
              service.endOfgame("Player 1 won!");
              service.coloring(gridValue, i, i + 4, i + 8);
            }
          else if (i == 0 && gridValue[i].children[0].innerHTML == "O"
            && gridValue[i + 4].children[0].innerHTML == "O"
            && gridValue[i + 8].children[0].innerHTML == "O") {
              service.endOfgame("Player 2 won!");
              service.coloring(gridValue, i, i + 4, i + 8);
            }
          else if (i == 2 && gridValue[i].children[0].innerHTML == "X"
            && gridValue[i + 2].children[0].innerHTML == "X"
            && gridValue[i + 4].children[0].innerHTML == "X") {
              service.endOfgame("Player 1 won!");
              service.coloring(gridValue, i, i + 2, i + 4);
            }
          else if (i == 2 && gridValue[i].children[0].innerHTML == "O"
            && gridValue[i + 2].children[0].innerHTML == "O"
            && gridValue[i + 4].children[0].innerHTML == "O") {
              service.endOfgame("Player 2 won!");
              service.coloring(gridValue, i, i + 2, i + 4);
            }
          else if (service.turnsCount == 9)
              service.endOfgame("It`s a draw!");
        }
    }
    service.restart();
  }
  grids[0].addEventListener("click", setMark);
}
game();
