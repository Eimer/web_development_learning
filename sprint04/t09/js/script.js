"use strict"

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=London&appid=72c6e724cb39d0a2ca45084e58023b16", function (forecast) {
  document.getElementsByTagName('h1')[0].innerText = forecast.name + " weather";
  $("#weatherImg")[0].setAttribute("src", "https://openweathermap.org/img/wn/" + forecast.weather[0].icon + ".png");
  let getDate = new Date(forecast.dt * 1000);
  let getDay = getDate.getDate() + "";
  let getMonth = getDate.getMonth() + "";
    getDay.length < 2 ? getDay = "0" + getDay : getDay;
    getMonth.length < 2 ? getMonth = "0" + getMonth : getMonth;
    $(".dateValue")[0].innerText = getDay + "." + getMonth;
  console.log(forecast);
  let getTemp = Math.round((forecast.main.temp - 273.15));
  if (getTemp > 0)
    $(".tempValue")[0].innerHTML = "+" + getTemp + '&deg;';
  else
    $(".tempValue")[0].innerHTML = getTemp + '&deg;';
});

