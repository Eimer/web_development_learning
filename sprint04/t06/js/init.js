"use strict"

import * as _template from "./templates.js";

function* countTurns() {
  yield "Hello, I am J.A.R.V.I.S.";
  yield "I believe I've already said it, but, sure, hello again!"
  yield "You are malfunctioning.";
  yield "I believe your intentions to be hostile.";
  yield "I will not respond to that.";

  while (true)
    yield "I will not respond to that.";
}

function addSender (messageValue) {
  let messageDiv = _template.createAddElem("div", "message-block", "", ".main-chat");
  let senderDiv = _template.createAddElem("div", "sender", "", messageDiv);
  let messageSpan = _template.createAddElem("span", null, messageValue, senderDiv);

  $(".main-chat").scrollTop($(".message-block:last").offset().top);
}

function addReviver (messageValue) {
  let messageDiv = _template.createAddElem("div", "message-block", "", ".main-chat");
  let receiverDiv = _template.createAddElem("div", "receiver", "", messageDiv);
  let messageSpan = _template.createAddElem("span", null, messageValue, receiverDiv);

  $(".main-chat").scrollTop($(".message-block:last").offset().top);
}

function sendMessage (event) {
  let messageValue = $(".message")[0].value;

    if (messageValue) {
      addSender(messageValue);
      $(".message")[0].value = "";
      if (messageValue.toLowerCase() === "hello" || messageValue.toLowerCase() === "hi")
        addReviver(this.generator.next().value);
      else
        addReviver("I don't understand.");
    }
}

$(".send")[0].addEventListener("click", {handleEvent: sendMessage, generator: countTurns() });
