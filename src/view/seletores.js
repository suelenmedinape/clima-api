export function selectors() {
  const line = document.querySelector(".city-subtitle");
  const tempMinMax = document.querySelector(".temp-minmax");

  const name = document.querySelector(".city-title");
  const main = line.firstChild;
  const description = line.querySelector("span");

  const temp = document.querySelector(".temperature-main").firstChild;
  const feels_like = document.querySelector(".temperature-details");
  const temp_min = tempMinMax.children[0];
  const temp_max = tempMinMax.children[1];

  const sunrise = document
    .querySelector(".card-small .sunrise")
    .parentElement.querySelector(".card-value");
  const sunset = document
    .querySelector(".card-small .sunset")
    .parentElement.querySelector(".card-value");

  const windSpeed = document.querySelector(".wind-speed");
  const windDeg = document.querySelector(".wind-deg");

  const pressure = document.querySelector(".card-pressure .card-value-large");

  const clouds = document.querySelectorAll(
    ".grid-bottom .card-value-medium"
  )[0];
  const humidity = document.querySelectorAll(
    ".grid-bottom .card-value-medium"
  )[1];

  const rain = document.querySelectorAll(".grid-bottom .card-value-medium")[2];
  const visibility = document.querySelector(".card-visibilidade");

  return {
    weather: {
      main,
      description,
    },
    main: {
      temp,
      feels_like,
      temp_min,
      temp_max,
      pressure,
      humidity,
    },
    visibility,
    wind: {
      speed: windSpeed,
      deg: windDeg,
    },
    rain: {
      lh: rain,
    },
    clouds: {
      all: clouds,
    },
    sys: {
      sunrise,
      sunset,
    },
    name,
  };
}
