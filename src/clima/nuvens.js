export function nuvensFlutuandoo() {
  const container = document.getElementById("clima-card");

  // Evita duplicar animações
  if (container.querySelector(".cloud")) return;

  const numClouds = 4; // um pouco mais de nuvens

  for (let i = 0; i < numClouds; i++) {
    const cloud = document.createElement("div");
    cloud.classList.add("cloud");

    const width = Math.random() * 350 + 300;
    const height = Math.random() * 100 + 80;
    const blur = Math.random() * 12 + 6;
    const opacity = Math.random() * 0.25 + 0.4;

    // camada base da nuvem (cheia e suave)
    Object.assign(cloud.style, {
      position: "absolute",
      width: `${width}px`,
      height: `${height}px`,
      background: `
        radial-gradient(ellipse at 40% 50%, rgba(255,255,255,${opacity}), rgba(230,230,230,${
        opacity * 0.8
      }) 60%, rgba(255,255,255,0) 100%)
      `,
      borderRadius: "50% / 60%",
      filter: `blur(${blur}px)`,
      left: `${Math.random() * container.offsetWidth}px`,
      top: `${Math.random() * 70 + 10}px`,
      zIndex: 2,
      pointerEvents: "none",
      opacity,
      transform: `rotate(${Math.random() * 10 - 5}deg)`,
    });

    // cria uma camada extra para dar volume
    const puff = document.createElement("div");
    Object.assign(puff.style, {
      position: "absolute",
      width: `${width * 0.7}px`,
      height: `${height * 0.8}px`,
      left: `${Math.random() * 40 - 20}px`,
      top: `${Math.random() * 20 - 10}px`,
      background: `
        radial-gradient(ellipse at 50% 50%, rgba(255,255,255,${opacity}), rgba(210,210,210,${
        opacity * 0.7
      }) 70%, rgba(255,255,255,0) 100%)
      `,
      borderRadius: "60% / 70%",
      filter: `blur(${blur + 4}px)`,
    });
    cloud.appendChild(puff);

    container.appendChild(cloud);

    // movimento horizontal lento e natural
    const duration = 80000 + Math.random() * 60000;
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
