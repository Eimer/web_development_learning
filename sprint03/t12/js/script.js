let getAddButton = document.getElementsByClassName("add");
let getClearButton = document.getElementsByClassName("clear");
let getText = document.getElementById("text-area");
let getOutArea = document.getElementById("text-out");
let countKeys = 0;

getOutArea.value = "[Empty]";
let getInfo = () => {
    getAddButton[0].addEventListener("click", setInfo);
}

let setInfo = () => {
    let resultStr = "";
    let arrovStr = "--> ";

    if (!getText.value)
        alert("It's empty. Try to input something in \"Text input\".");
    else {
        if (getOutArea.value == "[Empty]")
            getOutArea.value = "";
        resultStr += arrovStr + getText.value + "\n";
        getOutArea.value += resultStr;
        localStorage.setItem("name" + countKeys, getText.value);
        countKeys++;
        resultStr = "";
        getText.value = "";
    }
    // console.log(localStorage);
}

let resetInfo = () => {
    getClearButton[0].addEventListener("click", resetCookie);
}

let resetCookie = () => {
    let conf = confirm("Are you sure?");
    if (conf) {
        localStorage.clear();
        // console.log(localStorage);
        getOutArea.value = "[Empty]";
    }
}
getInfo();
resetInfo();

