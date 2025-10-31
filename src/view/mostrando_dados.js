export function aplicarDados(html, dados) {
  console.log(html);
  html.name.textContent = dados.name;

  html.weather.main.textContent = `${dados.weather[0].main} • `;
  html.weather.description.textContent = dados.weather[0].description;

  html.main.temp.textContent = Math.round(dados.main.temp);
  html.main.feels_like.innerHTML = `
  <p>Sensação térmica ${Math.round(dados.main.feels_like)}°C</p>
    <p class="temp-minmax">
      <span>Min ${Math.round(dados.main.temp_min)}°C</span>
      <span>Max ${Math.round(dados.main.temp_max)}°C</span>
  </p>
  `;

  html.wind.speed.textContent = `${dados.wind.speed} m/s`;
  html.wind.deg.textContent = `${dados.wind.deg}°`;

  html.sys.sunrise.textContent = formatarHoraUnix(dados.sys.sunrise);
  html.sys.sunset.textContent = formatarHoraUnix(dados.sys.sunset);

  html.clouds.all.textContent = `${dados.clouds.all}%`;

  html.main.humidity.textContent = `${dados.main.humidity}%`;

  html.visibility.textContent = `${(dados.visibility / 1000).toFixed(2)} km`;

  html.main.pressure.textContent = `${dados.main.pressure} hPa`;

  html.rain.lh.textContent = `${
    dados.rain?.["1h"] || dados.snow?.["1h"] || 0
  } mm`;
}

function formatarHoraUnix(segundosUnix) {
  const data = new Date(segundosUnix * 1000);
  const horas = data.getHours();
  const minutos = data.getMinutes();

  return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(
    2,
    "0"
  )}`;
}
