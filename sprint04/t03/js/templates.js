"use strict"

export function createAddElem (elemName, elemClass, elemText, parent) {
  if (elemName) {
    let elem
    if (!parent) {
      elem = $('<' + elemName + '>', {
        class: elemClass,
        text: elemText,
      })
    } else {
      $(parent).innerHTML = "";
      elem = $('<' + elemName + '>', {
        class: elemClass,
        text: elemText,
      })
      $(parent).append(elem);
    }
    return elem;
  }
}

