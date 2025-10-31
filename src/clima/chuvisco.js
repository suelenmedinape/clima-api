export function chuvisco(mm) {
  const container = document.getElementById("clima-card");
  container.style.overflow = "hidden"; // evita que pontos apareçam fora

  const rainData = { "1h": mm };

  function getRainConfig(rainMm) {
    if (!rainMm || rainMm <= 0) {
      return { numDrops: 0, speed: 0 };
    }

    const baseDrops = 80;  // quantidade mínima de pontos
    const maxDrops = 300;  // quantidade máxima (chuva mais densa)
    const intensity = Math.min(rainMm / 10, 1);

    const numDrops = Math.floor(baseDrops + intensity * (maxDrops - baseDrops));
    const speed = 0.5 + intensity * 1.2; // movimento mais suave

    return { numDrops, speed };
  }

  const { numDrops, speed } = getRainConfig(rainData["1h"]);
  console.log("Chuvisco:", rainData["1h"], "mm/h →", numDrops, "pontos");

  function createDrop() {
    const drop = document.createElement("div");
    drop.classList.add("raindrop");
    drop.style.left = Math.random() * container.offsetWidth + "px";
    drop.style.top = Math.random() * -container.offsetHeight - 20 + "px";

    // Pontinhos pequenos e sutis
    const size = Math.random() * 2 + 1; // entre 1px e 3px
    drop.style.width = `${size}px`;
    drop.style.height = `${size}px`;
    drop.style.background = "hsla(219, 21%, 69%, 0.50)";
    drop.style.position = "absolute";
    drop.style.pointerEvents = "none";
    drop.style.borderRadius = "50%";
    drop.style.opacity = "0";
    container.appendChild(drop);
    return drop;
  }

  const drops = [];
  for (let i = 0; i < numDrops; i++) {
    drops.push(createDrop());
  }

  const anime = window.anime;

  function animateDrop(drop) {
    const duration = (Math.random() * 4000 + 4000) / speed;
    const translateY = container.offsetHeight + 30;
    const translateX = Math.random() * 10 - 5; // leve desvio horizontal

    anime({
      targets: drop,
      translateX,
      translateY,
      duration,
      loop: true,
      easing: "linear",
      delay: Math.random() * 3000,
      begin: () => (drop.style.opacity = "1"),
    });
  }

  drops.forEach(animateDrop);
}
