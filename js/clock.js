const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const houers = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${houers}:${minutes}:${seconds}`;
}

getClock()
setInterval(getClock, 1000)