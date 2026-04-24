let modo = "AUTO";

function setMode(m) {
  modo = m;
  document.getElementById("modo").innerText = modo;
}

// valores falsos até ligar ao ESP32
function updateFakeData() {
  const fakeTemp = (20 + Math.random() * 10).toFixed(1);
  const fakeAgua = Math.floor(5 + Math.random() * 20);

  document.getElementById("temp").innerText = fakeTemp + " °C";
  document.getElementById("agua").innerText = fakeAgua + " cm";
}

setInterval(updateFakeData, 1000);
