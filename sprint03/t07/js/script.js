// let getH2 = document.getElementById("hero");
// let getDiv = document.getElementById("lab");

// function transformation() {
//     let getStyleDiv = window.getComputedStyle(getDiv, null).getPropertyValue("background");
//     if (getStyleDiv == "rgb(255, 179, 0) none repeat scroll 0% 0% / auto padding-box border-box") {
//         getDiv.style.background = "#70964b";
//         getH2.innerHTML = "Hulk";
//         getH2.style.fontSize = "130px";
//         getH2.style.letterSpacing = "6px";
//     }
//     else if (getStyleDiv == "rgb(112, 150, 75) none repeat scroll 0% 0% / auto padding-box border-box") {
//         getDiv.style.background = "#ffb300";
//         getH2.innerHTML = "Bruce Banner";
//         getH2.style.fontSize = "60px";
//         getH2.style.letterSpacing = "2px";
//     }
// }

let getLi = document.getElementById("characters").children;
let myDiv;
let reg = /\s[\s]*/;
let getSplitedDataLi;
let myBr;

function createDiv(myDiv, getDataLi) {
    let divLine;
    myDiv = document.createElement("div");
    myDiv.setAttribute("class", "elem " + getDataLi);
    if (getDataLi == "none") {
        divLine = document.createElement("div");
        divLine.setAttribute("class", "line");
        myDiv.appendChild(divLine);
    }
    return myDiv;
}


for (let i = 0; i < getLi.length; i++ ) {
    let getClassLi = getLi[i].getAttribute("class");
    let getDataLi = getLi[i].getAttribute("data-element");
    if (!getClassLi || (getClassLi != "good" && getClassLi != "evil" 
        && getClassLi != "unknown"))
        getLi[i].className = "unknown";
    if (!getDataLi)
        getLi[i].setAttribute("data-element", "none");

    getDataLi = getLi[i].getAttribute("data-element");
    getSplitedDataLi = getDataLi.split(reg);
    myBr = document.createElement("br");
    getLi[i].appendChild(myBr);
    for (let j = 0; j < getSplitedDataLi.length; j++) {
        myDiv = createDiv(myDiv, getSplitedDataLi[j]);
        getLi[i].appendChild(myDiv);
    }

}
