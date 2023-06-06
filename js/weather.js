// 와이파이 gps모두 이 함수를 사용함

const API_KEY = "52c4a6d4ab26db514040c42fd9453130";

function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", let, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather= document.querySelector("weather span:first-child")
        const city = document.querySelector("weather span:last-child")
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/${data.main,temp}`
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
