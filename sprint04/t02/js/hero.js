"use strict"

import {Human} from "./human.js";

export class Hero extends Human {
    src = "assets/images/hero.png";
    fly = function () {
        let timer;

        function flying () {
            clearInterval(timer);
            $(".current-status")[0].innerText = "I`m Evil...";
        }
        $(".current-status")[0].innerText = "I`m Flying...";
        timer = setInterval(flying, 5000);
    }
}