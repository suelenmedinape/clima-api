export function nuvensFlutuando() {
  const container = document.getElementById("clima-card");

  // Evita duplicar animações
  if (container.querySelector(".cloud")) return;

  const numClouds = 3; // poucas nuvens leves

  for (let i = 0; i < numClouds; i++) {
    const cloud = document.createElement("div");
    cloud.classList.add("cloud");

    const width = Math.random() * 400 + 300; // nuvens largas
    const height = Math.random() * 80 + 40; // achatadas
    const blur = Math.random() * 20 + 10; // bem suaves
    const opacity = Math.random() * 0.15 + 0.25; // leves e translúcidas

    // nuvem com textura alongada e dispersa (não circular)
    Object.assign(cloud.style, {
      position: "absolute",
      width: `${width}px`,
      height: `${height}px`,
      background: `
        linear-gradient(90deg, rgba(255,255,255,${opacity}) 0%, rgba(255,255,255,${opacity * 0.6}) 40%, rgba(255,255,255,0) 100%)
      `,
      borderRadius: "50% / 100%", // elíptico, não circular
      filter: `blur(${blur}px)`,
      left: `${Math.random() * container.offsetWidth}px`,
      top: `${Math.random() * 60 + 10}px`, // só na parte superior
      zIndex: 2,
      opacity,
      pointerEvents: "none",
      transform: `rotate(${Math.random() * 15 - 7}deg)`, // leve inclinação
    });

    container.appendChild(cloud);

    // animação lenta, horizontal
    const duration = 90000 + Math.random() * 60000; // 90–150s
    const startX = -width - Math.random() * 200;
    const endX = container.offsetWidth + width + Math.random() * 200;

    anime({
      targets: cloud,
      translateX: [startX, endX],
      duration,
      easing: "linear",
      loop: true,
      delay: Math.random() * 8000,
    });
  }
}
