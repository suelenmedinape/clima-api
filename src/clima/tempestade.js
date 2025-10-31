export function tempestade(div) {
  const sky = div.querySelector("#sky");
  const flash = div.querySelector("#flash");

  function createLightning() {
    const svgNS = "http://www.w3.org/2000/svg";
    const lightning = document.createElementNS(svgNS, "svg");
    lightning.classList.add("lightning");
    lightning.setAttribute("width", div.clientWidth);
    lightning.setAttribute("height", div.clientHeight);
    lightning.style.position = "absolute";
    lightning.style.top = "0";
    lightning.style.left = "0";

    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("stroke", "white");
    path.setAttribute("stroke-width", 2);
    path.setAttribute("fill", "none");

    // gera zig-zag do raio
    const startX = Math.random() * div.clientWidth;
    let d = `M ${startX} 0`;
    let y = 0;
    while (y < div.clientHeight) {
      const xOffset = (Math.random() - 0.5) * 80;
      const yOffset = Math.random() * 40 + 20;
      y += yOffset;
      d += ` L ${startX + xOffset} ${y}`;
    }

    path.setAttribute("d", d);
    lightning.appendChild(path);
    sky.appendChild(lightning);

    // flash dentro da div apenas
    flash.style.opacity = 0.8;
    setTimeout(() => (flash.style.opacity = 0), 100);

    // animação curta
    lightning.style.opacity = 1;
    setTimeout(() => lightning.remove(), 300);
  }

  // gera raios aleatoriamente dentro da div
  function lightningStrike() {
    createLightning();
    const next = Math.random() * 10000 + 3000;
    setTimeout(lightningStrike, next);
  }

  lightningStrike();
}
