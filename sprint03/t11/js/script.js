let getAddButton = document.getElementsByClassName("add");
let getClearButton = document.getElementsByClassName("clear");
let getText = document.getElementById("text-area");
let getOutArea = document.getElementById("text-out");

getOutArea.value = "[Empty]";
let getInfo = () => {
    getAddButton[0].addEventListener("click", setInfo);
}

let setInfo = () => {
    let resultStr = "";
    let arrovStr = "--> ";
    let coockieStr = "name=";
    if (!getText.value)
        alert("It's empty. Try to input something in \"Text input\".");
    else {
        if (getOutArea.value == "[Empty]")
            getOutArea.value = "";
        resultStr += arrovStr + getText.value + "\n";
        getOutArea.value += resultStr;
        coockieStr += getText.value + " ;" + "\n" + "max-age=10";
        document.cookie += coockieStr;
        coockieStr = "name=";
        resultStr = "";
        getText.value = "";
    }
    // console.log(document.cookie);
}

let resetInfo = () => {
    getClearButton[0].addEventListener("click", resetCookie);
}

let resetCookie = () => {
    document.cookie = "name=; max-age=0";
    // console.log(document.cookie);
    getOutArea.value = "[Empty]";
}
getInfo();
resetInfo();

