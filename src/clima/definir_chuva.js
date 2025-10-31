import { chuva } from "./chuva.js";
import { chuvisco } from "./chuvisco.js";
import { nuvensFlutuando } from "./claro.js";
import { particulasLuz } from "./luz.js";
import { neve } from "./neve.js";
import { nuvensFlutuandoo } from "./nuvens.js";
import { tempestade } from "./tempestade.js";

export function addChuva(mm, tipo) {
  const div = document.querySelector("#clima-card");
  console.log("tipo", tipo);

  // cria camadas apenas se ainda não existirem
  if (!document.getElementById("sky")) {
    const sky = document.createElement("div");
    sky.id = "sky";
    const flash = document.createElement("div");
    flash.id = "flash";

    // estilo interno para posicionar no topo do card
    Object.assign(sky.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      overflow: "hidden",
    });

    Object.assign(flash.style, {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "white",
      opacity: "0",
      transition: "opacity 0.1s ease",
      pointerEvents: "none",
    });

    div.appendChild(sky);
    div.appendChild(flash);
  }

  if (mm > 0) {
    console.log("Está chovendo");
    if (tipo === "Thunderstorm") {
      tempestade(div);
      chuva(mm);
    } else if (tipo === "Rain") {
      chuva(mm);
    } else if (tipo === "Snow") {
      neve(mm);
    } else if (tipo === "Drizzle") {
      chuvisco(mm);
    }
  } else {
    if (tipo === "Clear") {
      nuvensFlutuando();
      particulasLuz();
    } else if (tipo === "Clouds") {
      nuvensFlutuandoo();
    }
    nuvensFlutuando();
  }
}
