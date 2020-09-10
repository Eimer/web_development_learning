let getRight = document.getElementsByClassName("right");
let getLeft = document.getElementsByClassName("left");
let getFirstImg = document.getElementsByClassName("first-img");
let getSecondImg = document.getElementsByClassName("second-img");
let visible = false;

function slide () {
    function change () {
        if (visible) {
            getFirstImg[0].style.opacity = 0.001;
            autoslide(getSecondImg);
            visible = false;
        }
        else if (!visible){
            getSecondImg[0].style.opacity = 0.001;
            autoslide(getFirstImg);
            visible = true;
        }
    }
    getLeft[0].addEventListener("click", change);
    getRight[0].addEventListener("click", change);
}

function autoTimer () {
    let getStart = Date.now();
    let timer = setInterval(function() {
        let getPassed = Date.now() - getStart;
        
        if (getPassed > 2000) {
            if (visible) {
                getFirstImg[0].style.opacity = 0.001;
                autoslide(getSecondImg);
                visible = false;
            }
            else if (!visible){
                getSecondImg[0].style.opacity = 0.001;
                autoslide(getFirstImg);
                visible = true;
            }
            clearInterval(timer);
            return;
        }
    }, 20);
    slide();
    setTimeout(autoTimer, 3000);
}

function autoslide(elem) {
    let getStart = Date.now();
    let timer = setInterval(function() {
        let getPassed = Date.now() - getStart;
        
        if (getPassed >= 2000) {
            clearInterval(timer);
            return;
        }
        draw(getPassed ,elem);
    }, 20);
}

function draw(getPassed, elem) {
    if (getPassed * 0.002 <= 1) {
        elem[0].style.opacity = getPassed * 0.002;
    }
        
}
autoTimer();
