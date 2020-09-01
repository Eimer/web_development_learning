let getH2 = document.getElementById("hero");
let getDiv = document.getElementById("lab");

function transformation() {
    let getStyleDiv = window.getComputedStyle(getDiv, null).getPropertyValue("background");
    if (getStyleDiv == "rgb(255, 179, 0) none repeat scroll 0% 0% / auto padding-box border-box") {
        getDiv.style.background = "#70964b";
        getH2.innerHTML = "Hulk";
        getH2.style.fontSize = "130px";
        getH2.style.letterSpacing = "6px";
    }
    else if (getStyleDiv == "rgb(112, 150, 75) none repeat scroll 0% 0% / auto padding-box border-box") {
        getDiv.style.background = "#ffb300";
        getH2.innerHTML = "Bruce Banner";
        getH2.style.fontSize = "60px";
        getH2.style.letterSpacing = "2px";
    }
}
