export function chuva(mm) {
  const container = document.getElementById("clima-card");

  // Exemplo vindo da API do OpenWeather
  const rainData = { "1h": mm }; // mm de chuva por hora

  // Função que converte mm/h em um fator visual
  function getRainConfig(rainMm) {
    if (!rainMm || rainMm <= 0) {
      return { numDrops: 0, speed: 0 }; // sem chuva
    }

    // Fator de escala — controla visualmente a densidade
    const baseDrops = 50; // chuva mínima visível
    const maxDrops = 400; // chuva forte

    // Normaliza o valor para um intervalo 0–1
    const intensity = Math.min(rainMm / 10, 1); // 10mm/h = chuva forte

    // Calcula gotas e velocidade
    const numDrops = Math.floor(baseDrops + intensity * (maxDrops - baseDrops));
    const speed = 1.5 + intensity * 2; // mais chuva → mais rápida

    return { numDrops, speed };
  }

  const { numDrops, speed } = getRainConfig(rainData["1h"]);

  console.log("Chuva:", rainData["1h"], "mm/h →", numDrops, "gotas");

  function createDrop() {
    const drop = document.createElement("div");
    drop.classList.add("raindrop");
    drop.style.left = Math.random() * container.offsetWidth + "px";

    // Começa acima da div (fora da área visível)
    drop.style.top = Math.random() * -container.offsetHeight - 50 + "px";

    drop.style.width = "2px";
    drop.style.height = Math.random() * 8 + 8 + "px";
    drop.style.background = "rgba(174,194,224,0.6)";
    drop.style.position = "absolute";
    drop.style.pointerEvents = "none";
    drop.style.borderRadius = "50%";
    drop.style.opacity = "0"; // invisível no início
    container.appendChild(drop);
    return drop;
  }

  const drops = [];
  for (let i = 0; i < numDrops; i++) {
    drops.push(createDrop());
  }

  const anime = window.anime;

  function animateDrop(drop) {
    const duration = (Math.random() * 2000 + 2000) / speed;
    const translateY = window.innerHeight + 50;

    anime({
      targets: drop,
      translateY: container.offsetHeight + 100,
      duration,
      loop: true,
      easing: "linear",
      delay: Math.random() * 2000,
      begin: () => (drop.style.opacity = "1"), // fica visível só quando começa a cair
    });
  }

  drops.forEach(animateDrop);
}
