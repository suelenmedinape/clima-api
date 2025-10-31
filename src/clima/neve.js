export function neve(mm) {
  const container = document.getElementById("clima-card");
  container.style.overflow = "hidden"; // impede flocos fora da div

  const rainData = { "1h": mm };

  function getRainConfig(rainMm) {
    if (!rainMm || rainMm <= 0) {
      return { numDrops: 0, speed: 0 };
    }

    const baseFlakes = 50; // mínima quantidade de flocos
    const maxFlakes = 200; // máxima quantidade
    const intensity = Math.min(rainMm / 10, 1);

    const numFlakes = Math.floor(baseFlakes + intensity * (maxFlakes - baseFlakes));
    const speed = 0.4 + intensity * 1.2; // leve e suave

    return { numFlakes, speed };
  }

  const { numFlakes, speed } = getRainConfig(rainData["1h"]);
  console.log("Chuvisco de flocos:", rainData["1h"], "mm/h →", numFlakes, "flocos");

  function createFlake() {
    const flake = document.createElement("div");
    flake.classList.add("flake");
    flake.textContent = "❄"; // símbolo do floco
    flake.style.position = "absolute";
    flake.style.pointerEvents = "none";
    flake.style.color = "rgba(230, 240, 255, 0.8)";
    flake.style.fontSize = Math.random() * 10 + 6 + "px"; // tamanhos variados
    flake.style.left = Math.random() * container.offsetWidth + "px";
    flake.style.top = Math.random() * -container.offsetHeight - 30 + "px";
    flake.style.opacity = "0";
    container.appendChild(flake);
    return flake;
  }

  const flakes = [];
  for (let i = 0; i < numFlakes; i++) {
    flakes.push(createFlake());
  }

  const anime = window.anime;

  function animateFlake(flake) {
    const duration = (Math.random() * 6000 + 6000) / speed;
    const translateY = container.offsetHeight + 50;
    const translateX = Math.random() * 80 - 40; // leve movimento lateral (vento)

    anime({
      targets: flake,
      translateX,
      translateY,
      duration,
      loop: true,
      easing: "easeInOutSine",
      delay: Math.random() * 4000,
      begin: () => (flake.style.opacity = "1"),
    });
  }

  flakes.forEach(animateFlake);
}
