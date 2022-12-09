const input = document.querySelector("#input");
const city = document.querySelector("#city");
const cityName = document.querySelector("#cityName");
const Temp = document.querySelector("#temp");
const main = document.querySelector("#main");
//const des = document.querySelector("#des");
const image = document.querySelector("#image");

//console.log(input);
input.onsubmit = (e) => {
    e.preventDefault();
    weatherUpdate(city.value);
    city.value = "";
  };

weatherUpdate = (city) => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec619f75971088d7f409304fd2ef65e2`,true);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 404 && xhr.readyState === 4) { 
        alert("Place not found");
      } else {
        var data = JSON.parse(xhr.response);
        console.log(data);
        cityName.innerHTML = data.name; 
        Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
        main.innerHTML = data.weather[0].main;
        //des.innerHTML = data.weather[0].description;
        image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      }
    };
  };
  //weatherUpdate(kanpur);
  