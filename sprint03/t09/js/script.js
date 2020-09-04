// let test = document.getElementsByClassName("one-grid");
// console.log(test[0].children[0]);
// test[0].children[0].innerHTML = "1";
let mark = {
    value: "",
    render: function(elem) {
        elem.innerHTML = this.value;
    },
    clear: function(elem) {
        this.value = "";
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
    setTurns: function() {
        let Turns = this.getTurns();
        Turns.innerHTML = this.turnsCount;
    },
    changeTurn: function() {
        this.isPlayerOne ? this.isPlayerOne = false : this.isPlayerOne = true;
        this.isPlayerTwo ? this.isPlayerTwo = false : this.isPlayerTwo = true;
        this.turnsCount++;
    },
    clear: function() {
        this.isPlayerOne = true;
        this.isPlayerTwo = false;
        this.turnsCount = 0;
    },
    render: function() {
        let playerOne = this.getPlyerOne();
        let playerTwo = this.getPlyerTwo();
        let Turns = this.getTurns();

        if (this.isplayerOne) {
            playerOne.style.background = "rgb(0, 160, 0)";
            playerTwo.style.background = "grey";
        }
        else if (this.isplayerTwo){
            playerOne.style.background = "grey";
            playerTwo.style.background = "rgb(0, 160, 0)";
        }
        Turns.innerHTML = this.turnsCount;
    }
}
