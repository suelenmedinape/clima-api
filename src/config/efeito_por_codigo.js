import { dados_chuva } from "./dados_chuva.js";

export function configurarEfeitoPorCodigo(id) {
  // reset padrão
  let intensidade = "leve";
  let numDrops = 100;
  let wind = -0.8;

  if (id >= 200 && id < 300) {
    // Thunderstorm
    intensidade = "forte";
    numDrops = 400;
    wind = -1.5;
  } else if (id >= 300 && id < 400) {
    // Drizzle
    intensidade = "leve";
    numDrops = 150;
    wind = -0.7;
  } else if (id >= 500 && id < 505) {
    // Rain normal
    intensidade = "moderada";
    numDrops = 250;
    wind = -1.0;
  } else if (id >= 520 && id < 532) {
    // Chuva forte / torrencial
    intensidade = "forte";
    numDrops = 500;
    wind = -1.3;
  } else if (id >= 600 && id < 700) {
    // Neve
    intensidade = "leve";
    numDrops = 200;
    wind = -0.5;
  } else if (id === 800) {
    // Céu limpo
    intensidade = "nenhuma";
    numDrops = 0;
  } else if (id > 800 && id < 805) {
    // Nuvens
    intensidade = "leve";
    numDrops = 0;
  }

  // atualiza dados globais
  dados_chuva.setNumDrops(numDrops);
  dados_chuva.setWindSpeed(wind);

  return { intensidade, numDrops, wind };
}
