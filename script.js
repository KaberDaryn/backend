async function getWeather() {
  const city = document.getElementById("cityInput").value;

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  const response = await fetch(`/weather?city=${city}`);
  const data = await response.json();

  document.getElementById("result").textContent =
    JSON.stringify(data, null, 2);
}
