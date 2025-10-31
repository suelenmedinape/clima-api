import { addChuva } from "./src/clima/definir_chuva.js";
import { temasPorClima } from "./src/config/clima_codes_backgrond.js";
import { obterClima } from "./src/service/apiService.js";
import { aplicarDados } from "./src/view/mostrando_dados.js";
import { selectors } from "./src/view/seletores.js";

const html = selectors();
const dadosApi = await obterClima();

aplicarDados(html, dadosApi);
console.log(dadosApi);

const rain = dadosApi.rain?.["1h"] || dadosApi.snow?.["1h"];
addChuva(rain, dadosApi.weather[0].main);

const main = dadosApi.weather[0].main;
const tema = temasPorClima[main];

if (tema) {
  const root = document.documentElement;
  root.style.setProperty("--background", tema.background);
  root.style.setProperty("--card", tema.card);
  root.style.setProperty("--foreground", tema.fontCor);
}

/*
{
  coord: {
    lon: -46.6333,
    lat: -23.5505,
  },
  weather: [
    {
      id: 202,
      main: "Thunderstorm",
      description: "thunderstorm with heavy rain",
      icon: "11d",
    },
  ],
  base: "stations",
  main: {
    temp: 296.15,
    feels_like: 297.42,
    temp_min: 295.15,
    temp_max: 297.15,
    pressure: 1002,
    humidity: 90,
    sea_level: 1002,
    grnd_level: 987,
  },
  visibility: 2000,
  wind: {
    speed: 10.8,
    deg: 240,
    gust: 18.5,
  },
  rain: {
    "1h": 15.4,
    "3h": 40.7,
  },
  clouds: {
    all: 100,
  },
  dt: 1726660758,
  sys: {
    type: 1,
    id: 8391,
    country: "BR",
    sunrise: 1726636384,
    sunset: 1726680975,
  },
  timezone: -10800,
  id: 3448439,
  name: "São Paulo",
  cod: 200,
};
*/
