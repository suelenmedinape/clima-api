export function particulasLuz() {
  const container = document.getElementById("clima-card");
  container.style.overflow = "hidden";

  for (let i = 0; i < 40; i++) {
    const p = document.createElement("div");
    p.classList.add("particle");
    p.style.position = "absolute";
    p.style.left = Math.random() * container.offsetWidth + "px";
    p.style.top = Math.random() * container.offsetHeight + "px";
    p.style.width = "3px";
    p.style.height = "3px";
    p.style.background = "rgba(255,255,200,0.7)";
    p.style.borderRadius = "50%";
    container.appendChild(p);

    anime({
      targets: p,
      translateY: [0, -30],
      opacity: [0.8, 0.2, 0.8],
      duration: 4000 + Math.random() * 2000,
      loop: true,
      delay: Math.random() * 4000,
      easing: "easeInOutSine",
      direction: "alternate",
    });
  }
}
