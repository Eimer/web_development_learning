//Prototype class of mark (single grid)
class Mark {
  constructor(elem) {
    this.value = "";
    this.elem = elem;
  }
  render(value) {
    this.value = value;
    this.elem.innerHTML = this.value;
  }
  clear() {
    this.value = "";
    this.elem.innerHTML = this.value;
  }
}
//Object of service (count turns, restart option and other)
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
    restart: function() {
        let btn = document.getElementsByClassName("restart-btn");
        btn[0].addEventListener('click', function () {
            service.clear();
            service.render();
        });
    }
}

service.changeTurn();
service.render();
service.restart();

function createMarksArr() {
  let arrayOfMarks = [];
  let arrayOfgrids = document.getElementsByClassName("one-grid");

  for (let i = 0; i < 9; i++)
    arrayOfMarks[i] = new Mark(arrayOfgrids[i].children[0], "");
    console.log(arrayOfMarks);
}

createMarksArr();


// let test = document.getElementsByClassName("grids");
// test[0].addEventListener("click", showTest);
// console.log(test[0]);

// function showTest (event) {
//   console.log(event.target.children[0]);
// }