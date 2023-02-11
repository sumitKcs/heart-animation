const container = document.querySelector(".container");
for (let i = 0; i <= 100; i++) {
  const hearts = document.createElement("div");
  hearts.classList.add("heart");
  container.appendChild(hearts);
}

function animateHearts() {
  anime({
    targets: ".heart",
    translateX: function () {
      return anime.random(-700, 700);
    },
    translateY: function () {
      return anime.random(-500, 500);
    },
    rotate: 45,
    scale: function () {
      return anime.random(1, 5);
    },
    easing: "easeInOutBack",
    duration: 3000,
    delay: anime.stagger(10),
    complete: animateHearts,
  });
}
animateHearts();

function swRegistration() {
  const heart = [
    "font-size: 20px",
    "padding: 12px",
    "margin: 4px 0 4px 4px",
    "color: rgba(238,58,136,1)",
  ].join(";");
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("serviceWorker.js", {
        scope: ".",
      })
      .then((registration) => {
        console.log("%c❤️", heart);
      })
      .catch((err) => console.log(err));
  }
}
swRegistration();
