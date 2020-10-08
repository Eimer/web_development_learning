"use strict"

let doDragnDrop = (event) => {
  let getMoveBlock = event.target;

  if (event.target.getAttribute("class")) {

    let shiftX = event.clientX - getMoveBlock.getBoundingClientRect().left;
    let shiftY = event.clientY - getMoveBlock.getBoundingClientRect().top;

    getMoveBlock.style.position = "absolute";
    getMoveBlock.style.zIndex = "10";
    getMoveBlock.style.border = "1px solid black";
    $("body").append(getMoveBlock);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
      getMoveBlock.style.left = pageX - shiftX + 'px';
      getMoveBlock.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);

    getMoveBlock.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      getMoveBlock.style.border = "none";
      getMoveBlock.onmouseup = null;
    };
  }
}

$("body")[0].addEventListener("mousedown", doDragnDrop);